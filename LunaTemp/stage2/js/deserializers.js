var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointSpring' )
  var i741 = data
  i740.spring = i741[0]
  i740.damper = i741[1]
  i740.targetPosition = i741[2]
  return i740
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointMotor' )
  var i743 = data
  i742.m_TargetVelocity = i743[0]
  i742.m_Force = i743[1]
  i742.m_FreeSpin = i743[2]
  return i742
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointLimits' )
  var i745 = data
  i744.m_Min = i745[0]
  i744.m_Max = i745[1]
  i744.m_Bounciness = i745[2]
  i744.m_BounceMinVelocity = i745[3]
  i744.m_ContactDistance = i745[4]
  i744.minBounce = i745[5]
  i744.maxBounce = i745[6]
  return i744
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointDrive' )
  var i747 = data
  i746.m_PositionSpring = i747[0]
  i746.m_PositionDamper = i747[1]
  i746.m_MaximumForce = i747[2]
  i746.m_UseAcceleration = i747[3]
  return i746
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i749 = data
  i748.m_Spring = i749[0]
  i748.m_Damper = i749[1]
  return i748
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i751 = data
  i750.m_Limit = i751[0]
  i750.m_Bounciness = i751[1]
  i750.m_ContactDistance = i751[2]
  return i750
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i753 = data
  i752.m_ExtremumSlip = i753[0]
  i752.m_ExtremumValue = i753[1]
  i752.m_AsymptoteSlip = i753[2]
  i752.m_AsymptoteValue = i753[3]
  i752.m_Stiffness = i753[4]
  return i752
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i755 = data
  i754.m_LowerAngle = i755[0]
  i754.m_UpperAngle = i755[1]
  return i754
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i757 = data
  i756.m_MotorSpeed = i757[0]
  i756.m_MaximumMotorTorque = i757[1]
  return i756
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i759 = data
  i758.m_DampingRatio = i759[0]
  i758.m_Frequency = i759[1]
  i758.m_Angle = i759[2]
  return i758
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i761 = data
  i760.m_LowerTranslation = i761[0]
  i760.m_UpperTranslation = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i763 = data
  i762.name = i763[0]
  i762.width = i763[1]
  i762.height = i763[2]
  i762.mipmapCount = i763[3]
  i762.anisoLevel = i763[4]
  i762.filterMode = i763[5]
  i762.hdr = !!i763[6]
  i762.format = i763[7]
  i762.wrapMode = i763[8]
  i762.alphaIsTransparency = !!i763[9]
  i762.alphaSource = i763[10]
  i762.graphicsFormat = i763[11]
  i762.sRGBTexture = !!i763[12]
  i762.desiredColorSpace = i763[13]
  i762.wrapU = i763[14]
  i762.wrapV = i763[15]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i765 = data
  i764.position = new pc.Vec3( i765[0], i765[1], i765[2] )
  i764.scale = new pc.Vec3( i765[3], i765[4], i765[5] )
  i764.rotation = new pc.Quat(i765[6], i765[7], i765[8], i765[9])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'animatorController')
  request.r(i767[2], i767[3], 0, i766, 'avatar')
  i766.updateMode = i767[4]
  i766.hasTransformHierarchy = !!i767[5]
  i766.applyRootMotion = !!i767[6]
  var i769 = i767[7]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.humanBones = i768
  i766.enabled = !!i767[8]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i773 = data
  i772.enabled = !!i773[0]
  i772.aspect = i773[1]
  i772.orthographic = !!i773[2]
  i772.orthographicSize = i773[3]
  i772.backgroundColor = new pc.Color(i773[4], i773[5], i773[6], i773[7])
  i772.nearClipPlane = i773[8]
  i772.farClipPlane = i773[9]
  i772.fieldOfView = i773[10]
  i772.depth = i773[11]
  i772.clearFlags = i773[12]
  i772.cullingMask = i773[13]
  i772.rect = i773[14]
  request.r(i773[15], i773[16], 0, i772, 'targetTexture')
  i772.usePhysicalProperties = !!i773[17]
  i772.focalLength = i773[18]
  i772.sensorSize = new pc.Vec2( i773[19], i773[20] )
  i772.lensShift = new pc.Vec2( i773[21], i773[22] )
  i772.gateFit = i773[23]
  i772.commandBufferCount = i773[24]
  i772.cameraType = i773[25]
  return i772
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i775 = data
  i774.m_RenderShadows = !!i775[0]
  i774.m_RequiresDepthTextureOption = i775[1]
  i774.m_RequiresOpaqueTextureOption = i775[2]
  i774.m_CameraType = i775[3]
  var i777 = i775[4]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i774.m_Cameras = i776
  i774.m_RendererIndex = i775[5]
  i774.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i775[6] )
  request.r(i775[7], i775[8], 0, i774, 'm_VolumeTrigger')
  i774.m_VolumeFrameworkUpdateModeOption = i775[9]
  i774.m_RenderPostProcessing = !!i775[10]
  i774.m_Antialiasing = i775[11]
  i774.m_AntialiasingQuality = i775[12]
  i774.m_StopNaN = !!i775[13]
  i774.m_Dithering = !!i775[14]
  i774.m_ClearDepth = !!i775[15]
  i774.m_AllowXRRendering = !!i775[16]
  i774.m_AllowHDROutput = !!i775[17]
  i774.m_UseScreenCoordOverride = !!i775[18]
  i774.m_ScreenSizeOverride = new pc.Vec4( i775[19], i775[20], i775[21], i775[22] )
  i774.m_ScreenCoordScaleBias = new pc.Vec4( i775[23], i775[24], i775[25], i775[26] )
  i774.m_RequiresDepthTexture = !!i775[27]
  i774.m_RequiresColorTexture = !!i775[28]
  i774.m_Version = i775[29]
  i774.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i775[30], i774.m_TaaSettings)
  return i774
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i781 = data
  i780.m_Quality = i781[0]
  i780.m_FrameInfluence = i781[1]
  i780.m_JitterScale = i781[2]
  i780.m_MipBias = i781[3]
  i780.m_VarianceClampScale = i781[4]
  i780.m_ContrastAdaptiveSharpening = i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i783 = data
  i782.enabled = !!i783[0]
  i782.type = i783[1]
  i782.color = new pc.Color(i783[2], i783[3], i783[4], i783[5])
  i782.cullingMask = i783[6]
  i782.intensity = i783[7]
  i782.range = i783[8]
  i782.spotAngle = i783[9]
  i782.shadows = i783[10]
  i782.shadowNormalBias = i783[11]
  i782.shadowBias = i783[12]
  i782.shadowStrength = i783[13]
  i782.shadowResolution = i783[14]
  i782.lightmapBakeType = i783[15]
  i782.renderMode = i783[16]
  request.r(i783[17], i783[18], 0, i782, 'cookie')
  i782.cookieSize = i783[19]
  return i782
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i785 = data
  i784.m_Version = i785[0]
  i784.m_UsePipelineSettings = !!i785[1]
  i784.m_AdditionalLightsShadowResolutionTier = i785[2]
  i784.m_LightLayerMask = i785[3]
  i784.m_RenderingLayers = i785[4]
  i784.m_CustomShadowLayers = !!i785[5]
  i784.m_ShadowLayerMask = i785[6]
  i784.m_ShadowRenderingLayers = i785[7]
  i784.m_LightCookieSize = new pc.Vec2( i785[8], i785[9] )
  i784.m_LightCookieOffset = new pc.Vec2( i785[10], i785[11] )
  i784.m_SoftShadowQuality = i785[12]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i787 = data
  i786.name = i787[0]
  i786.tagId = i787[1]
  i786.enabled = !!i787[2]
  i786.isStatic = !!i787[3]
  i786.layer = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'sharedMesh')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'additionalVertexStreams')
  i790.enabled = !!i791[2]
  request.r(i791[3], i791[4], 0, i790, 'sharedMaterial')
  var i793 = i791[5]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.sharedMaterials = i792
  i790.receiveShadows = !!i791[6]
  i790.shadowCastingMode = i791[7]
  i790.sortingLayerID = i791[8]
  i790.sortingOrder = i791[9]
  i790.lightmapIndex = i791[10]
  i790.lightmapSceneIndex = i791[11]
  i790.lightmapScaleOffset = new pc.Vec4( i791[12], i791[13], i791[14], i791[15] )
  i790.lightProbeUsage = i791[16]
  i790.reflectionProbeUsage = i791[17]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i797 = data
  i796.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i797[0], i796.main)
  i796.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i797[1], i796.colorBySpeed)
  i796.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i797[2], i796.colorOverLifetime)
  i796.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i797[3], i796.emission)
  i796.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i797[4], i796.rotationBySpeed)
  i796.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i797[5], i796.rotationOverLifetime)
  i796.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i797[6], i796.shape)
  i796.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i797[7], i796.sizeBySpeed)
  i796.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i797[8], i796.sizeOverLifetime)
  i796.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i797[9], i796.textureSheetAnimation)
  i796.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i797[10], i796.velocityOverLifetime)
  i796.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i797[11], i796.noise)
  i796.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i797[12], i796.inheritVelocity)
  i796.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i797[13], i796.forceOverLifetime)
  i796.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i797[14], i796.limitVelocityOverLifetime)
  i796.useAutoRandomSeed = !!i797[15]
  i796.randomSeed = i797[16]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemMain()
  var i799 = data
  i798.duration = i799[0]
  i798.loop = !!i799[1]
  i798.prewarm = !!i799[2]
  i798.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.startDelay)
  i798.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[4], i798.startLifetime)
  i798.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[5], i798.startSpeed)
  i798.startSize3D = !!i799[6]
  i798.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startSizeX)
  i798.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[8], i798.startSizeY)
  i798.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.startSizeZ)
  i798.startRotation3D = !!i799[10]
  i798.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[11], i798.startRotationX)
  i798.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[12], i798.startRotationY)
  i798.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[13], i798.startRotationZ)
  i798.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i799[14], i798.startColor)
  i798.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[15], i798.gravityModifier)
  i798.simulationSpace = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'customSimulationSpace')
  i798.simulationSpeed = i799[19]
  i798.useUnscaledTime = !!i799[20]
  i798.scalingMode = i799[21]
  i798.playOnAwake = !!i799[22]
  i798.maxParticles = i799[23]
  i798.emitterVelocityMode = i799[24]
  i798.stopAction = i799[25]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i800 = root || new pc.MinMaxCurve()
  var i801 = data
  i800.mode = i801[0]
  i800.curveMin = new pc.AnimationCurve( { keys_flow: i801[1] } )
  i800.curveMax = new pc.AnimationCurve( { keys_flow: i801[2] } )
  i800.curveMultiplier = i801[3]
  i800.constantMin = i801[4]
  i800.constantMax = i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i802 = root || new pc.MinMaxGradient()
  var i803 = data
  i802.mode = i803[0]
  i802.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i803[1], i802.gradientMin)
  i802.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i803[2], i802.gradientMax)
  i802.colorMin = new pc.Color(i803[3], i803[4], i803[5], i803[6])
  i802.colorMax = new pc.Color(i803[7], i803[8], i803[9], i803[10])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i805 = data
  i804.mode = i805[0]
  var i807 = i805[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i807[i + 0]) );
  }
  i804.colorKeys = i806
  var i809 = i805[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i809[i + 0]) );
  }
  i804.alphaKeys = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemColorBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i811[1], i810.color)
  i810.range = new pc.Vec2( i811[2], i811[3] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i815 = data
  i814.color = new pc.Color(i815[0], i815[1], i815[2], i815[3])
  i814.time = i815[4]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i819 = data
  i818.alpha = i819[0]
  i818.time = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemColorOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i821[1], i820.color)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemEmitter()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.rateOverTime)
  i822.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.rateOverDistance)
  var i825 = i823[3]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i825[i + 0]) );
  }
  i822.bursts = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemBurst()
  var i829 = data
  i828.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[0], i828.count)
  i828.cycleCount = i829[1]
  i828.minCount = i829[2]
  i828.maxCount = i829[3]
  i828.repeatInterval = i829[4]
  i828.time = i829[5]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemRotationBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  i830.range = new pc.Vec2( i831[5], i831[6] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemRotationOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemShape()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.shapeType = i835[1]
  i834.randomDirectionAmount = i835[2]
  i834.sphericalDirectionAmount = i835[3]
  i834.randomPositionAmount = i835[4]
  i834.alignToDirection = !!i835[5]
  i834.radius = i835[6]
  i834.radiusMode = i835[7]
  i834.radiusSpread = i835[8]
  i834.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[9], i834.radiusSpeed)
  i834.radiusThickness = i835[10]
  i834.angle = i835[11]
  i834.length = i835[12]
  i834.boxThickness = new pc.Vec3( i835[13], i835[14], i835[15] )
  i834.meshShapeType = i835[16]
  request.r(i835[17], i835[18], 0, i834, 'mesh')
  request.r(i835[19], i835[20], 0, i834, 'meshRenderer')
  request.r(i835[21], i835[22], 0, i834, 'skinnedMeshRenderer')
  i834.useMeshMaterialIndex = !!i835[23]
  i834.meshMaterialIndex = i835[24]
  i834.useMeshColors = !!i835[25]
  i834.normalOffset = i835[26]
  i834.arc = i835[27]
  i834.arcMode = i835[28]
  i834.arcSpread = i835[29]
  i834.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[30], i834.arcSpeed)
  i834.donutRadius = i835[31]
  i834.position = new pc.Vec3( i835[32], i835[33], i835[34] )
  i834.rotation = new pc.Vec3( i835[35], i835[36], i835[37] )
  i834.scale = new pc.Vec3( i835[38], i835[39], i835[40] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemSizeBySpeed()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.separateAxes = !!i837[4]
  i836.range = new pc.Vec2( i837[5], i837[6] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemSizeOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.separateAxes = !!i839[4]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.mode = i841[1]
  i840.animation = i841[2]
  i840.numTilesX = i841[3]
  i840.numTilesY = i841[4]
  i840.useRandomRow = !!i841[5]
  i840.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[6], i840.frameOverTime)
  i840.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[7], i840.startFrame)
  i840.cycleCount = i841[8]
  i840.rowIndex = i841[9]
  i840.flipU = i841[10]
  i840.flipV = i841[11]
  i840.spriteCount = i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sprites = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.radial)
  i846.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[5], i846.speedModifier)
  i846.space = i847[6]
  i846.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[7], i846.orbitalX)
  i846.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[8], i846.orbitalY)
  i846.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[9], i846.orbitalZ)
  i846.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[10], i846.orbitalOffsetX)
  i846.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[11], i846.orbitalOffsetY)
  i846.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[12], i846.orbitalOffsetZ)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemNoise()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.separateAxes = !!i849[1]
  i848.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.strengthX)
  i848.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.strengthY)
  i848.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[4], i848.strengthZ)
  i848.frequency = i849[5]
  i848.damping = !!i849[6]
  i848.octaveCount = i849[7]
  i848.octaveMultiplier = i849[8]
  i848.octaveScale = i849[9]
  i848.quality = i849[10]
  i848.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[11], i848.scrollSpeed)
  i848.scrollSpeedMultiplier = i849[12]
  i848.remapEnabled = !!i849[13]
  i848.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[14], i848.remapX)
  i848.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[15], i848.remapY)
  i848.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[16], i848.remapZ)
  i848.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[17], i848.positionAmount)
  i848.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[18], i848.rotationAmount)
  i848.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[19], i848.sizeAmount)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemInheritVelocity()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.mode = i851[1]
  i850.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.curve)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemForceOverLifetime()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.x)
  i852.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.y)
  i852.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.z)
  i852.space = i853[4]
  i852.randomized = !!i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[1], i854.limit)
  i854.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.limitX)
  i854.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.limitY)
  i854.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.limitZ)
  i854.dampen = i855[5]
  i854.separateAxes = !!i855[6]
  i854.space = i855[7]
  i854.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.drag)
  i854.multiplyDragByParticleSize = !!i855[9]
  i854.multiplyDragByParticleVelocity = !!i855[10]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i857 = data
  i856.enabled = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'sharedMaterial')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[4]
  i856.shadowCastingMode = i857[5]
  i856.sortingLayerID = i857[6]
  i856.sortingOrder = i857[7]
  i856.lightmapIndex = i857[8]
  i856.lightmapSceneIndex = i857[9]
  i856.lightmapScaleOffset = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  i856.lightProbeUsage = i857[14]
  i856.reflectionProbeUsage = i857[15]
  request.r(i857[16], i857[17], 0, i856, 'mesh')
  i856.meshCount = i857[18]
  i856.activeVertexStreamsCount = i857[19]
  i856.alignment = i857[20]
  i856.renderMode = i857[21]
  i856.sortMode = i857[22]
  i856.lengthScale = i857[23]
  i856.velocityScale = i857[24]
  i856.cameraVelocityScale = i857[25]
  i856.normalDirection = i857[26]
  i856.sortingFudge = i857[27]
  i856.minParticleSize = i857[28]
  i856.maxParticleSize = i857[29]
  i856.pivot = new pc.Vec3( i857[30], i857[31], i857[32] )
  request.r(i857[33], i857[34], 0, i856, 'trailMaterial')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ReflectionProbe"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ReflectionProbe' )
  var i861 = data
  i860.size = new pc.Vec3( i861[0], i861[1], i861[2] )
  i860.center = new pc.Vec3( i861[3], i861[4], i861[5] )
  i860.nearClipPlane = i861[6]
  i860.farClipPlane = i861[7]
  i860.intensity = i861[8]
  i860.resolution = i861[9]
  i860.cullingMask = i861[10]
  i860.clearFlags = i861[11]
  i860.backgroundColor = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  i860.boxProjection = !!i861[16]
  i860.mode = i861[17]
  i860.importance = i861[18]
  i860.refreshMode = i861[19]
  i860.timeSlicingMode = i861[20]
  request.r(i861[21], i861[22], 0, i860, 'bakedTexture')
  request.r(i861[23], i861[24], 0, i860, 'customBakedTexture')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i863 = data
  i862.name = i863[0]
  i862.halfPrecision = !!i863[1]
  i862.useUInt32IndexFormat = !!i863[2]
  i862.vertexCount = i863[3]
  i862.aabb = i863[4]
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( !!i865[i + 0] );
  }
  i862.streams = i864
  i862.vertices = i863[6]
  var i867 = i863[7]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i867[i + 0]) );
  }
  i862.subMeshes = i866
  var i869 = i863[8]
  var i868 = []
  for(var i = 0; i < i869.length; i += 16) {
    i868.push( new pc.Mat4().setData(i869[i + 0], i869[i + 1], i869[i + 2], i869[i + 3],  i869[i + 4], i869[i + 5], i869[i + 6], i869[i + 7],  i869[i + 8], i869[i + 9], i869[i + 10], i869[i + 11],  i869[i + 12], i869[i + 13], i869[i + 14], i869[i + 15]) );
  }
  i862.bindposes = i868
  var i871 = i863[9]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i871[i + 0]) );
  }
  i862.blendShapes = i870
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i877 = data
  i876.triangles = i877[0]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i883 = data
  i882.name = i883[0]
  var i885 = i883[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i885[i + 0]) );
  }
  i882.frames = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i886 = root || new pc.UnityMaterial()
  var i887 = data
  i886.name = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'shader')
  i886.renderQueue = i887[3]
  i886.enableInstancing = !!i887[4]
  var i889 = i887[5]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i889[i + 0]) );
  }
  i886.floatParameters = i888
  var i891 = i887[6]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i891[i + 0]) );
  }
  i886.colorParameters = i890
  var i893 = i887[7]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i893[i + 0]) );
  }
  i886.vectorParameters = i892
  var i895 = i887[8]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i895[i + 0]) );
  }
  i886.textureParameters = i894
  var i897 = i887[9]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i897[i + 0]) );
  }
  i886.materialFlags = i896
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i901 = data
  i900.name = i901[0]
  i900.value = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i905 = data
  i904.name = i905[0]
  i904.value = new pc.Color(i905[1], i905[2], i905[3], i905[4])
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i909 = data
  i908.name = i909[0]
  i908.value = new pc.Vec4( i909[1], i909[2], i909[3], i909[4] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i913 = data
  i912.name = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'value')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i917 = data
  i916.name = i917[0]
  i916.enabled = !!i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i919 = data
  i918.name = i919[0]
  i918.width = i919[1]
  i918.height = i919[2]
  i918.anisoLevel = i919[3]
  i918.filterMode = i919[4]
  i918.hdr = !!i919[5]
  i918.colorFormat = i919[6]
  i918.depthStencilFormat = i919[7]
  i918.renderTextureFormat = i919[8]
  i918.depth = i919[9]
  i918.wrapU = i919[10]
  i918.wrapV = i919[11]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i921 = data
  i920.name = i921[0]
  i920.atlasId = i921[1]
  i920.mipmapCount = i921[2]
  i920.hdr = !!i921[3]
  i920.size = i921[4]
  i920.anisoLevel = i921[5]
  i920.filterMode = i921[6]
  var i923 = i921[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 4) {
    i922.push( UnityEngine.Rect.MinMaxRect(i923[i + 0], i923[i + 1], i923[i + 2], i923[i + 3]) );
  }
  i920.rects = i922
  i920.wrapU = i921[8]
  i920.wrapV = i921[9]
  return i920
}

