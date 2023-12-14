import React, { useMemo, useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Instance, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { changeCursorOnHover } from '../../lib/helpers/cursor';
import { PREVIEW_STATES } from '../../lib/consts/states';
import { GridContext } from '../../contexts/GridContext';
import { toRadians } from '../../lib/helpers/math';
export function Booth({
  rotation,
  companyName,
  sectorName,
  textureUrl,
  descriptionShort,
  position,
  ...rest
}) {
  const ref = useRef();

  const { previewState } = useContext(GridContext);
  const [hovered, hover] = useState(false);

  const isDomePreview = previewState === PREVIEW_STATES.DOME;
  useFrame(() => {
    ref.current.color =
      hovered && isDomePreview
        ? new THREE.Color('#b0e0e6')
        : new THREE.Color('white');
    changeCursorOnHover(hovered);
  }, []);

  const adaptedRotation = useMemo(
    () => [rotation[0] - Math.PI / 2, rotation[2], rotation[1]],
    [rotation]
  );

  const companyLogo =
    textureUrl === '' || textureUrl === '/images/accounts/default.jpg'
      ? null
      : textureUrl;

  return (
    <>
      <group position={position} rotation={adaptedRotation}>
        <mesh
          position={[0, 0.3, 0.3]}
          visible={false}
          onPointerOver={() => {
            hover(true);
          }}
          onPointerOut={() => {
            hover(false);
          }}
        >
          <boxGeometry args={[1.2, 2.2, 0.7]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <Instance
          visible
          ref={ref}
          {...rest}
          castShadow
          receiveShadow
          opacity={0.1}
          transparent={true}
          position={[0, 0.12, 0]}
          rotation={[toRadians(90), 0, 0]}
          scale={0.002}
        >
          <Html
            position={[0, 0.15, 0]}
            className={`${
              hovered && isDomePreview ? 'opacity-100' : 'opacity-0'
            } _3d-content-wrapper transition-all duration-200 ease-in`}
          >
            <div className={`_3d-content ${hovered && 'active'}`}>
              <div className={'_3d-name'}>{companyName}</div>
              <div className="_3d-sector">{sectorName}</div>
              <div className="_3d-description">{descriptionShort}</div>
            </div>
          </Html>
        </Instance>
      </group>
    </>
  );
}

Booth.defaultProps = {
  companyName: 'Unknown name',
  sectorName: 'Unknown sector',
};

Booth.propTypes = {
  companyName: PropTypes.string,
  sectorName: PropTypes.string,
};
