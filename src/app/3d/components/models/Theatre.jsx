/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react';

import { Box, useGLTF, Html } from '@react-three/drei';
import DefaultMaterial from '../materials/DefaultMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { changeCursorOnHover } from '../../lib/helpers/cursor';
import { Notification } from './Notification';

export function Theatre(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/theatre.glb');
  const [hovered, hover] = useState(false);
  useFrame(() => {
    materials.GREY_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.WHITE_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.GREY_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');

    changeCursorOnHover(hovered);
  }, [hovered]);
  const { fairId } = props;

  const handleClick = () => {
    // router.push(`/sajam3d/${fairId}/teatar3d`);
  };

  // materials.GREY_PHY.roughness = 0.8;
  // materials.GREY_PHY.metalness = 0;
  // materials.WHITE_PHY.roughness = 0.8;
  // materials.WHITE_PHY.metalness = 0;
  return (
    <group {...props} dispose={null} onClick={() => handleClick()}>
      <group
      // position={[0, 12, 0]}
      //
      // rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      // scale={[-1, 1, 1]}
      >
        <mesh
          scale={50}
          position={[0, 25, 9]}
          visible={false}
          onPointerOver={() => {
            hover(true);
          }}
          onPointerOut={() => {
            hover(false);
          }}
        >
          <boxGeometry args={[1.6, 1.2, 1.6]} />
          {/* <meshBasicMaterial color="red"  opacity={0} transparent/> */}
        </mesh>
        {
          <Html position={[0, 0.15, 0]} className="_3d-content-wrapper tooltip">
            <div className={`_3d-content ${hovered && 'active'}`}>
              <figure className="mb-2">
                {/* Theatre */}
              </figure>
              <div className="_3d-description">
                Theatre
              </div>
            </div>
          </Html>
        }
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.THEATRE_MOD_1.geometry}
            material={materials.WHITE_PHY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.THEATRE_MOD_2.geometry}
            material={materials.GREY_PHY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.THEATRE_MOD_3.geometry}
            material={materials.GLASS_GLTF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.THEATRE_MOD_4.geometry}
            material={materials.PREGRADE_PHY}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/theatre.glb');