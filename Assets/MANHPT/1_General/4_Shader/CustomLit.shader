﻿Shader "Horus/Lit"
{
    Properties
    {
        [Enum(UnityEngine.Rendering.CullMode)]_Cull ("Cull", Range(0, 1)) = 2

        _MainTex ("Texture", 2D) = "white" {}
        _Color("Albedo", Color) = (1,1,1,1)
        _Smoothness("Smoothness", Range(0,1)) = 0.5
        _Metallic("Metallic", Range(0,1)) = 0.5

        //Normal
        _BumpScale("Normal Scale", Float) = 1.0
        [Normal] _BumpMap("Normal Map", 2D) = "bump" {}

        //Emission
        [HDR] _EmissionColor("Emission", Color) = (0,0,0)
        _EmissionMap("Emission Map", 2D) = "white" {}
    }
    SubShader
    {
        Tags
        {
            "RenderType"="Opaque"
        }

        LOD 100
        Cull [_Cull]

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
                float4 normalOS : NORMAL;
                float4 tangentOS : TANGENT;
                float4 lightMapUV : TEXCOORD1;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv : TEXCOORD0;
                float3 positionWS : TEXCOORD1;
                float3 normalWS : TEXCOORD2;
                float3 viewDir : TEXCOORD5;
                float fogFactor : TEXCOORD6;
                float3x3 tangentToWorld : TEXCOORD8;
                DECLARE_LIGHTMAP_OR_SH(lightmapUV, vertexSH, 7);
            };

            TEXTURE2D(_MainTex);
            SAMPLER(sampler_MainTex);
            TEXTURE2D(_EmissionMap);
            SAMPLER(sampler_EmissionMap);
            TEXTURE2D(_BumpMap);
            SAMPLER(sampler_BumpMap);

            CBUFFER_START(UnityPerMaterial)
                float4 _MainTex_ST;
                half4 _Color;
                half _Smoothness;
                half _Metallic;
                half3 _EmissionColor;
                float _BumpScale;
            CBUFFER_END

            Varyings vert(Attributes input)
            {
                Varyings output = (Varyings)0;


                VertexPositionInputs vertexInput = GetVertexPositionInputs(input.positionOS.xyz);
                VertexNormalInputs normalInput = GetVertexNormalInputs(input.normalOS.xyz, input.tangentOS);
                float4 tangentWS = float4(normalInput.tangentWS, input.tangentOS.w);

                output.positionWS = vertexInput.positionWS;
                output.viewDir = GetWorldSpaceViewDir(output.positionWS);
                output.uv = TRANSFORM_TEX(input.uv, _MainTex);
                output.positionCS = vertexInput.positionCS;
                output.fogFactor = ComputeFogFactor(vertexInput.positionCS.z);
                output.tangentToWorld = float3x3(tangentWS.xyz, normalInput.bitangentWS, normalInput.normalWS);

                OUTPUT_LIGHTMAP_UV(input.lightMapUV, unity_LightmapST, output.lightmapUV);
                    OUTPUT_SH(output.normalWS.xyz, output.vertexSH);

                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                float2 uv = input.uv;
                half4 col = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, uv) * _Color;
                half3 emissionCol = SAMPLE_TEXTURE2D(_EmissionMap, sampler_EmissionMap, uv).rgb * _EmissionColor;
                float3 normalTS = UnpackNormalScale(SAMPLE_TEXTURE2D(_BumpMap, sampler_BumpMap, uv), _BumpScale);
                float3 normalWS = TransformTangentToWorld(normalTS, input.tangentToWorld);

                InputData inputData = (InputData)0;
                inputData.positionWS = input.positionWS;
                inputData.normalWS = SafeNormalize(normalWS);
                inputData.viewDirectionWS = SafeNormalize(input.viewDir);
                inputData.bakedGI = SAMPLE_GI(input.lightmapUV, input.vertexSH, input.normalWS);
                inputData.normalizedScreenSpaceUV = GetNormalizedScreenSpaceUV(input.positionCS);
                half4 finalCol = UniversalFragmentPBR(inputData, col.rgb, _Metallic, 0,
                    _Smoothness, 1,
                    emissionCol, 1);

                finalCol.rgb = MixFog(finalCol.rgb, input.fogFactor);
                return finalCol;
                // để giá lập lit hoạt động tốt cần có đủ các thuộc tính trong này
            }
            ENDHLSL
        }
    }

    Fallback "Universal Render Pipeline/Unlit"
}