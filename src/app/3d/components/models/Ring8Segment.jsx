/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Ring8Segment(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/ring8_segment.glb`);
  return (
    <group {...props} dispose={null}>
      <group position={[-318.199, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_1.geometry}
          material={materials.WHITE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_2.geometry}
          material={materials.GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_3.geometry}
          material={materials.GREEN_TREES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_4.geometry}
          material={materials.GREEN_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_5.geometry}
          material={materials.WATER_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_6.geometry}
          material={materials.GREEN_2_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_7.geometry}
          material={materials.GOLDEN_BROWN_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_8_MOD_8.geometry}
          material={materials.PREGRADE_PHY}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/ring8_segment.glb');