Deserializers["CarRotate"] = function (request, data, root) {
  var i926 = root || request.c( 'CarRotate' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'carTrans')
  request.r(i927[2], i927[3], 0, i926, 'garageNewTrans')
  i926.horizontalRotationSpeed = i927[4]
  i926.maxRotationAngle = i927[5]
  i926.smoothSpeed = i927[6]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i929 = data
  i928.center = new pc.Vec3( i929[0], i929[1], i929[2] )
  i928.size = new pc.Vec3( i929[3], i929[4], i929[5] )
  i928.enabled = !!i929[6]
  i928.isTrigger = !!i929[7]
  request.r(i929[8], i929[9], 0, i928, 'material')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i931 = data
  i930.name = i931[0]
  i930.index = i931[1]
  i930.startup = !!i931[2]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i933 = data
  i932.pivot = new pc.Vec2( i933[0], i933[1] )
  i932.anchorMin = new pc.Vec2( i933[2], i933[3] )
  i932.anchorMax = new pc.Vec2( i933[4], i933[5] )
  i932.sizeDelta = new pc.Vec2( i933[6], i933[7] )
  i932.anchoredPosition3D = new pc.Vec3( i933[8], i933[9], i933[10] )
  i932.rotation = new pc.Quat(i933[11], i933[12], i933[13], i933[14])
  i932.scale = new pc.Vec3( i933[15], i933[16], i933[17] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.planeDistance = i935[1]
  i934.referencePixelsPerUnit = i935[2]
  i934.isFallbackOverlay = !!i935[3]
  i934.renderMode = i935[4]
  i934.renderOrder = i935[5]
  i934.sortingLayerName = i935[6]
  i934.sortingOrder = i935[7]
  i934.scaleFactor = i935[8]
  request.r(i935[9], i935[10], 0, i934, 'worldCamera')
  i934.overrideSorting = !!i935[11]
  i934.pixelPerfect = !!i935[12]
  i934.targetDisplay = i935[13]
  i934.overridePixelPerfect = !!i935[14]
  return i934
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i937 = data
  i936.m_UiScaleMode = i937[0]
  i936.m_ReferencePixelsPerUnit = i937[1]
  i936.m_ScaleFactor = i937[2]
  i936.m_ReferenceResolution = new pc.Vec2( i937[3], i937[4] )
  i936.m_ScreenMatchMode = i937[5]
  i936.m_MatchWidthOrHeight = i937[6]
  i936.m_PhysicalUnit = i937[7]
  i936.m_FallbackScreenDPI = i937[8]
  i936.m_DefaultSpriteDPI = i937[9]
  i936.m_DynamicPixelsPerUnit = i937[10]
  i936.m_PresetInfoIsWorld = !!i937[11]
  return i936
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i939 = data
  i938.m_IgnoreReversedGraphics = !!i939[0]
  i938.m_BlockingObjects = i939[1]
  i938.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i939[2] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i941 = data
  i940.cullTransparentMesh = !!i941[0]
  return i940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Image' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Sprite')
  i942.m_Type = i943[2]
  i942.m_PreserveAspect = !!i943[3]
  i942.m_FillCenter = !!i943[4]
  i942.m_FillMethod = i943[5]
  i942.m_FillAmount = i943[6]
  i942.m_FillClockwise = !!i943[7]
  i942.m_FillOrigin = i943[8]
  i942.m_UseSpriteMesh = !!i943[9]
  i942.m_PixelsPerUnitMultiplier = i943[10]
  request.r(i943[11], i943[12], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[13]
  i942.m_Color = new pc.Color(i943[14], i943[15], i943[16], i943[17])
  i942.m_RaycastTarget = !!i943[18]
  i942.m_RaycastPadding = new pc.Vec4( i943[19], i943[20], i943[21], i943[22] )
  return i942
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i945 = data
  i944.m_Spacing = i945[0]
  i944.m_ChildForceExpandWidth = !!i945[1]
  i944.m_ChildForceExpandHeight = !!i945[2]
  i944.m_ChildControlWidth = !!i945[3]
  i944.m_ChildControlHeight = !!i945[4]
  i944.m_ChildScaleWidth = !!i945[5]
  i944.m_ChildScaleHeight = !!i945[6]
  i944.m_ReverseArrangement = !!i945[7]
  i944.m_Padding = UnityEngine.RectOffset.FromPaddings(i945[8], i945[9], i945[10], i945[11])
  i944.m_ChildAlignment = i945[12]
  return i944
}

Deserializers["UnityEngine.UI.ToggleGroup"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.ToggleGroup' )
  var i947 = data
  i946.m_AllowSwitchOff = !!i947[0]
  return i946
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i949 = data
  i948.toggleTransition = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'graphic')
  i948.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i949[3], i948.onValueChanged)
  request.r(i949[4], i949[5], 0, i948, 'm_Group')
  i948.m_IsOn = !!i949[6]
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[7], i948.m_Navigation)
  i948.m_Transition = i949[8]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[9], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[10], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[11], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[12]
  request.r(i949[13], i949[14], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i953 = data
  var i955 = i953[0]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('UnityEngine.Events.PersistentCall', i955[i + 0]));
  }
  i952.m_Calls = i954
  return i952
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_Target')
  i958.m_TargetAssemblyTypeName = i959[2]
  i958.m_MethodName = i959[3]
  i958.m_Mode = i959[4]
  i958.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i959[5], i958.m_Arguments)
  i958.m_CallState = i959[6]
  return i958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i961 = data
  i960.m_Mode = i961[0]
  i960.m_WrapAround = !!i961[1]
  request.r(i961[2], i961[3], 0, i960, 'm_SelectOnUp')
  request.r(i961[4], i961[5], 0, i960, 'm_SelectOnDown')
  request.r(i961[6], i961[7], 0, i960, 'm_SelectOnLeft')
  request.r(i961[8], i961[9], 0, i960, 'm_SelectOnRight')
  return i960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i963 = data
  i962.m_NormalColor = new pc.Color(i963[0], i963[1], i963[2], i963[3])
  i962.m_HighlightedColor = new pc.Color(i963[4], i963[5], i963[6], i963[7])
  i962.m_PressedColor = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  i962.m_SelectedColor = new pc.Color(i963[12], i963[13], i963[14], i963[15])
  i962.m_DisabledColor = new pc.Color(i963[16], i963[17], i963[18], i963[19])
  i962.m_ColorMultiplier = i963[20]
  i962.m_FadeDuration = i963[21]
  return i962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_HighlightedSprite')
  request.r(i965[2], i965[3], 0, i964, 'm_PressedSprite')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectedSprite')
  request.r(i965[6], i965[7], 0, i964, 'm_DisabledSprite')
  return i964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i967 = data
  i966.m_NormalTrigger = i967[0]
  i966.m_HighlightedTrigger = i967[1]
  i966.m_PressedTrigger = i967[2]
  i966.m_SelectedTrigger = i967[3]
  i966.m_DisabledTrigger = i967[4]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i969 = data
  i968.usedByComposite = !!i969[0]
  i968.autoTiling = !!i969[1]
  i968.size = new pc.Vec2( i969[2], i969[3] )
  i968.edgeRadius = i969[4]
  i968.enabled = !!i969[5]
  i968.isTrigger = !!i969[6]
  i968.usedByEffector = !!i969[7]
  i968.density = i969[8]
  i968.offset = new pc.Vec2( i969[9], i969[10] )
  request.r(i969[11], i969[12], 0, i968, 'material')
  return i968
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.Text' )
  var i971 = data
  i970.m_FontData = request.d('UnityEngine.UI.FontData', i971[0], i970.m_FontData)
  i970.m_Text = i971[1]
  request.r(i971[2], i971[3], 0, i970, 'm_Material')
  i970.m_Maskable = !!i971[4]
  i970.m_Color = new pc.Color(i971[5], i971[6], i971[7], i971[8])
  i970.m_RaycastTarget = !!i971[9]
  i970.m_RaycastPadding = new pc.Vec4( i971[10], i971[11], i971[12], i971[13] )
  return i970
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.FontData' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_Font')
  i972.m_FontSize = i973[2]
  i972.m_FontStyle = i973[3]
  i972.m_BestFit = !!i973[4]
  i972.m_MinSize = i973[5]
  i972.m_MaxSize = i973[6]
  i972.m_Alignment = i973[7]
  i972.m_AlignByGeometry = !!i973[8]
  i972.m_RichText = !!i973[9]
  i972.m_HorizontalOverflow = i973[10]
  i972.m_VerticalOverflow = i973[11]
  i972.m_LineSpacing = i973[12]
  return i972
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_FirstSelected')
  i974.m_sendNavigationEvents = !!i975[2]
  i974.m_DragThreshold = i975[3]
  return i974
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i977 = data
  i976.m_HorizontalAxis = i977[0]
  i976.m_VerticalAxis = i977[1]
  i976.m_SubmitButton = i977[2]
  i976.m_CancelButton = i977[3]
  i976.m_InputActionsPerSecond = i977[4]
  i976.m_RepeatDelay = i977[5]
  i976.m_ForceModuleActive = !!i977[6]
  i976.m_SendPointerHoverToParent = !!i977[7]
  return i976
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i979 = data
  i978.priority = i979[0]
  i978.blendDistance = i979[1]
  i978.weight = i979[2]
  request.r(i979[3], i979[4], 0, i978, 'sharedProfile')
  i978.m_IsGlobal = !!i979[5]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i981 = data
  i980.ambientIntensity = i981[0]
  i980.reflectionIntensity = i981[1]
  i980.ambientMode = i981[2]
  i980.ambientLight = new pc.Color(i981[3], i981[4], i981[5], i981[6])
  i980.ambientSkyColor = new pc.Color(i981[7], i981[8], i981[9], i981[10])
  i980.ambientGroundColor = new pc.Color(i981[11], i981[12], i981[13], i981[14])
  i980.ambientEquatorColor = new pc.Color(i981[15], i981[16], i981[17], i981[18])
  i980.fogColor = new pc.Color(i981[19], i981[20], i981[21], i981[22])
  i980.fogEndDistance = i981[23]
  i980.fogStartDistance = i981[24]
  i980.fogDensity = i981[25]
  i980.fog = !!i981[26]
  request.r(i981[27], i981[28], 0, i980, 'skybox')
  i980.fogMode = i981[29]
  var i983 = i981[30]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i983[i + 0]) );
  }
  i980.lightmaps = i982
  i980.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i981[31], i980.lightProbes)
  i980.lightmapsMode = i981[32]
  i980.mixedBakeMode = i981[33]
  i980.environmentLightingMode = i981[34]
  i980.ambientProbe = new pc.SphericalHarmonicsL2(i981[35])
  i980.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i981[36])
  i980.useReferenceAmbientProbe = !!i981[37]
  request.r(i981[38], i981[39], 0, i980, 'customReflection')
  request.r(i981[40], i981[41], 0, i980, 'defaultReflection')
  i980.defaultReflectionMode = i981[42]
  i980.defaultReflectionResolution = i981[43]
  i980.sunLightObjectId = i981[44]
  i980.pixelLightCount = i981[45]
  i980.defaultReflectionHDR = !!i981[46]
  i980.hasLightDataAsset = !!i981[47]
  i980.hasManualGenerate = !!i981[48]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'lightmapColor')
  request.r(i987[2], i987[3], 0, i986, 'lightmapDirection')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i988 = root || new UnityEngine.LightProbes()
  var i989 = data
  return i988
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'panelPrefab')
  var i999 = i997[2]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i999[i + 0]));
  }
  i996.prefabs = i998
  return i996
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1003 = data
  i1002.type = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'prefab')
  return i1002
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1005 = data
  i1004.m_Spacing = i1005[0]
  i1004.m_ChildForceExpandWidth = !!i1005[1]
  i1004.m_ChildForceExpandHeight = !!i1005[2]
  i1004.m_ChildControlWidth = !!i1005[3]
  i1004.m_ChildControlHeight = !!i1005[4]
  i1004.m_ChildScaleWidth = !!i1005[5]
  i1004.m_ChildScaleHeight = !!i1005[6]
  i1004.m_ReverseArrangement = !!i1005[7]
  i1004.m_Padding = UnityEngine.RectOffset.FromPaddings(i1005[8], i1005[9], i1005[10], i1005[11])
  i1004.m_ChildAlignment = i1005[12]
  return i1004
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1007 = data
  i1006.m_HorizontalFit = i1007[0]
  i1006.m_VerticalFit = i1007[1]
  return i1006
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'contentHolder')
  return i1008
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'nameLabel')
  request.r(i1011[2], i1011[3], 0, i1010, 'scrollRect')
  request.r(i1011[4], i1011[5], 0, i1010, 'viewport')
  request.r(i1011[6], i1011[7], 0, i1010, 'Canvas')
  return i1010
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1013 = data
  i1012.m_IgnoreLayout = !!i1013[0]
  i1012.m_MinWidth = i1013[1]
  i1012.m_MinHeight = i1013[2]
  i1012.m_PreferredWidth = i1013[3]
  i1012.m_PreferredHeight = i1013[4]
  i1012.m_FlexibleWidth = i1013[5]
  i1012.m_FlexibleHeight = i1013[6]
  i1012.m_LayoutPriority = i1013[7]
  return i1012
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Button' )
  var i1015 = data
  i1014.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1015[0], i1014.m_OnClick)
  i1014.m_Navigation = request.d('UnityEngine.UI.Navigation', i1015[1], i1014.m_Navigation)
  i1014.m_Transition = i1015[2]
  i1014.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1015[3], i1014.m_Colors)
  i1014.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1015[4], i1014.m_SpriteState)
  i1014.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1015[5], i1014.m_AnimationTriggers)
  i1014.m_Interactable = !!i1015[6]
  request.r(i1015[7], i1015[8], 0, i1014, 'm_TargetGraphic')
  return i1014
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1017 = data
  i1016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1017[0], i1016.m_PersistentCalls)
  return i1016
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_ObjectArgument')
  i1018.m_ObjectArgumentAssemblyTypeName = i1019[2]
  i1018.m_IntArgument = i1019[3]
  i1018.m_FloatArgument = i1019[4]
  i1018.m_StringArgument = i1019[5]
  i1018.m_BoolArgument = !!i1019[6]
  return i1018
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'm_Content')
  i1020.m_Horizontal = !!i1021[2]
  i1020.m_Vertical = !!i1021[3]
  i1020.m_MovementType = i1021[4]
  i1020.m_Elasticity = i1021[5]
  i1020.m_Inertia = !!i1021[6]
  i1020.m_DecelerationRate = i1021[7]
  i1020.m_ScrollSensitivity = i1021[8]
  request.r(i1021[9], i1021[10], 0, i1020, 'm_Viewport')
  request.r(i1021[11], i1021[12], 0, i1020, 'm_HorizontalScrollbar')
  request.r(i1021[13], i1021[14], 0, i1020, 'm_VerticalScrollbar')
  i1020.m_HorizontalScrollbarVisibility = i1021[15]
  i1020.m_VerticalScrollbarVisibility = i1021[16]
  i1020.m_HorizontalScrollbarSpacing = i1021[17]
  i1020.m_VerticalScrollbarSpacing = i1021[18]
  i1020.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1021[19], i1020.m_OnValueChanged)
  return i1020
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1023 = data
  i1022.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1023[0], i1022.m_PersistentCalls)
  return i1022
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1025 = data
  i1024.m_ShowMaskGraphic = !!i1025[0]
  return i1024
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_HandleRect')
  i1026.m_Direction = i1027[2]
  i1026.m_Value = i1027[3]
  i1026.m_Size = i1027[4]
  i1026.m_NumberOfSteps = i1027[5]
  i1026.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1027[6], i1026.m_OnValueChanged)
  i1026.m_Navigation = request.d('UnityEngine.UI.Navigation', i1027[7], i1026.m_Navigation)
  i1026.m_Transition = i1027[8]
  i1026.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1027[9], i1026.m_Colors)
  i1026.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1027[10], i1026.m_SpriteState)
  i1026.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1027[11], i1026.m_AnimationTriggers)
  i1026.m_Interactable = !!i1027[12]
  request.r(i1027[13], i1027[14], 0, i1026, 'm_TargetGraphic')
  return i1026
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1029 = data
  i1028.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1029[0], i1028.m_PersistentCalls)
  return i1028
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1033[i + 0]));
  }
  i1030.m_Delegates = i1032
  return i1030
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1037 = data
  i1036.eventID = i1037[0]
  i1036.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1037[1], i1036.callback)
  return i1036
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1039 = data
  i1038.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1039[0], i1038.m_PersistentCalls)
  return i1038
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'nameLabel')
  request.r(i1041[2], i1041[3], 0, i1040, 'valueLabel')
  i1040.colorDefault = new pc.Color(i1041[4], i1041[5], i1041[6], i1041[7])
  i1040.colorSelected = new pc.Color(i1041[8], i1041[9], i1041[10], i1041[11])
  return i1040
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'nameLabel')
  request.r(i1043[2], i1043[3], 0, i1042, 'valueToggle')
  request.r(i1043[4], i1043[5], 0, i1042, 'checkmarkImage')
  i1042.colorDefault = new pc.Color(i1043[6], i1043[7], i1043[8], i1043[9])
  i1042.colorSelected = new pc.Color(i1043[10], i1043[11], i1043[12], i1043[13])
  return i1042
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'nameLabel')
  request.r(i1045[2], i1045[3], 0, i1044, 'valueLabel')
  i1044.colorDefault = new pc.Color(i1045[4], i1045[5], i1045[6], i1045[7])
  i1044.colorSelected = new pc.Color(i1045[8], i1045[9], i1045[10], i1045[11])
  return i1044
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'nameLabel')
  request.r(i1047[2], i1047[3], 0, i1046, 'valueLabel')
  i1046.colorDefault = new pc.Color(i1047[4], i1047[5], i1047[6], i1047[7])
  i1046.colorSelected = new pc.Color(i1047[8], i1047[9], i1047[10], i1047[11])
  return i1046
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'nameLabel')
  request.r(i1049[2], i1049[3], 0, i1048, 'valueLabel')
  i1048.colorDefault = new pc.Color(i1049[4], i1049[5], i1049[6], i1049[7])
  i1048.colorSelected = new pc.Color(i1049[8], i1049[9], i1049[10], i1049[11])
  return i1048
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'nextButtonText')
  request.r(i1051[2], i1051[3], 0, i1050, 'previousButtonText')
  request.r(i1051[4], i1051[5], 0, i1050, 'nameLabel')
  request.r(i1051[6], i1051[7], 0, i1050, 'valueLabel')
  i1050.colorDefault = new pc.Color(i1051[8], i1051[9], i1051[10], i1051[11])
  i1050.colorSelected = new pc.Color(i1051[12], i1051[13], i1051[14], i1051[15])
  return i1050
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'nameLabel')
  i1052.colorDefault = new pc.Color(i1053[2], i1053[3], i1053[4], i1053[5])
  i1052.colorSelected = new pc.Color(i1053[6], i1053[7], i1053[8], i1053[9])
  return i1052
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'nameLabel')
  request.r(i1055[2], i1055[3], 0, i1054, 'valueToggle')
  i1054.colorDefault = new pc.Color(i1055[4], i1055[5], i1055[6], i1055[7])
  i1054.colorSelected = new pc.Color(i1055[8], i1055[9], i1055[10], i1055[11])
  return i1054
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1057 = data
  i1056.toggleTransition = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'graphic')
  i1056.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1057[3], i1056.onValueChanged)
  request.r(i1057[4], i1057[5], 0, i1056, 'content')
  request.r(i1057[6], i1057[7], 0, i1056, 'arrowOpened')
  request.r(i1057[8], i1057[9], 0, i1056, 'arrowClosed')
  request.r(i1057[10], i1057[11], 0, i1056, 'm_Group')
  i1056.m_IsOn = !!i1057[12]
  i1056.m_Navigation = request.d('UnityEngine.UI.Navigation', i1057[13], i1056.m_Navigation)
  i1056.m_Transition = i1057[14]
  i1056.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1057[15], i1056.m_Colors)
  i1056.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1057[16], i1056.m_SpriteState)
  i1056.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1057[17], i1056.m_AnimationTriggers)
  i1056.m_Interactable = !!i1057[18]
  request.r(i1057[19], i1057[20], 0, i1056, 'm_TargetGraphic')
  return i1056
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'nameLabel')
  request.r(i1059[2], i1059[3], 0, i1058, 'valueToggle')
  request.r(i1059[4], i1059[5], 0, i1058, 'colorImage')
  request.r(i1059[6], i1059[7], 0, i1058, 'fieldR')
  request.r(i1059[8], i1059[9], 0, i1058, 'fieldG')
  request.r(i1059[10], i1059[11], 0, i1058, 'fieldB')
  request.r(i1059[12], i1059[13], 0, i1058, 'fieldA')
  i1058.colorDefault = new pc.Color(i1059[14], i1059[15], i1059[16], i1059[17])
  i1058.colorSelected = new pc.Color(i1059[18], i1059[19], i1059[20], i1059[21])
  return i1058
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'nameLabel')
  request.r(i1061[2], i1061[3], 0, i1060, 'valueLabel')
  i1060.colorDefault = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.colorSelected = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  return i1060
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'nameLabel')
  request.r(i1063[2], i1063[3], 0, i1062, 'valueToggle')
  request.r(i1063[4], i1063[5], 0, i1062, 'fieldX')
  request.r(i1063[6], i1063[7], 0, i1062, 'fieldY')
  i1062.colorDefault = new pc.Color(i1063[8], i1063[9], i1063[10], i1063[11])
  i1062.colorSelected = new pc.Color(i1063[12], i1063[13], i1063[14], i1063[15])
  return i1062
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'nameLabel')
  request.r(i1065[2], i1065[3], 0, i1064, 'valueToggle')
  request.r(i1065[4], i1065[5], 0, i1064, 'fieldX')
  request.r(i1065[6], i1065[7], 0, i1064, 'fieldY')
  request.r(i1065[8], i1065[9], 0, i1064, 'fieldZ')
  i1064.colorDefault = new pc.Color(i1065[10], i1065[11], i1065[12], i1065[13])
  i1064.colorSelected = new pc.Color(i1065[14], i1065[15], i1065[16], i1065[17])
  return i1064
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'nameLabel')
  request.r(i1067[2], i1067[3], 0, i1066, 'valueToggle')
  request.r(i1067[4], i1067[5], 0, i1066, 'fieldX')
  request.r(i1067[6], i1067[7], 0, i1066, 'fieldY')
  request.r(i1067[8], i1067[9], 0, i1066, 'fieldZ')
  request.r(i1067[10], i1067[11], 0, i1066, 'fieldW')
  i1066.colorDefault = new pc.Color(i1067[12], i1067[13], i1067[14], i1067[15])
  i1066.colorSelected = new pc.Color(i1067[16], i1067[17], i1067[18], i1067[19])
  return i1066
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1069 = data
  i1068.colorDefault = new pc.Color(i1069[0], i1069[1], i1069[2], i1069[3])
  i1068.colorSelected = new pc.Color(i1069[4], i1069[5], i1069[6], i1069[7])
  return i1068
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1071 = data
  i1070.colorDefault = new pc.Color(i1071[0], i1071[1], i1071[2], i1071[3])
  i1070.colorSelected = new pc.Color(i1071[4], i1071[5], i1071[6], i1071[7])
  return i1070
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'nameLabel')
  request.r(i1073[2], i1073[3], 0, i1072, 'header')
  i1072.colorDefault = new pc.Color(i1073[4], i1073[5], i1073[6], i1073[7])
  i1072.colorSelected = new pc.Color(i1073[8], i1073[9], i1073[10], i1073[11])
  return i1072
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'nameLabel')
  request.r(i1075[2], i1075[3], 0, i1074, 'valueToggle')
  var i1077 = i1075[4]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 1, i1076, '')
  }
  i1074.toggles = i1076
  i1074.colorDefault = new pc.Color(i1075[5], i1075[6], i1075[7], i1075[8])
  i1074.colorSelected = new pc.Color(i1075[9], i1075[10], i1075[11], i1075[12])
  return i1074
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'nameLabel')
  request.r(i1081[2], i1081[3], 0, i1080, 'valueToggle')
  request.r(i1081[4], i1081[5], 0, i1080, 'checkmarkImage')
  i1080.colorDefault = new pc.Color(i1081[6], i1081[7], i1081[8], i1081[9])
  i1080.colorSelected = new pc.Color(i1081[10], i1081[11], i1081[12], i1081[13])
  return i1080
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'nameLabel')
  request.r(i1083[2], i1083[3], 0, i1082, 'valueToggle')
  request.r(i1083[4], i1083[5], 0, i1082, 'checkmarkImage')
  i1082.colorDefault = new pc.Color(i1083[6], i1083[7], i1083[8], i1083[9])
  i1082.colorSelected = new pc.Color(i1083[10], i1083[11], i1083[12], i1083[13])
  return i1082
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'nextButtonText')
  request.r(i1085[2], i1085[3], 0, i1084, 'previousButtonText')
  request.r(i1085[4], i1085[5], 0, i1084, 'nameLabel')
  request.r(i1085[6], i1085[7], 0, i1084, 'valueLabel')
  i1084.colorDefault = new pc.Color(i1085[8], i1085[9], i1085[10], i1085[11])
  i1084.colorSelected = new pc.Color(i1085[12], i1085[13], i1085[14], i1085[15])
  return i1084
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'nameLabel')
  request.r(i1087[2], i1087[3], 0, i1086, 'valueToggle')
  i1086.colorDefault = new pc.Color(i1087[4], i1087[5], i1087[6], i1087[7])
  i1086.colorSelected = new pc.Color(i1087[8], i1087[9], i1087[10], i1087[11])
  return i1086
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'nameLabel')
  i1088.colorDefault = new pc.Color(i1089[2], i1089[3], i1089[4], i1089[5])
  i1088.colorSelected = new pc.Color(i1089[6], i1089[7], i1089[8], i1089[9])
  return i1088
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'nameLabel')
  request.r(i1091[2], i1091[3], 0, i1090, 'valueLabel')
  request.r(i1091[4], i1091[5], 0, i1090, 'progressBarRect')
  i1090.colorDefault = new pc.Color(i1091[6], i1091[7], i1091[8], i1091[9])
  i1090.colorSelected = new pc.Color(i1091[10], i1091[11], i1091[12], i1091[13])
  return i1090
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'nameLabel')
  request.r(i1093[2], i1093[3], 0, i1092, 'valueLabel')
  i1092.colorDefault = new pc.Color(i1093[4], i1093[5], i1093[6], i1093[7])
  i1092.colorSelected = new pc.Color(i1093[8], i1093[9], i1093[10], i1093[11])
  return i1092
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'nameLabel')
  request.r(i1095[2], i1095[3], 0, i1094, 'valueLabel')
  i1094.colorDefault = new pc.Color(i1095[4], i1095[5], i1095[6], i1095[7])
  i1094.colorSelected = new pc.Color(i1095[8], i1095[9], i1095[10], i1095[11])
  return i1094
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'nextButtonText')
  request.r(i1097[2], i1097[3], 0, i1096, 'previousButtonText')
  request.r(i1097[4], i1097[5], 0, i1096, 'nameLabel')
  request.r(i1097[6], i1097[7], 0, i1096, 'valueLabel')
  i1096.colorDefault = new pc.Color(i1097[8], i1097[9], i1097[10], i1097[11])
  i1096.colorSelected = new pc.Color(i1097[12], i1097[13], i1097[14], i1097[15])
  return i1096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'nextButtonText')
  request.r(i1099[2], i1099[3], 0, i1098, 'previousButtonText')
  request.r(i1099[4], i1099[5], 0, i1098, 'nameLabel')
  request.r(i1099[6], i1099[7], 0, i1098, 'valueLabel')
  i1098.colorDefault = new pc.Color(i1099[8], i1099[9], i1099[10], i1099[11])
  i1098.colorSelected = new pc.Color(i1099[12], i1099[13], i1099[14], i1099[15])
  return i1098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'panel')
  request.r(i1101[2], i1101[3], 0, i1100, 'valuePrefab')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1103 = data
  i1102.AdditionalLightsPerObjectLimit = i1103[0]
  i1102.AdditionalLightsRenderingMode = i1103[1]
  i1102.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1103[2], i1102.LightRenderingMode)
  i1102.ColorGradingLutSize = i1103[3]
  i1102.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1103[4], i1102.ColorGradingMode)
  i1102.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1103[5], i1102.MainLightRenderingMode)
  i1102.MainLightRenderingModeValue = i1103[6]
  i1102.MainLightShadowsSupported = !!i1103[7]
  i1102.MixedLightingSupported = !!i1103[8]
  i1102.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1103[9], i1102.MsaaQuality)
  i1102.MSAA = i1103[10]
  i1102.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1103[11], i1102.OpaqueDownsampling)
  i1102.RenderScale = i1103[12]
  i1102.RequireDepthTexture = !!i1103[13]
  i1102.RequireOpaqueTexture = !!i1103[14]
  i1102.ShadowAtlasResolution = i1103[15]
  i1102.ShadowDepthBias = i1103[16]
  i1102.SupportsHDR = !!i1103[17]
  i1102.SupportsTerrainHoles = !!i1103[18]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1105 = data
  i1104.Disabled = i1105[0]
  i1104.PerVertex = i1105[1]
  i1104.PerPixel = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1107 = data
  i1106.LowDynamicRange = i1107[0]
  i1106.HighDynamicRange = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1109 = data
  i1108.Disabled = i1109[0]
  i1108._2x = i1109[1]
  i1108._4x = i1109[2]
  i1108._8x = i1109[3]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1111 = data
  i1110.None = i1111[0]
  i1110._2xBilinear = i1111[1]
  i1110._4xBox = i1111[2]
  i1110._4xBilinear = i1111[3]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1115[i + 0]));
  }
  i1112.ShaderCompilationErrors = i1114
  i1112.name = i1113[1]
  i1112.guid = i1113[2]
  var i1117 = i1113[3]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1112.shaderDefinedKeywords = i1116
  var i1119 = i1113[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1119[i + 0]) );
  }
  i1112.passes = i1118
  var i1121 = i1113[5]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1121[i + 0]) );
  }
  i1112.usePasses = i1120
  var i1123 = i1113[6]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1123[i + 0]) );
  }
  i1112.defaultParameterValues = i1122
  request.r(i1113[7], i1113[8], 0, i1112, 'unityFallbackShader')
  i1112.readDepth = !!i1113[9]
  i1112.isCreatedByShaderGraph = !!i1113[10]
  i1112.compiled = !!i1113[11]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1127 = data
  i1126.shaderName = i1127[0]
  i1126.errorMessage = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1132 = root || new pc.UnityShaderPass()
  var i1133 = data
  i1132.id = i1133[0]
  i1132.subShaderIndex = i1133[1]
  i1132.name = i1133[2]
  i1132.passType = i1133[3]
  i1132.grabPassTextureName = i1133[4]
  i1132.usePass = !!i1133[5]
  i1132.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[6], i1132.zTest)
  i1132.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[7], i1132.zWrite)
  i1132.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[8], i1132.culling)
  i1132.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[9], i1132.blending)
  i1132.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[10], i1132.alphaBlending)
  i1132.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[11], i1132.colorWriteMask)
  i1132.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[12], i1132.offsetUnits)
  i1132.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[13], i1132.offsetFactor)
  i1132.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[14], i1132.stencilRef)
  i1132.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[15], i1132.stencilReadMask)
  i1132.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[16], i1132.stencilWriteMask)
  i1132.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[17], i1132.stencilOp)
  i1132.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[18], i1132.stencilOpFront)
  i1132.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[19], i1132.stencilOpBack)
  var i1135 = i1133[20]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1135[i + 0]) );
  }
  i1132.tags = i1134
  var i1137 = i1133[21]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1132.passDefinedKeywords = i1136
  var i1139 = i1133[22]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1139[i + 0]) );
  }
  i1132.passDefinedKeywordGroups = i1138
  var i1141 = i1133[23]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1141[i + 0]) );
  }
  i1132.variants = i1140
  var i1143 = i1133[24]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1143[i + 0]) );
  }
  i1132.excludedVariants = i1142
  i1132.hasDepthReader = !!i1133[25]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1145 = data
  i1144.val = i1145[0]
  i1144.name = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1147 = data
  i1146.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[0], i1146.src)
  i1146.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[1], i1146.dst)
  i1146.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[2], i1146.op)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1149 = data
  i1148.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[0], i1148.pass)
  i1148.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[1], i1148.fail)
  i1148.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[2], i1148.zFail)
  i1148.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[3], i1148.comp)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.value = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.keywords = i1158
  i1156.hasDiscard = !!i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1163 = data
  i1162.passId = i1163[0]
  i1162.subShaderIndex = i1163[1]
  var i1165 = i1163[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.keywords = i1164
  i1162.vertexProgram = i1163[3]
  i1162.fragmentProgram = i1163[4]
  i1162.exportedForWebGl2 = !!i1163[5]
  i1162.readDepth = !!i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'shader')
  i1168.pass = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.type = i1173[1]
  i1172.value = new pc.Vec4( i1173[2], i1173[3], i1173[4], i1173[5] )
  i1172.textureValue = i1173[6]
  i1172.shaderPropertyFlag = i1173[7]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1175 = data
  i1174.name = i1175[0]
  request.r(i1175[1], i1175[2], 0, i1174, 'texture')
  i1174.aabb = i1175[3]
  i1174.vertices = i1175[4]
  i1174.triangles = i1175[5]
  i1174.textureRect = UnityEngine.Rect.MinMaxRect(i1175[6], i1175[7], i1175[8], i1175[9])
  i1174.packedRect = UnityEngine.Rect.MinMaxRect(i1175[10], i1175[11], i1175[12], i1175[13])
  i1174.border = new pc.Vec4( i1175[14], i1175[15], i1175[16], i1175[17] )
  i1174.transparency = i1175[18]
  i1174.bounds = i1175[19]
  i1174.pixelsPerUnit = i1175[20]
  i1174.textureWidth = i1175[21]
  i1174.textureHeight = i1175[22]
  i1174.nativeSize = new pc.Vec2( i1175[23], i1175[24] )
  i1174.pivot = new pc.Vec2( i1175[25], i1175[26] )
  i1174.textureRectOffset = new pc.Vec2( i1175[27], i1175[28] )
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.wrapMode = i1177[1]
  i1176.isLooping = !!i1177[2]
  i1176.length = i1177[3]
  var i1179 = i1177[4]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1179[i + 0]) );
  }
  i1176.curves = i1178
  var i1181 = i1177[5]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1181[i + 0]) );
  }
  i1176.events = i1180
  i1176.halfPrecision = !!i1177[6]
  i1176._frameRate = i1177[7]
  i1176.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1177[8], i1176.localBounds)
  i1176.hasMuscleCurves = !!i1177[9]
  var i1183 = i1177[10]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1176.clipMuscleConstant = i1182
  i1176.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1177[11], i1176.clipBindingConstant)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1187 = data
  i1186.path = i1187[0]
  i1186.hash = i1187[1]
  i1186.componentType = i1187[2]
  i1186.property = i1187[3]
  i1186.keys = i1187[4]
  var i1189 = i1187[5]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1189[i + 0]) );
  }
  i1186.objectReferenceKeys = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1193 = data
  i1192.time = i1193[0]
  request.r(i1193[1], i1193[2], 0, i1192, 'value')
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1197 = data
  i1196.functionName = i1197[0]
  i1196.floatParameter = i1197[1]
  i1196.intParameter = i1197[2]
  i1196.stringParameter = i1197[3]
  request.r(i1197[4], i1197[5], 0, i1196, 'objectReferenceParameter')
  i1196.time = i1197[6]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1199 = data
  i1198.center = new pc.Vec3( i1199[0], i1199[1], i1199[2] )
  i1198.extends = new pc.Vec3( i1199[3], i1199[4], i1199[5] )
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1202.genericBindings = i1204
  var i1207 = i1203[1]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1202.pptrCurveMapping = i1206
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.ascent = i1209[1]
  i1208.originalLineHeight = i1209[2]
  i1208.fontSize = i1209[3]
  var i1211 = i1209[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1211[i + 0]) );
  }
  i1208.characterInfo = i1210
  request.r(i1209[5], i1209[6], 0, i1208, 'texture')
  i1208.originalFontSize = i1209[7]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1215 = data
  i1214.index = i1215[0]
  i1214.advance = i1215[1]
  i1214.bearing = i1215[2]
  i1214.glyphWidth = i1215[3]
  i1214.glyphHeight = i1215[4]
  i1214.minX = i1215[5]
  i1214.maxX = i1215[6]
  i1214.minY = i1215[7]
  i1214.maxY = i1215[8]
  i1214.uvBottomLeftX = i1215[9]
  i1214.uvBottomLeftY = i1215[10]
  i1214.uvBottomRightX = i1215[11]
  i1214.uvBottomRightY = i1215[12]
  i1214.uvTopLeftX = i1215[13]
  i1214.uvTopLeftY = i1215[14]
  i1214.uvTopRightX = i1215[15]
  i1214.uvTopRightY = i1215[16]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1217 = data
  i1216.name = i1217[0]
  var i1219 = i1217[1]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1219[i + 0]) );
  }
  i1216.layers = i1218
  var i1221 = i1217[2]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1221[i + 0]) );
  }
  i1216.parameters = i1220
  i1216.animationClips = i1217[3]
  i1216.avatarUnsupported = i1217[4]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.defaultWeight = i1225[1]
  i1224.blendingMode = i1225[2]
  i1224.avatarMask = i1225[3]
  i1224.syncedLayerIndex = i1225[4]
  i1224.syncedLayerAffectsTiming = !!i1225[5]
  i1224.syncedLayers = i1225[6]
  i1224.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1225[7], i1224.stateMachine)
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1227 = data
  i1226.id = i1227[0]
  i1226.name = i1227[1]
  i1226.path = i1227[2]
  var i1229 = i1227[3]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1229[i + 0]) );
  }
  i1226.states = i1228
  var i1231 = i1227[4]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1231[i + 0]) );
  }
  i1226.machines = i1230
  var i1233 = i1227[5]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1233[i + 0]) );
  }
  i1226.entryStateTransitions = i1232
  var i1235 = i1227[6]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1235[i + 0]) );
  }
  i1226.exitStateTransitions = i1234
  var i1237 = i1227[7]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1237[i + 0]) );
  }
  i1226.anyStateTransitions = i1236
  i1226.defaultStateId = i1227[8]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.name = i1241[1]
  i1240.cycleOffset = i1241[2]
  i1240.cycleOffsetParameter = i1241[3]
  i1240.cycleOffsetParameterActive = !!i1241[4]
  i1240.mirror = !!i1241[5]
  i1240.mirrorParameter = i1241[6]
  i1240.mirrorParameterActive = !!i1241[7]
  i1240.motionId = i1241[8]
  i1240.nameHash = i1241[9]
  i1240.fullPathHash = i1241[10]
  i1240.speed = i1241[11]
  i1240.speedParameter = i1241[12]
  i1240.speedParameterActive = !!i1241[13]
  i1240.tag = i1241[14]
  i1240.tagHash = i1241[15]
  i1240.writeDefaultValues = !!i1241[16]
  var i1243 = i1241[17]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 2, i1242, '')
  }
  i1240.behaviours = i1242
  var i1245 = i1241[18]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1245[i + 0]) );
  }
  i1240.transitions = i1244
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1251 = data
  i1250.fullPath = i1251[0]
  i1250.canTransitionToSelf = !!i1251[1]
  i1250.duration = i1251[2]
  i1250.exitTime = i1251[3]
  i1250.hasExitTime = !!i1251[4]
  i1250.hasFixedDuration = !!i1251[5]
  i1250.interruptionSource = i1251[6]
  i1250.offset = i1251[7]
  i1250.orderedInterruption = !!i1251[8]
  i1250.destinationStateId = i1251[9]
  i1250.isExit = !!i1251[10]
  i1250.mute = !!i1251[11]
  i1250.solo = !!i1251[12]
  var i1253 = i1251[13]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1253[i + 0]) );
  }
  i1250.conditions = i1252
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1257 = data
  i1256.mode = i1257[0]
  i1256.parameter = i1257[1]
  i1256.threshold = i1257[2]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1263 = data
  i1262.destinationStateId = i1263[0]
  i1262.isExit = !!i1263[1]
  i1262.mute = !!i1263[2]
  i1262.solo = !!i1263[3]
  var i1265 = i1263[4]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1265[i + 0]) );
  }
  i1262.conditions = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1269 = data
  i1268.defaultBool = !!i1269[0]
  i1268.defaultFloat = i1269[1]
  i1268.defaultInt = i1269[2]
  i1268.name = i1269[3]
  i1268.nameHash = i1269[4]
  i1268.type = i1269[5]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.bytes64 = i1271[1]
  i1270.data = i1271[2]
  return i1270
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 1, i1274, '')
  }
  i1272.components = i1274
  return i1272
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1279 = data
  i1278.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1279[0], i1278.mode)
  i1278.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1279[1], i1278.neutralHDRRangeReductionMode)
  i1278.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1279[2], i1278.acesPreset)
  i1278.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1279[3], i1278.hueShiftAmount)
  i1278.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1279[4], i1278.detectPaperWhite)
  i1278.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1279[5], i1278.paperWhite)
  i1278.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1279[6], i1278.detectBrightnessLimits)
  i1278.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1279[7], i1278.minNits)
  i1278.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1279[8], i1278.maxNits)
  i1278.active = !!i1279[9]
  return i1278
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1281 = data
  i1280.m_Value = i1281[0]
  i1280.m_OverrideState = !!i1281[1]
  return i1280
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1283 = data
  i1282.m_Value = i1283[0]
  i1282.m_OverrideState = !!i1283[1]
  return i1282
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1285 = data
  i1284.m_Value = i1285[0]
  i1284.m_OverrideState = !!i1285[1]
  return i1284
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1287 = data
  i1286.m_Value = i1287[0]
  i1286.m_OverrideState = !!i1287[1]
  return i1286
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1289 = data
  i1288.m_Value = !!i1289[0]
  i1288.m_OverrideState = !!i1289[1]
  return i1288
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1291 = data
  i1290.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1291[0], i1290.skipIterations)
  i1290.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1291[1], i1290.threshold)
  i1290.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1291[2], i1290.intensity)
  i1290.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1291[3], i1290.scatter)
  i1290.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1291[4], i1290.clamp)
  i1290.tint = request.d('UnityEngine.Rendering.ColorParameter', i1291[5], i1290.tint)
  i1290.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1291[6], i1290.highQualityFiltering)
  i1290.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1291[7], i1290.downscale)
  i1290.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1291[8], i1290.maxIterations)
  i1290.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1291[9], i1290.dirtTexture)
  i1290.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1291[10], i1290.dirtIntensity)
  i1290.active = !!i1291[11]
  return i1290
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1293 = data
  i1292.m_Value = i1293[0]
  i1292.m_OverrideState = !!i1293[1]
  return i1292
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1295 = data
  i1294.m_Value = i1295[0]
  i1294.m_OverrideState = !!i1295[1]
  return i1294
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1297 = data
  i1296.m_Value = new pc.Color(i1297[0], i1297[1], i1297[2], i1297[3])
  i1296.m_OverrideState = !!i1297[4]
  return i1296
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1299 = data
  i1298.m_Value = i1299[0]
  i1298.m_OverrideState = !!i1299[1]
  return i1298
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1301 = data
  i1300.dimension = i1301[0]
  request.r(i1301[1], i1301[2], 0, i1300, 'm_Value')
  i1300.m_OverrideState = !!i1301[3]
  return i1300
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1303 = data
  i1302.color = request.d('UnityEngine.Rendering.ColorParameter', i1303[0], i1302.color)
  i1302.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1303[1], i1302.center)
  i1302.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1303[2], i1302.intensity)
  i1302.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1303[3], i1302.smoothness)
  i1302.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1303[4], i1302.rounded)
  i1302.active = !!i1303[5]
  return i1302
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1305 = data
  i1304.m_Value = new pc.Vec2( i1305[0], i1305[1] )
  i1304.m_OverrideState = !!i1305[2]
  return i1304
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_Settings' )
  var i1307 = data
  i1306.m_enableWordWrapping = !!i1307[0]
  i1306.m_enableKerning = !!i1307[1]
  i1306.m_enableExtraPadding = !!i1307[2]
  i1306.m_enableTintAllSprites = !!i1307[3]
  i1306.m_enableParseEscapeCharacters = !!i1307[4]
  i1306.m_EnableRaycastTarget = !!i1307[5]
  i1306.m_GetFontFeaturesAtRuntime = !!i1307[6]
  i1306.m_missingGlyphCharacter = i1307[7]
  i1306.m_warningsDisabled = !!i1307[8]
  request.r(i1307[9], i1307[10], 0, i1306, 'm_defaultFontAsset')
  i1306.m_defaultFontAssetPath = i1307[11]
  i1306.m_defaultFontSize = i1307[12]
  i1306.m_defaultAutoSizeMinRatio = i1307[13]
  i1306.m_defaultAutoSizeMaxRatio = i1307[14]
  i1306.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1307[15], i1307[16] )
  i1306.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1307[17], i1307[18] )
  i1306.m_autoSizeTextContainer = !!i1307[19]
  i1306.m_IsTextObjectScaleStatic = !!i1307[20]
  var i1309 = i1307[21]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1306.m_fallbackFontAssets = i1308
  i1306.m_matchMaterialPreset = !!i1307[22]
  request.r(i1307[23], i1307[24], 0, i1306, 'm_defaultSpriteAsset')
  i1306.m_defaultSpriteAssetPath = i1307[25]
  i1306.m_enableEmojiSupport = !!i1307[26]
  i1306.m_MissingCharacterSpriteUnicode = i1307[27]
  i1306.m_defaultColorGradientPresetsPath = i1307[28]
  request.r(i1307[29], i1307[30], 0, i1306, 'm_defaultStyleSheet')
  i1306.m_StyleSheetsResourcePath = i1307[31]
  request.r(i1307[32], i1307[33], 0, i1306, 'm_leadingCharacters')
  request.r(i1307[34], i1307[35], 0, i1306, 'm_followingCharacters')
  i1306.m_UseModernHangulLineBreakingRules = !!i1307[36]
  return i1306
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1313 = data
  i1312.hashCode = i1313[0]
  request.r(i1313[1], i1313[2], 0, i1312, 'material')
  i1312.materialHashCode = i1313[3]
  request.r(i1313[4], i1313[5], 0, i1312, 'atlas')
  i1312.normalStyle = i1313[6]
  i1312.normalSpacingOffset = i1313[7]
  i1312.boldStyle = i1313[8]
  i1312.boldSpacing = i1313[9]
  i1312.italicStyle = i1313[10]
  i1312.tabSize = i1313[11]
  i1312.m_Version = i1313[12]
  i1312.m_SourceFontFileGUID = i1313[13]
  request.r(i1313[14], i1313[15], 0, i1312, 'm_SourceFontFile_EditorRef')
  request.r(i1313[16], i1313[17], 0, i1312, 'm_SourceFontFile')
  i1312.m_AtlasPopulationMode = i1313[18]
  i1312.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1313[19], i1312.m_FaceInfo)
  var i1315 = i1313[20]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.Glyph', i1315[i + 0]));
  }
  i1312.m_GlyphTable = i1314
  var i1317 = i1313[21]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Character', i1317[i + 0]));
  }
  i1312.m_CharacterTable = i1316
  var i1319 = i1313[22]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 2, i1318, '')
  }
  i1312.m_AtlasTextures = i1318
  i1312.m_AtlasTextureIndex = i1313[23]
  i1312.m_IsMultiAtlasTexturesEnabled = !!i1313[24]
  i1312.m_ClearDynamicDataOnBuild = !!i1313[25]
  var i1321 = i1313[26]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('UnityEngine.TextCore.GlyphRect', i1321[i + 0]));
  }
  i1312.m_UsedGlyphRects = i1320
  var i1323 = i1313[27]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('UnityEngine.TextCore.GlyphRect', i1323[i + 0]));
  }
  i1312.m_FreeGlyphRects = i1322
  i1312.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1313[28], i1312.m_fontInfo)
  i1312.m_AtlasWidth = i1313[29]
  i1312.m_AtlasHeight = i1313[30]
  i1312.m_AtlasPadding = i1313[31]
  i1312.m_AtlasRenderMode = i1313[32]
  var i1325 = i1313[33]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Glyph', i1325[i + 0]));
  }
  i1312.m_glyphInfoList = i1324
  i1312.m_KerningTable = request.d('TMPro.KerningTable', i1313[34], i1312.m_KerningTable)
  i1312.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1313[35], i1312.m_FontFeatureTable)
  var i1327 = i1313[36]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1312.fallbackFontAssets = i1326
  var i1329 = i1313[37]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1312.m_FallbackFontAssetTable = i1328
  i1312.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1313[38], i1312.m_CreationSettings)
  var i1331 = i1313[39]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('TMPro.TMP_FontWeightPair', i1331[i + 0]) );
  }
  i1312.m_FontWeightTable = i1330
  var i1333 = i1313[40]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('TMPro.TMP_FontWeightPair', i1333[i + 0]) );
  }
  i1312.fontWeights = i1332
  return i1312
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1335 = data
  i1334.m_FaceIndex = i1335[0]
  i1334.m_FamilyName = i1335[1]
  i1334.m_StyleName = i1335[2]
  i1334.m_PointSize = i1335[3]
  i1334.m_Scale = i1335[4]
  i1334.m_UnitsPerEM = i1335[5]
  i1334.m_LineHeight = i1335[6]
  i1334.m_AscentLine = i1335[7]
  i1334.m_CapLine = i1335[8]
  i1334.m_MeanLine = i1335[9]
  i1334.m_Baseline = i1335[10]
  i1334.m_DescentLine = i1335[11]
  i1334.m_SuperscriptOffset = i1335[12]
  i1334.m_SuperscriptSize = i1335[13]
  i1334.m_SubscriptOffset = i1335[14]
  i1334.m_SubscriptSize = i1335[15]
  i1334.m_UnderlineOffset = i1335[16]
  i1334.m_UnderlineThickness = i1335[17]
  i1334.m_StrikethroughOffset = i1335[18]
  i1334.m_StrikethroughThickness = i1335[19]
  i1334.m_TabWidth = i1335[20]
  return i1334
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1339 = data
  i1338.m_Index = i1339[0]
  i1338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1339[1], i1338.m_Metrics)
  i1338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1339[2], i1338.m_GlyphRect)
  i1338.m_Scale = i1339[3]
  i1338.m_AtlasIndex = i1339[4]
  i1338.m_ClassDefinitionType = i1339[5]
  return i1338
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1341 = data
  i1340.m_Width = i1341[0]
  i1340.m_Height = i1341[1]
  i1340.m_HorizontalBearingX = i1341[2]
  i1340.m_HorizontalBearingY = i1341[3]
  i1340.m_HorizontalAdvance = i1341[4]
  return i1340
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1343 = data
  i1342.m_X = i1343[0]
  i1342.m_Y = i1343[1]
  i1342.m_Width = i1343[2]
  i1342.m_Height = i1343[3]
  return i1342
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Character' )
  var i1347 = data
  i1346.m_ElementType = i1347[0]
  i1346.m_Unicode = i1347[1]
  i1346.m_GlyphIndex = i1347[2]
  i1346.m_Scale = i1347[3]
  return i1346
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1353 = data
  i1352.Name = i1353[0]
  i1352.PointSize = i1353[1]
  i1352.Scale = i1353[2]
  i1352.CharacterCount = i1353[3]
  i1352.LineHeight = i1353[4]
  i1352.Baseline = i1353[5]
  i1352.Ascender = i1353[6]
  i1352.CapHeight = i1353[7]
  i1352.Descender = i1353[8]
  i1352.CenterLine = i1353[9]
  i1352.SuperscriptOffset = i1353[10]
  i1352.SubscriptOffset = i1353[11]
  i1352.SubSize = i1353[12]
  i1352.Underline = i1353[13]
  i1352.UnderlineThickness = i1353[14]
  i1352.strikethrough = i1353[15]
  i1352.strikethroughThickness = i1353[16]
  i1352.TabWidth = i1353[17]
  i1352.Padding = i1353[18]
  i1352.AtlasWidth = i1353[19]
  i1352.AtlasHeight = i1353[20]
  return i1352
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1357 = data
  i1356.id = i1357[0]
  i1356.x = i1357[1]
  i1356.y = i1357[2]
  i1356.width = i1357[3]
  i1356.height = i1357[4]
  i1356.xOffset = i1357[5]
  i1356.yOffset = i1357[6]
  i1356.xAdvance = i1357[7]
  i1356.scale = i1357[8]
  return i1356
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.KerningTable' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.KerningPair', i1361[i + 0]));
  }
  i1358.kerningPairs = i1360
  return i1358
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.KerningPair' )
  var i1365 = data
  i1364.xOffset = i1365[0]
  i1364.m_FirstGlyph = i1365[1]
  i1364.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1365[2], i1364.m_FirstGlyphAdjustments)
  i1364.m_SecondGlyph = i1365[3]
  i1364.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1365[4], i1364.m_SecondGlyphAdjustments)
  i1364.m_IgnoreSpacingAdjustments = !!i1365[5]
  return i1364
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1369[i + 0]));
  }
  i1366.m_GlyphPairAdjustmentRecords = i1368
  return i1366
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1373 = data
  i1372.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1373[0], i1372.m_FirstAdjustmentRecord)
  i1372.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1373[1], i1372.m_SecondAdjustmentRecord)
  i1372.m_FeatureLookupFlags = i1373[2]
  return i1372
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1375 = data
  i1374.m_GlyphIndex = i1375[0]
  i1374.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1375[1], i1374.m_GlyphValueRecord)
  return i1374
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1377 = data
  i1376.m_XPlacement = i1377[0]
  i1376.m_YPlacement = i1377[1]
  i1376.m_XAdvance = i1377[2]
  i1376.m_YAdvance = i1377[3]
  return i1376
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1379 = data
  i1378.sourceFontFileName = i1379[0]
  i1378.sourceFontFileGUID = i1379[1]
  i1378.pointSizeSamplingMode = i1379[2]
  i1378.pointSize = i1379[3]
  i1378.padding = i1379[4]
  i1378.packingMode = i1379[5]
  i1378.atlasWidth = i1379[6]
  i1378.atlasHeight = i1379[7]
  i1378.characterSetSelectionMode = i1379[8]
  i1378.characterSequence = i1379[9]
  i1378.referencedFontAssetGUID = i1379[10]
  i1378.referencedTextAssetGUID = i1379[11]
  i1378.fontStyle = i1379[12]
  i1378.fontStyleModifier = i1379[13]
  i1378.renderMode = i1379[14]
  i1378.includeFontFeatures = !!i1379[15]
  return i1378
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'regularTypeface')
  request.r(i1383[2], i1383[3], 0, i1382, 'italicTypeface')
  return i1382
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1385 = data
  i1384.hashCode = i1385[0]
  request.r(i1385[1], i1385[2], 0, i1384, 'material')
  i1384.materialHashCode = i1385[3]
  request.r(i1385[4], i1385[5], 0, i1384, 'spriteSheet')
  var i1387 = i1385[6]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('TMPro.TMP_Sprite', i1387[i + 0]));
  }
  i1384.spriteInfoList = i1386
  var i1389 = i1385[7]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 1, i1388, '')
  }
  i1384.fallbackSpriteAssets = i1388
  i1384.m_Version = i1385[8]
  i1384.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1385[9], i1384.m_FaceInfo)
  var i1391 = i1385[10]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.add(request.d('TMPro.TMP_SpriteCharacter', i1391[i + 0]));
  }
  i1384.m_SpriteCharacterTable = i1390
  var i1393 = i1385[11]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('TMPro.TMP_SpriteGlyph', i1393[i + 0]));
  }
  i1384.m_SpriteGlyphTable = i1392
  return i1384
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.hashCode = i1397[1]
  i1396.unicode = i1397[2]
  i1396.pivot = new pc.Vec2( i1397[3], i1397[4] )
  request.r(i1397[5], i1397[6], 0, i1396, 'sprite')
  i1396.id = i1397[7]
  i1396.x = i1397[8]
  i1396.y = i1397[9]
  i1396.width = i1397[10]
  i1396.height = i1397[11]
  i1396.xOffset = i1397[12]
  i1396.yOffset = i1397[13]
  i1396.xAdvance = i1397[14]
  i1396.scale = i1397[15]
  return i1396
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1403 = data
  i1402.m_Name = i1403[0]
  i1402.m_HashCode = i1403[1]
  i1402.m_ElementType = i1403[2]
  i1402.m_Unicode = i1403[3]
  i1402.m_GlyphIndex = i1403[4]
  i1402.m_Scale = i1403[5]
  return i1402
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'sprite')
  i1406.m_Index = i1407[2]
  i1406.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1407[3], i1406.m_Metrics)
  i1406.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1407[4], i1406.m_GlyphRect)
  i1406.m_Scale = i1407[5]
  i1406.m_AtlasIndex = i1407[6]
  i1406.m_ClassDefinitionType = i1407[7]
  return i1406
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1409 = data
  var i1411 = i1409[0]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(request.d('TMPro.TMP_Style', i1411[i + 0]));
  }
  i1408.m_StyleList = i1410
  return i1408
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_Style' )
  var i1415 = data
  i1414.m_Name = i1415[0]
  i1414.m_HashCode = i1415[1]
  i1414.m_OpeningDefinition = i1415[2]
  i1414.m_ClosingDefinition = i1415[3]
  i1414.m_OpeningTagArray = i1415[4]
  i1414.m_ClosingTagArray = i1415[5]
  i1414.m_OpeningTagUnicodeArray = i1415[6]
  i1414.m_ClosingTagUnicodeArray = i1415[7]
  return i1414
}

