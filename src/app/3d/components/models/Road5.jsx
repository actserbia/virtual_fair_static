/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Road5(props) {
  const { nodes, materials } = useGLTF('/models/road5.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shape4198.geometry}
        material={materials.GREY_PHY}
      />
    </group>
  );
}

useGLTF.preload('/models/road5.glb');
