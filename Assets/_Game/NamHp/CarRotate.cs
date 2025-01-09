using System;
using UnityEngine;
using UnityEngine.EventSystems;

public class CarRotate : MonoBehaviour
{
    [SerializeField] private Transform carTrans; // Đối tượng xe cần xoay
    [SerializeField] private Transform garageNewTrans; // Garage (nếu cần)
    [SerializeField] private float horizontalRotationSpeed = 30f; // Tốc độ xoay
    [SerializeField] private float maxRotationAngle = 2f; // Góc xoay tối đa
    [SerializeField] private float smoothSpeed = 30f; // Tốc độ làm mượt khi xoay

    private Vector2 _lastTouchPosition; // Vị trí touch cuối
    private bool _isDragging = false; // Cờ kiểm tra trạng thái vuốt
    private float _currentRotation = 0f; // Giá trị xoay hiện tại
    private Vector2 _delta;
    // Bộ nhớ tạm cho kiểm tra UI
    private static readonly PointerEventData PointerEventData = new PointerEventData(EventSystem.current);
    private static readonly System.Collections.Generic.List<RaycastResult> RaycastResults = new System.Collections.Generic.List<RaycastResult>();
    
    private void Update()
    {
        // Nếu con trỏ trên UI, không xử lý
        if (IsPointerOverUI()) return;

        HandleInput(this._delta);
    }

    private void HandleInput(Vector2 delta)
    {
        delta = Vector2.zero;
        if (Input.touchCount > 0) // Trường hợp cảm ứng (mobile)
        {
            var touch = Input.GetTouch(0);

            if (touch.phase == TouchPhase.Began)
            {
                _isDragging = true;
                _lastTouchPosition = touch.position;
            }
            else if (touch.phase == TouchPhase.Moved && _isDragging)
            {
                delta = touch.position - _lastTouchPosition;
                _lastTouchPosition = touch.position;
            }
            else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
            {
                _isDragging = false;
            }
        }
        else if (Input.GetMouseButton(0)) // Trường hợp chuột (PC)
        {
            delta = new Vector2(Input.GetAxis("Mouse X"), 0); // Chỉ xoay theo trục X
        }

        // Nếu có chuyển động (delta khác 0), gọi hàm xử lý xoay
        if (delta.sqrMagnitude > 0.001f) // Dùng sqrMagnitude để tối ưu hiệu suất so với Vector2.zero
        {
            RotateCar(delta.x);
        }
    }
    
    private void RotateCar(float deltaX)
    {
        // Tính góc xoay mới
        float targetRotation = deltaX * horizontalRotationSpeed * Time.deltaTime;

        // Làm mượt xoay
        _currentRotation = Mathf.Lerp(_currentRotation, targetRotation, smoothSpeed * Time.deltaTime);

        // Giới hạn góc xoay
        _currentRotation = Mathf.Clamp(_currentRotation, -maxRotationAngle, maxRotationAngle);

        // Xoay xe
        carTrans.Rotate(Vector3.up, -_currentRotation);

        // Đồng bộ garage (nếu cần)
        if (garageNewTrans != null)
        {
            garageNewTrans.Rotate(Vector3.up, -_currentRotation);
        }
    }

    private bool IsPointerOverUI()
    {
        if (EventSystem.current == null) return false;

        // Sử dụng bộ nhớ tạm để tránh tạo mới
        PointerEventData.position = Input.mousePosition;
        RaycastResults.Clear();

        EventSystem.current.RaycastAll(PointerEventData, RaycastResults);
        return RaycastResults.Count > 0;
    }
}
