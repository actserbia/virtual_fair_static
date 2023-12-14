import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Road6(props) {
  const { nodes, materials } = useGLTF('/models/road6.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shape4197.geometry}
        material={materials.GREY_PHY}
      />
    </group>
  );
}

useGLTF.preload('/models/road6.glb');
