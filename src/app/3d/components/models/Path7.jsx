/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Path7(props) {
  const { nodes, materials } = useGLTF('/models/path7.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATHS_7.geometry}
        material={materials.WHITE_PHY}
        position={[0, -200, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/path7.glb');
