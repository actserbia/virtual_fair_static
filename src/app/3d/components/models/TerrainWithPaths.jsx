/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function TerrainWithPaths(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/terrain_hills_with_paths.glb`);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_1.geometry}
        material={materials.WHITE_PHY}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_2.geometry}
        material={materials.GREY_PHY}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_3.geometry}
        material={materials.GREEN_TREES}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_4.geometry}
        material={materials.GREEN_1_PHY}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_5.geometry}
        material={materials.TELLOW_GREEN}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_6.geometry}
        material={materials.GREEN_3_PHY}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TERRAIN_X1_7.geometry}
        material={materials.ORANGE}
      />
    </group>
  );
}

useGLTF.preload('/models/terrain_hills_with_paths.glb');