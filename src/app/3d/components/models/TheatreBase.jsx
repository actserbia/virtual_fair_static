/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';

export function TheatreBase(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/theatre_terrain.glb`);
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_1.geometry}
          material={materials.WHITE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_2.geometry}
          material={materials.GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_3.geometry}
          material={materials.GREEN_TREES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_4.geometry}
          material={materials.GREEN_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_5.geometry}
          material={materials.WATER_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_6.geometry}
          material={materials.GREEN_2_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_7.geometry}
          material={materials.GOLDEN_BROWN_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.THEATRE_TERRAIN_MOD_8.geometry}
          material={materials.PREGRADE_PHY}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_ROOT}/models/theatre_terrain.glb`);
