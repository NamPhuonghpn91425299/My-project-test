if ( TRACE ) { TRACE( JSON.parse( '["CarRotate#init","CarRotate#init","CarRotate#Update","CarRotate#HandleInput","CarRotate#RotateCar","CarRotate#IsPointerOverUI"]' ) ); }
/**
 * @version 1.0.9140.17157
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CarRotate start.*/
    Bridge.define("CarRotate", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                PointerEventData: null,
                RaycastResults: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CarRotate#init", this ); }

                    this.PointerEventData = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current);
                    this.RaycastResults = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
                }
            }
        },
        fields: {
            carTrans: null,
            garageNewTrans: null,
            horizontalRotationSpeed: 0,
            maxRotationAngle: 0,
            smoothSpeed: 0,
            _lastTouchPosition: null,
            _isDragging: false,
            _currentRotation: 0,
            _delta: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CarRotate#init", this ); }

                this._lastTouchPosition = new UnityEngine.Vector2();
                this._delta = new UnityEngine.Vector2();
                this.horizontalRotationSpeed = 30.0;
                this.maxRotationAngle = 2.0;
                this.smoothSpeed = 30.0;
                this._isDragging = false;
                this._currentRotation = 0.0;
            }
        },
        methods: {
            /*CarRotate.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CarRotate#Update", this ); }

                // Nếu con trỏ trên UI, không xử lý
                if (this.IsPointerOverUI()) {
                    return;
                }

                this.HandleInput(this._delta);
            },
            /*CarRotate.Update end.*/

            /*CarRotate.HandleInput start.*/
            HandleInput: function (delta) {
if ( TRACE ) { TRACE( "CarRotate#HandleInput", this ); }

                delta = pc.Vec2.ZERO.clone();
                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);

                    if (touch.phase === UnityEngine.TouchPhase.Began) {
                        this._isDragging = true;
                        this._lastTouchPosition = touch.position.$clone();
                    } else if (touch.phase === UnityEngine.TouchPhase.Moved && this._isDragging) {
                        delta = touch.position.$clone().sub( this._lastTouchPosition );
                        this._lastTouchPosition = touch.position.$clone();
                    } else if (touch.phase === UnityEngine.TouchPhase.Ended || touch.phase === UnityEngine.TouchPhase.Canceled) {
                        this._isDragging = false;
                    }
                } else if (UnityEngine.Input.GetMouseButton(0)) {
                    delta = new pc.Vec2( UnityEngine.Input.GetAxis("Mouse X"), 0 ); // Chỉ xoay theo trục X
                }

                // Nếu có chuyển động (delta khác 0), gọi hàm xử lý xoay
                if (delta.lengthSq() > 0.001) {
                    this.RotateCar(delta.x);
                }
            },
            /*CarRotate.HandleInput end.*/

            /*CarRotate.RotateCar start.*/
            RotateCar: function (deltaX) {
if ( TRACE ) { TRACE( "CarRotate#RotateCar", this ); }

                // Tính góc xoay mới
                var targetRotation = deltaX * this.horizontalRotationSpeed * UnityEngine.Time.deltaTime;

                // Làm mượt xoay
                this._currentRotation = pc.math.lerp(this._currentRotation, targetRotation, this.smoothSpeed * UnityEngine.Time.deltaTime);

                // Giới hạn góc xoay
                this._currentRotation = Math.max(-this.maxRotationAngle, Math.min(this._currentRotation, this.maxRotationAngle));

                // Xoay xe
                this.carTrans.Rotate$1(pc.Vec3.UP.clone(), -this._currentRotation);

                // Đồng bộ garage (nếu cần)
                if (UnityEngine.Component.op_Inequality(this.garageNewTrans, null)) {
                    this.garageNewTrans.Rotate$1(pc.Vec3.UP.clone(), -this._currentRotation);
                }
            },
            /*CarRotate.RotateCar end.*/

            /*CarRotate.IsPointerOverUI start.*/
            IsPointerOverUI: function () {
if ( TRACE ) { TRACE( "CarRotate#IsPointerOverUI", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(UnityEngine.EventSystems.EventSystem.current, null)) {
                    return false;
                }

                // Sử dụng bộ nhớ tạm để tránh tạo mới
                CarRotate.PointerEventData.position = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                CarRotate.RaycastResults.clear();

                UnityEngine.EventSystems.EventSystem.current.RaycastAll(CarRotate.PointerEventData, CarRotate.RaycastResults);
                return CarRotate.RaycastResults.Count > 0;
            },
            /*CarRotate.IsPointerOverUI end.*/


        }
    });
    /*CarRotate end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","UnityEngine.EventSystems","System.Collections.Generic"];

    /*CarRotate start.*/
    $m("CarRotate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleInput","t":8,"pi":[{"n":"delta","pt":$n[0].Vector2,"ps":0}],"sn":"HandleInput","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"IsPointerOverUI","t":8,"sn":"IsPointerOverUI","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"RotateCar","t":8,"pi":[{"n":"deltaX","pt":$n[1].Single,"ps":0}],"sn":"RotateCar","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"PointerEventData","is":true,"t":4,"rt":$n[2].PointerEventData,"sn":"PointerEventData","ro":true},{"a":1,"n":"RaycastResults","is":true,"t":4,"rt":$n[3].List$1(UnityEngine.EventSystems.RaycastResult),"sn":"RaycastResults","ro":true},{"a":1,"n":"_currentRotation","t":4,"rt":$n[1].Single,"sn":"_currentRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_delta","t":4,"rt":$n[0].Vector2,"sn":"_delta"},{"a":1,"n":"_isDragging","t":4,"rt":$n[1].Boolean,"sn":"_isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_lastTouchPosition","t":4,"rt":$n[0].Vector2,"sn":"_lastTouchPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carTrans","t":4,"rt":$n[0].Transform,"sn":"carTrans"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"garageNewTrans","t":4,"rt":$n[0].Transform,"sn":"garageNewTrans"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"horizontalRotationSpeed","t":4,"rt":$n[1].Single,"sn":"horizontalRotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxRotationAngle","t":4,"rt":$n[1].Single,"sn":"maxRotationAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothSpeed","t":4,"rt":$n[1].Single,"sn":"smoothSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CarRotate end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
