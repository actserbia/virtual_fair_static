import { useControls, folder } from 'leva';
const DefaultMaterial = ({
  metalness: inheritedMetalness,
  roughness: inheritedRoughness,
  ...rest
}) => {
  // Leva debug panel //
  // -------------------
  // const { color, metalness, roughness } = useControls({
  //   Material: folder({
  //     color: '#e8e8e8',
  //     metalness: {
  //       value: 0,
  //       min: 0,
  //       max: 1,
  //     },
  //     roughness: {
  //       value: 1,
  //       min: 0,
  //       max: 1,
  //     },
  //   }),
  // });

  const color = '#e8e8e8';
  const metalness = 0;
  const roughness = 1;
  return (
    <meshStandardMaterial
      {...rest}
      metalness={inheritedMetalness ? inheritedMetalness : metalness}
      roughness={inheritedRoughness ? inheritedRoughness : roughness}
      color={color}
    ></meshStandardMaterial>
  );
};

export default DefaultMaterial;
