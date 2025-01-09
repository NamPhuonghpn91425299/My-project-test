Shader "Horus/GodRay 1"
{
    Properties
    {
        [Enum(Transparent, 10, Additive, 1)] _DstBlend ("Rendering Mode", Float) = 1
        _Color ("Color", color) = (1, 1, 1, 0.5)
        [Toggle] _FadeX ("Horizontal Fade", float) = 1
        [Toggle] _FadeY ("Vertical Fade", float) = 1
        _Fade ("Fade (xy - horizontal, zw - vertical)", vector) = (0, 1, 0, 1)
    }
    SubShader
    {
        Tags
        {
            "RenderType"="Transparent"
            "Queue"="Transparent"
        }
        Blend SrcAlpha [_DstBlend]
        ZWrite Off
        Cull Off
        LOD 100

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #pragma shader_feature _FADEX_ON
            #pragma shader_feature _FADEY_ON
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct appdata
            {
                float4 positionOS : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float fogFactor : TEXCOORD1;
                float4 positionCS : SV_POSITION;
            };

            CBUFFER_START(UnityPerMaterial)
                float4 _Fade;
                half4 _Color;
            CBUFFER_END

            float remap_clamp(float value, float inMin, float inMax, float outMin, float outMax)
            {
                float t = saturate((value - inMin) / (inMax - inMin));
                return lerp(outMin, outMax, t);
            }

            v2f vert(appdata v)
            {
                v2f o;
                o.positionCS = TransformObjectToHClip(v.positionOS.xyz);
                o.uv = v.uv;
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            half4 frag(v2f i) : SV_Target
            {
                half4 col = _Color;
                    
                #if _FADEX_ON
                if(_Fade.x != 0 || _Fade.y != 0)
                {
                    col.a *= remap_clamp(i.uv.x, _Fade.x, _Fade.y, 0, 1);
                }
                #endif

                    
                #if _FADEY_ON
                if(_Fade.z != 0 || _Fade.w != 0)
                {
                    col.a *= remap_clamp(i.uv.y, _Fade.z, _Fade.w, 0, 1);
                }
                #endif
                col.xyz = MixFog(col.xyz, i.fogFactor);
                return col;
            }
            ENDHLSL
        }
    }
}