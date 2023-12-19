"use client"

import { useRef, memo, useState, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Sky,
  PerspectiveCamera,
  Bvh,
  Line,
  BakeShadows,
} from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Globals } from '@react-spring/shared';

Globals.assign({
  frameLoop: 'always',
});

import { BoothDetail } from './components/models/BoothDetail';
import Robot from './components/models/Robot';
import Logo from './components/Logo';
import { toRadians } from './lib/helpers/math';
import { useRouter } from 'next/navigation';
import PageTransition from './components/PageTransition';
import LoaderWrapper from './components/Loader';

const DetailScene = memo(function DetailScene({ company_logo, company_name }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const _hemisphereColor = new THREE.Color();
  const _hemisphereGroundColor = new THREE.Color();


  _hemisphereColor.setHSL(0.6, 1, 0.6);
  // hsl(216 100% 60% / 1) #3385ff
  // #ffc880
  _hemisphereGroundColor.setHSL(0.095, 1, 0.75);
  const hemisphereGroundColor = _hemisphereGroundColor;
  const pointLightEnabled = true;

  const pointRef = useRef();
  const ambientColor = '#FFA500';
  const ambientIntensity = 0.3;

  const handleRobotClick = () => {
    Papercups.toggle();
  };

  const robotProps = {
    onClick: () => handleRobotClick(),
    tooltip: "tooltip message",
    company_logo,
    company_name,
  };

  return (
    <>
      {isLoading && <PageTransition />}
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        shadows
        gl={{ powerPreference: 'high-performance' }}
        linear
      >
        <Suspense fallback={<LoaderWrapper />}>
          <DirectionalLight />
          <BakeShadows />
          <Bvh>
            <BoothDetail
              scale={0.01}
              rotation={[0, -Math.PI, 0]}
              position={[0, 0, 0]}
            />
            {/* <Logo
              url={company_logo}
              rotation={[0, Math.PI, 0]}
              position={[0.19, 6.55, -3.2]}
              scale={62}
            /> */}
            <Robot
              key="robot1"
              position={[0.04, 3.45, -4.975]}
              rotation={[0, Math.PI, 0]}
              {...robotProps}
            />
            <Robot
              key="robot2"
              position={[1.75, 3.45, -4.45]}
              rotation={[0, toRadians(160), 0]}
              {...robotProps}
            />
            <Robot
              key="robot3"
              position={[4.2, 3.45, -5.8]}
              rotation={[0, toRadians(120), 0]}
              {...robotProps}
            />
          </Bvh>

          <hemisphereLight
            color={_hemisphereColor}
            groundColor={hemisphereGroundColor}
            position={[-7, 25, 13]}
            intensity={0.7}
          />
          {pointLightEnabled && <PointLight />}
          <ambientLight color={ambientColor} intensity={ambientIntensity} />
          <Environment
            background
            path={`${process.env.NEXT_PUBLIC_ROOT}/images/`}
            files="venice_sunset_1k.hdr"
            blur={1}
          />
          <Sky scale={1000} sunPosition={[10, 10, 30]} turbidity={0.1} />
          <Controls pointRef={pointRef} />
        </Suspense>
      </Canvas>
    </>
  );
});

function Controls({ lightRef }) {
  const { gl } = useThree();
  const animatedCameraRef = useRef();
  const [animFinished, setAnimFinished] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: {
      position: [0.28702245335690946, 5.392361243915242, -27],
    },
    to: {
      position: [0.28702245335690946, 5.392361243915242, -10.176141259891661],
      target: [0, 2, -4],
    },
    onRest: () => {
      setAnimFinished(true);
    },
    delay: 1600,
    config: {
      mass: 1,
      tension: 100,
      friction: 30,
      precision: 0.001,
      restVelocity: 1,
    },
  }));

  const AnimatedCamera = animated(PerspectiveCamera);
  const AnimatedOrbitControls = animated(OrbitControls);
  return (
    <>
      <AnimatedCamera
        ref={animatedCameraRef}
        makeDefault
        fov={80}
        position={springs.position}
      />
      <AnimatedOrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        args={[animatedCameraRef, gl.domElement]}
        maxDistance={animFinished ? 16 : 222}
        minDistance={6}
        autoRotateSpeed={0}
        enableRotate={animFinished}
        target={[0, 3, -4]}
        polarAngle={(3 * Math.PI) / 13}
        minAzimuthAngle={toRadians(120)}
        maxAzimuthAngle={toRadians(240)}
        minPolarAngle={toRadians(35)}
        maxPolarAngle={toRadians(80)}
      />
      <Line
        color="blue"
        points={[
          [0, 0.0, 0],
          [0, 0.0, 0],
        ]}
      />
    </>
  );
}

const PointLight = () => {
  const pointLight = '#fffefc';
  const pointIntensity = 0.13;
  const ref = useRef();
  // useHelper(ref, PointLightHelper, 1);

  return (
    <pointLight
      ref={ref}
      position={[-5, 3, -10]}
      color={pointLight}
      intensity={pointIntensity}
    />
  );
};

const DirectionalLight = () => {
  const dirColor = '#fffbb4';
  const dirIntensity = 1;
  const ref = useRef();

  return (
    <directionalLight
      ref={ref}
      position={[10, 90, 60]}
      angle={0.3}
      penumbra={0.1}
      castShadow
      intensity={dirIntensity}
      color={dirColor}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.00003}
    >
      <orthographicCamera
        fov={80}
        shadowMap
        position={[-2, 2, -30]}
        attach="shadow-camera"
        args={[-10, 10, 10, -10, 0.1, 550]}
      />
    </directionalLight>
  );
};

export default DetailScene;
