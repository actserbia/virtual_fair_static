import { useTexture } from '@react-three/drei';
const Logo = ({ url, ...rest }) => {
  const texture = useTexture(url);
  const { image } = texture;
  const w = image.naturalWidth;
  const h = image.naturalHeight;
  const aspectRatio = w / h;
  const maxHeight = 0.0135;
  const maxWidth = 0.0439;
  let finalWidth, finalHeight;
  finalHeight = maxHeight;
  finalWidth = maxHeight * aspectRatio;

  if (finalWidth > maxWidth) {
    finalWidth = maxWidth;
    finalHeight = maxWidth / aspectRatio;
    if (finalHeight > maxHeight) {
      const adaptScale = maxHeight / finalHeight;
      finalHeight = finalHeight * adaptScale;
      finalWidth = finalWidth * adaptScale;
    }
  }

  // if (w >= h) {
  //   finalWidth = w * scale;
  //   finalHeight = finalWidth / aspectRatio;
  // } else {
  //   finalHeight = h * scale;
  //   finalWidth = finalHeight / aspectRatio;
  // }

  return (
    <mesh visible={true} {...rest}>
      <planeGeometry
        receiveShadow
        attach="geometry"
        args={[finalWidth, finalHeight]}
      />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Logo;
