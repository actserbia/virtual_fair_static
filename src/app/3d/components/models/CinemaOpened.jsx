/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function CinemaOpened(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/cinema_opened.glb`);
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.8, 4.205]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_1.geometry}
            material={materials.BLACK_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_2.geometry}
            material={materials.CINEMA_SEATS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_3.geometry}
            material={materials.CINEMA_SPEAKER_MESH}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_4.geometry}
            material={materials.EXIT_SIGN}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_5.geometry}
            material={materials.FLOOR_CARPET}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_6.geometry}
            material={materials.GLASS_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_7.geometry}
            material={materials.GREY_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_8.geometry}
            material={materials.SCREEN_GREY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_9.geometry}
            material={materials.SEATS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_10.geometry}
            material={materials.WALL_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_11.geometry}
            material={materials.WALL_OUTSIDE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_12.geometry}
            material={materials.WHITE_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEMA_OPENED_13.geometry}
          >
            <meshStandardMaterial color={'white'} />
          </mesh>
        </group>
      </group>
      <group position={[0, 2.8, 4.205]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEROBO_1.geometry}
            material={materials.BLACK_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEROBO_2.geometry}
            material={materials.GREY_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CINEROBO_3.geometry}
            material={materials.WHITE_CINEMA}
          />
        </group>
      </group>
      <group position={[0, 2.8, 4.205]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_sajam_1.geometry}
            material={materials.BOARD_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_sajam_2.geometry}
            material={materials.GREY_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_sajam_3.geometry}
            material={materials.SCREEN_GREY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_sajam_4.geometry}
            material={materials.WHITE_CINEMA}
          />
        </group>
      </group>
      <group position={[0, 2.8, 4.205]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_info_pult_1.geometry}
            material={materials.BOARD_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_info_pult_2.geometry}
            material={materials.GREY_CINEMA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_info_pult_3.geometry}
            material={materials.SCREEN_GREY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Povratak_info_pult_4.geometry}
            material={materials.WHITE_CINEMA}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/cinema_opened.glb');
