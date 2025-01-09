Shader "Horus/GodRay 2"
{
    Properties
    {
        [Enum(Transparent, 10, Additive, 1)] _DstBlend ("Rendering Mode", Float) = 1
        _Color ("Color", color) = (1, 1, 1, 0.5)
        _Power ("Highlight Power", range(0, 10)) = 1
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

            // sampler2D _MainTex;
            CBUFFER_START(UnityPerMaterial)
                float _Power;
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
                // sample the texture
                // half4 col = tex2D(_MainTex, i.uv);
                // apply fog
                half4 col = _Color;
                col.a *= i.uv.y;
                col.a *= pow(remap_clamp(abs(i.uv.x - 0.5), 0, 0.5, 1, 0), _Power);
                col.xyz = MixFog(col.xyz, i.fogFactor);
                return col;
            }
            ENDHLSL
        }
    }
}