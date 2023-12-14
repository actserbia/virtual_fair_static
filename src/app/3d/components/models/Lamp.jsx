import React from 'react';
import { useGLTF } from '@react-three/drei';
import DefaultMaterial from '../materials/DefaultMaterial';
export function Lamp(props) {
  const { nodes, materials } = useGLTF('/models/streetLight.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1.geometry}
        material={materials.Frame}
      >
        <DefaultMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1_1.geometry}
        material={materials.Bulb}
      >
        <DefaultMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/streetLight.glb');
