import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { Effects } from '@react-three/drei';
import AutoFocusDOF from './AutoFocusDOF';
import { EffectComposer } from '@react-three/postprocessing';

function PostProcessing() {
  // const {
  //   saoBias,
  //   saoIntensity,
  //   saoScale,
  //   saoKernelRadius,
  //   saoMinResolution,
  //   saoBlur,
  //   saoBlurRadius,
  //   saoBlurStdDev,
  //   saoBlurDepthCutoff,
  // } = useControls('SAO Pass', {
  //   saoBias: { value: 0.06, min: 0, max: 2 },
  //   saoIntensity: { value: 0.02, min: 0, max: 2 },
  //   saoScale: { value: 300, min: 0, max: 300 },
  //   saoKernelRadius: { value: 27, min: 0, max: 100 },
  //   saoMinResolution: { value: 0.00001, min: 0, max: 2 },
  //   saoBlur: true,
  //   saoBlurRadius: { value: 4, min: 0, max: 200 },
  //   saoBlurStdDev: { value: 2, min: 0, max: 200 },
  //   saoBlurDepthCutoff: { value: 0.65, min: 0, max: 5 },
  // });

  return (
    <EffectComposer disableNormalPass>
      <AutoFocusDOF
        bokehScale={4} //blur scale
        resolution={1024} //resolution (decrease for performance)
        focusSpeed={0.1} // milliseconds to focus a new detected mesh
        focalLength={0.1} //how far the focus should go
      />
    </EffectComposer>
  );
}

export default PostProcessing;
