using UnityEngine;
using UnityEngine.UI;

public class Example : MonoBehaviour
{
    public RawImage rawImage; // Kéo thả RawImage từ Inspector
    public RenderTexture renderTexture; // Kéo thả RenderTexture từ Inspector

    void Start()
    {
        // Gán RenderTexture cho RawImage
        rawImage.texture = renderTexture;
    }
}