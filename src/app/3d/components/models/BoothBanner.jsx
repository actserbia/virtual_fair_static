import React from 'react';
import { useGLTF } from '@react-three/drei';

export function BoothBanner(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/booth-banner.glb`);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOOTH_BANNER_1.geometry}
            material={materials.Material__2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BOOTH_BANNER_2.geometry}
            material={materials.WHITE_PHY}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/booth-banner.glb');
