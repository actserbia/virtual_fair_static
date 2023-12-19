/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Tree1(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/tree01.glb`);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload('/models/tree01.glb');