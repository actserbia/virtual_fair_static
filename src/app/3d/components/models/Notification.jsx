import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Notification(props) {
  const { nodes, materials } = useGLTF('/models/notification.glb');
  const ref = useRef();
  const randomTime = Math.random() * 59;
  const speedFactor = Math.random() * (0.9 - 1.1) + 0.9 + 2;
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * speedFactor + randomTime;
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        name="box1"
        castShadow
        receiveShadow
        geometry={nodes.box1.geometry}
        material={materials.Out}
      >
        <meshStandardMaterial color="red" tonaMapped={false} />
      </mesh>
      <mesh
        name="box1_1"
        castShadow
        receiveShadow
        geometry={nodes.box1_1.geometry}
        material={materials.In}
      >
        <meshStandardMaterial
          emissive="gold"
          color="gold"
          emissiveIntensity={123123122}
          toneMapped={true}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/notification.glb');
