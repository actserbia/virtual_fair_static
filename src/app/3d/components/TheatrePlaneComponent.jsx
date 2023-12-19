import { Plane, Html } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const TheatrePlaneComponent = ({
  cinemaMode,
  setCinemaMode,
  visible,
  currentVideo,
}) => {

  return (
    <>
      {visible && (
        <Html
          fullscreen
          center
          scale={0.45}
          occlude="blending"
          transform={true}
          position={[0, 3.28, -9.29]}
        >
          <iframe
            title="YouTube Video"
            width="542px"
            height="324px"
            src={`${currentVideo}?enablejsapi=1`}
            allowFullScreen
          />
        </Html>
      )}
    </>
  );
};
