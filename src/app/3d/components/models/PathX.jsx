/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';

export function PathX(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/path_x.glb`);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object128.geometry}
        material={materials.GREY_PHY}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        fov={79.278}
        position={[1202.917, 77347.695, -77824.977]}
        rotation={[-2.279, 0, -3.086]}
      />
    </group>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_ROOT}/models/path_x.glb`);
