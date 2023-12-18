/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Zeppelin(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/zeppelin.glb`);
  const zeppelin = useRef();

  useFrame(({ clock }) => {
    zeppelin.current.position.y =
      Math.sin(clock.getElapsedTime() * 0.32) * 1 + 33;
    zeppelin.current.position.x = clock.getElapsedTime() * 1.4 - 80;
  });

  return (
    <group ref={zeppelin} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 2.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V1_GenericAirship_1_Body_1.geometry}
          material={materials.PREGRADE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V1_GenericAirship_1_Body_2.geometry}
          material={materials.OGRADE_SIVE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V1_GenericAirship_1_Body_3.geometry}
          material={materials.GLASS_Z}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V1_GenericAirship_1_Body_4.geometry}
          material={materials.ZEPPELIN_LOGO_BANNER_PHY}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/zeppelin.glb');
