import { toRadians } from '../lib/helpers/math';

const Ground = (radius) => {
  return (
    <group>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
      >
        <ringGeometry
          args={[radius, radius + 37.6, 120, 1, toRadians(-3), toRadians(276)]}
        />
        <meshStandardMaterial
          roughness={0.8}
          metalness={1}
          color={'#f4f3f4'}
        ></meshStandardMaterial>
      </mesh>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
      >
        <ringGeometry
          args={[radius, radius + 2, 50, 1, toRadians(-87), toRadians(84)]}
        />
        <meshStandardMaterial
          roughness={0.8}
          metalness={1}
          color={'#f4f3f4'}
        ></meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Ground;
