import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Ring1SegmentLow(props) {
  const { nodes, materials } = useGLTF('/models/ring1_segment_low.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[-318.199, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_1.geometry}
          material={materials.WHITE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_2.geometry}
          material={materials.GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_3.geometry}
          material={materials.GREEN_TREES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_4.geometry}
          material={materials.GOLDEN_BROWN_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_5.geometry}
          material={materials.WATER_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RING_1_MOD_LOW_6.geometry}
          material={materials.GREEN_2_PHY}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/ring1_segment_low.glb');
