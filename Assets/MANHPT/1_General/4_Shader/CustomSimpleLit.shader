﻿Shader "Horus/SimpleLit"
{
    Properties
    {
        [_BaseMap]_MainTex ("Texture", 2D) = "white" {}
        _Color("Albedo", Color) = (1,1,1,1)

        [HDR] _EmissionColor("Emission", Color) = (0,0,0)
        _EmissionMap("Emission Map", 2D) = "white" {}
    }
    SubShader
    {
        Tags
        {
            "RenderType"="Opaque" "RenderPipeline"="UniversalPipeline"
        }
        LOD 100

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog

            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS_CASCADE
            #pragma multi_compile _ DIRLIGHTMAP_COMBINED
            #pragma multi_compile _ LIGHTMAP_ON


            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv : TEXCOORD0;
                float3 normalOS : NORMAL;
                float4 lightMapUV : TEXCOORD1;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv : TEXCOORD0;
                float3 positionWS : TEXCOORD1;
                float3 normalWS : TEXCOORD2;
                float3 diffuse : TEXCOORD4;
                float fogFactor : TEXCOORD5;
                DECLARE_LIGHTMAP_OR_SH(lightmapUV, vertexSH, 3);
            };

            TEXTURE2D(_MainTex);
            SAMPLER(sampler_MainTex);

            TEXTURE2D(_EmissionMap);
            SAMPLER(sampler_EmissionMap);

            cbuffer UnityPerMaterial
            {
                float4 _MainTex_ST;
                half4 _Color;
                half3 _EmissionColor;
            }

            Varyings vert(Attributes input)
            {
                Varyings output = (Varyings)0;

                VertexPositionInputs vertexInput = GetVertexPositionInputs(input.positionOS.xyz);
                VertexNormalInputs normalInput = GetVertexNormalInputs(input.normalOS);

                Light mainLight = GetMainLight();
                half3 attenuatedLightColor = mainLight.color * mainLight.distanceAttenuation * mainLight.
                    shadowAttenuation;
                half3 diffuse = LightingLambert(attenuatedLightColor, mainLight.direction, normalInput.normalWS);
                output.diffuse = diffuse;

                output.positionCS = vertexInput.positionCS;
                output.positionWS = vertexInput.positionWS;
                output.normalWS = normalInput.normalWS;
                output.uv = TRANSFORM_TEX(input.uv, _MainTex);
                output.fogFactor = ComputeFogFactor(vertexInput.positionCS.z);

                OUTPUT_LIGHTMAP_UV(input.lightMapUV, unity_LightmapST, output.lightmapUV);
                OUTPUT_SH(output.normalWS, output.vertexSH);

                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                half4 albedo = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, input.uv) * _Color;
                half3 emission = SAMPLE_TEXTURE2D(_EmissionMap, sampler_EmissionMap, input.uv).rgb * _EmissionColor;

                //SAMPLE_GI
                // Đây là một macro để lấy mẫu Global Illumination (GI).
                // Nó sẽ lấy thông tin ánh sáng từ lightmap nếu có, hoặc từ spherical harmonics nếu không có lightmap.
                // Tác dụng: Cung cấp thông tin về ánh sáng môi trường và ánh sáng gián tiếp.

                // input.vertexSH
                // SH là viết tắt của Spherical Harmonics.
                // Đây là thông tin về ánh sáng môi trường được tính toán cho mỗi vertex.
                // Tác dụng: Cung cấp ánh sáng môi trường khi không có lightmap.       
                half3 bakedGI = SAMPLE_GI(input.lightmapUV, input.vertexSH, input.normalWS);

                half3 color = (bakedGI + input.diffuse) * albedo.rgb + emission;
                color = MixFog(color, input.fogFactor);
                return half4(color, albedo.a);
            }
            ENDHLSL
        }
    }
}