import { useState } from 'react';

const DomeSceneHoverBox = (props) => {
  const [boothHovered, setBoothHovered] = useState(false);
  return (
    <mesh
      {...props}
      visible={true}
      scale={10}
      onPointerOver={() => {
        setBoothHovered(true);
      }}
      onPointerOut={() => {
        setBoothHovered(false);
      }}
      position={[0, 5, -3]}
    >
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial
        color="rgba(0, 0, 255, 0.2)"
        opacity={boothHovered ? 0.2 : 0}
        transparent
      />
    </mesh>
  );
};

export default DomeSceneHoverBox;
