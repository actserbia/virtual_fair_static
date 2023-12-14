import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { changeCursorOnHover } from '../../lib/helpers/cursor';

export function Dome(props) {
  const router = useRouter();
  const { nodes, materials } = useGLTF('/models/dome_object.glb');

  const [hovered, hover] = useState(false);
  useFrame(() => {
    materials.GOLDEN_BROWN_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.GREY_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.ROBO_GREY_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.PREGRADE_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');
    materials.WHITE_PHY.color = hovered
      ? new THREE.Color('#b0e0e6')
      : new THREE.Color('white');

    changeCursorOnHover(hovered);
  }, [hovered]);

  const handleClick = () => {
    // router.push(`/sajam3d/${fairId}/info-pult`);
  };

  return (
    <group {...props} dispose={null} onClick={() => handleClick()}>
      <Html position={[0, 20, 150]} className="_3d-content-wrapper tooltip">
        <div className={`_3d-content ${hovered && 'active'}`}>
          <div className="_3d-description">
            <figure className="mb-2">
              needs logo
            </figure>
            info pult message
          </div>
        </div>
      </Html>
      <mesh
        scale={[38, 32, 38]}
        position={[0, -10, 132]}
        visible={false}
        onPointerOver={() => {
          hover(true);
        }}
        onPointerOut={() => {
          hover(false);
        }}
      >
        <sphereGeometry args={[1, 8, 8, 0, 2 * Math.PI, 0, 1.3]} />
        <meshBasicMaterial color="red" opacity={1} transparent />
      </mesh>
      <group rotation={[0, Math.PI / 4, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_1.geometry}
          material={materials.WHITE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_2.geometry}
          material={materials.GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_3.geometry}
          material={materials.GREEN_TREES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_4.geometry}
          material={materials.GREEN_1_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_5.geometry}
          material={materials.GOLDEN_BROWN_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_6.geometry}
          material={materials.PREGRADE_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_7.geometry}
          material={materials.ROBO_GREY_PHY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOME_OBJECT_MOD_8.geometry}
          material={materials.GLASS_GLTF}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/dome_object.glb');