Deserializers["TMPro.TMP_ColorGradient"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.TMP_ColorGradient' )
  var i1417 = data
  i1416.colorMode = i1417[0]
  i1416.topLeft = new pc.Color(i1417[1], i1417[2], i1417[3], i1417[4])
  i1416.topRight = new pc.Color(i1417[5], i1417[6], i1417[7], i1417[8])
  i1416.bottomLeft = new pc.Color(i1417[9], i1417[10], i1417[11], i1417[12])
  i1416.bottomRight = new pc.Color(i1417[13], i1417[14], i1417[15], i1417[16])
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1421[i + 0]) );
  }
  i1418.files = i1420
  i1418.componentToPrefabIds = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1425 = data
  i1424.path = i1425[0]
  request.r(i1425[1], i1425[2], 0, i1424, 'unityObject')
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1427 = data
  var i1429 = i1427[0]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1429[i + 0]) );
  }
  i1426.scriptsExecutionOrder = i1428
  var i1431 = i1427[1]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1431[i + 0]) );
  }
  i1426.sortingLayers = i1430
  var i1433 = i1427[2]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1433[i + 0]) );
  }
  i1426.cullingLayers = i1432
  i1426.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1427[3], i1426.timeSettings)
  i1426.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1427[4], i1426.physicsSettings)
  i1426.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1427[5], i1426.physics2DSettings)
  i1426.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1427[6], i1426.qualitySettings)
  i1426.enableRealtimeShadows = !!i1427[7]
  i1426.enableAutoInstancing = !!i1427[8]
  i1426.enableDynamicBatching = !!i1427[9]
  i1426.lightmapEncodingQuality = i1427[10]
  i1426.desiredColorSpace = i1427[11]
  var i1435 = i1427[12]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1426.allTags = i1434
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.value = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1443 = data
  i1442.id = i1443[0]
  i1442.name = i1443[1]
  i1442.value = i1443[2]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1447 = data
  i1446.id = i1447[0]
  i1446.name = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1449 = data
  i1448.fixedDeltaTime = i1449[0]
  i1448.maximumDeltaTime = i1449[1]
  i1448.timeScale = i1449[2]
  i1448.maximumParticleTimestep = i1449[3]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1451 = data
  i1450.gravity = new pc.Vec3( i1451[0], i1451[1], i1451[2] )
  i1450.defaultSolverIterations = i1451[3]
  i1450.bounceThreshold = i1451[4]
  i1450.autoSyncTransforms = !!i1451[5]
  i1450.autoSimulation = !!i1451[6]
  var i1453 = i1451[7]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1453[i + 0]) );
  }
  i1450.collisionMatrix = i1452
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1457 = data
  i1456.enabled = !!i1457[0]
  i1456.layerId = i1457[1]
  i1456.otherLayerId = i1457[2]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'material')
  i1458.gravity = new pc.Vec2( i1459[2], i1459[3] )
  i1458.positionIterations = i1459[4]
  i1458.velocityIterations = i1459[5]
  i1458.velocityThreshold = i1459[6]
  i1458.maxLinearCorrection = i1459[7]
  i1458.maxAngularCorrection = i1459[8]
  i1458.maxTranslationSpeed = i1459[9]
  i1458.maxRotationSpeed = i1459[10]
  i1458.baumgarteScale = i1459[11]
  i1458.baumgarteTOIScale = i1459[12]
  i1458.timeToSleep = i1459[13]
  i1458.linearSleepTolerance = i1459[14]
  i1458.angularSleepTolerance = i1459[15]
  i1458.defaultContactOffset = i1459[16]
  i1458.autoSimulation = !!i1459[17]
  i1458.queriesHitTriggers = !!i1459[18]
  i1458.queriesStartInColliders = !!i1459[19]
  i1458.callbacksOnDisable = !!i1459[20]
  i1458.reuseCollisionCallbacks = !!i1459[21]
  i1458.autoSyncTransforms = !!i1459[22]
  var i1461 = i1459[23]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1461[i + 0]) );
  }
  i1458.collisionMatrix = i1460
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.layerId = i1465[1]
  i1464.otherLayerId = i1465[2]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1467 = data
  var i1469 = i1467[0]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1469[i + 0]) );
  }
  i1466.qualityLevels = i1468
  var i1471 = i1467[1]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( i1471[i + 0] );
  }
  i1466.names = i1470
  i1466.shadows = i1467[2]
  i1466.anisotropicFiltering = i1467[3]
  i1466.antiAliasing = i1467[4]
  i1466.lodBias = i1467[5]
  i1466.shadowCascades = i1467[6]
  i1466.shadowDistance = i1467[7]
  i1466.shadowmaskMode = i1467[8]
  i1466.shadowProjection = i1467[9]
  i1466.shadowResolution = i1467[10]
  i1466.softParticles = !!i1467[11]
  i1466.softVegetation = !!i1467[12]
  i1466.activeColorSpace = i1467[13]
  i1466.desiredColorSpace = i1467[14]
  i1466.masterTextureLimit = i1467[15]
  i1466.maxQueuedFrames = i1467[16]
  i1466.particleRaycastBudget = i1467[17]
  i1466.pixelLightCount = i1467[18]
  i1466.realtimeReflectionProbes = !!i1467[19]
  i1466.shadowCascade2Split = i1467[20]
  i1466.shadowCascade4Split = new pc.Vec3( i1467[21], i1467[22], i1467[23] )
  i1466.streamingMipmapsActive = !!i1467[24]
  i1466.vSyncCount = i1467[25]
  i1466.asyncUploadBufferSize = i1467[26]
  i1466.asyncUploadTimeSlice = i1467[27]
  i1466.billboardsFaceCameraPosition = !!i1467[28]
  i1466.shadowNearPlaneOffset = i1467[29]
  i1466.streamingMipmapsMemoryBudget = i1467[30]
  i1466.maximumLODLevel = i1467[31]
  i1466.streamingMipmapsAddAllCameras = !!i1467[32]
  i1466.streamingMipmapsMaxLevelReduction = i1467[33]
  i1466.streamingMipmapsRenderersPerFrame = i1467[34]
  i1466.resolutionScalingFixedDPIFactor = i1467[35]
  i1466.streamingMipmapsMaxFileIORequests = i1467[36]
  i1466.currentQualityLevel = i1467[37]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1477 = data
  i1476.weight = i1477[0]
  i1476.vertices = i1477[1]
  i1476.normals = i1477[2]
  i1476.tangents = i1477[3]
  return i1476
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1478 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1479 = data
  i1478.xPlacement = i1479[0]
  i1478.yPlacement = i1479[1]
  i1478.xAdvance = i1479[2]
  i1478.yAdvance = i1479[3]
  return i1478
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ReflectionProbe":{"size":0,"center":3,"nearClipPlane":6,"farClipPlane":7,"intensity":8,"resolution":9,"cullingMask":10,"clearFlags":11,"backgroundColor":12,"boxProjection":16,"mode":17,"importance":18,"refreshMode":19,"timeSlicingMode":20,"bakedTexture":21,"customBakedTexture":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[3],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[108],"109":[108],"110":[108],"111":[108],"112":[108],"113":[108],"114":[108],"115":[108],"116":[108],"117":[108],"118":[108],"119":[108],"120":[108],"121":[3],"122":[11],"123":[124],"125":[124],"22":[21],"58":[21],"126":[3],"6":[3],"8":[7],"127":[128],"129":[21],"130":[21],"25":[22],"27":[26,21],"131":[21],"24":[22],"41":[21],"132":[21],"29":[21],"133":[21],"45":[21],"134":[21],"40":[21],"48":[21],"135":[21],"136":[26,21],"137":[21],"47":[21],"44":[21],"138":[21],"33":[26,21],"31":[21],"139":[35],"140":[35],"36":[35],"141":[35],"142":[3],"143":[3],"144":[128],"145":[21],"146":[11,21],"147":[21,26],"148":[21],"149":[26,21],"150":[11],"151":[26,21],"152":[21],"153":[128]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.RenderTexture","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.ReflectionProbe","UnityEngine.Cubemap","UnityEngine.Shader","UnityEngine.Texture2D","CarRotate","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ToggleGroup","UnityEngine.UI.Toggle","UnityEngine.BoxCollider2D","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","TMPro.TMP_ColorGradient","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.45f1";

Deserializers.productName = "My project test";

Deserializers.lunaInitializationTime = "01/08/2025 04:03:33";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "23440";

Deserializers.projectId = "c95793bbca4c6dd478aee332cdd8ccf6";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1606";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4153";

Deserializers.runtimeAnalysisExcludedModules = "prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "cf420709-6310-4684-8e53-a490c298edb3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

