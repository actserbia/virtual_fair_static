/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { Instance } from '@react-three/drei';

import { toRadians } from '../../lib/helpers/math';

export function Glass(props) {
  const ref = useRef();

  return (
    <group dispose={null} rotation={props.rotation} position={props.oposition}>
      <Instance
        ref={ref}
        castShadow
        receiveShadow
        rotation={[toRadians(90), 0, toRadians(180)]}
        scale={0.1}
      />
    </group>
  );
}
