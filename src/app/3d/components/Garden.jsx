/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Garden(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/dome_terrain.glb`);
  materials.GREEN_1_PHY.roughness = 0.8;
  materials.GREEN_1_PHY.metalness = 0;
  materials.GREY_PHY.roughness = 0.8;
  materials.GREY_PHY.metalness = 0;
  materials.WHITE_PHY.roughness = 0.8;
  materials.WHITE_PHY.metalness = 0;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI / 4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_1.geometry}
          material={materials.WHITE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_2.geometry}
          material={materials.GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_3.geometry}
          material={materials.GREEN_TREES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_4.geometry}
          material={materials.GREEN_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_5.geometry}
          material={materials.WATER_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_6.geometry}
          material={materials.GREEN_2_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_7.geometry}
          material={materials.GOLDEN_BROWN_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_8.geometry}
          material={materials.PREGRADE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_9.geometry}
          material={materials.GREEN_3_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_TERRAIN_MOD_10.geometry}
          material={materials.GLASS_GLTF}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_ROOT}/models/dome_terrain.glb`);
