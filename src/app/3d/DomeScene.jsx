"use client"

import { useRef, memo, useState, useEffect, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Sky,
  PerspectiveCamera,
  useHelper,
  DirectionalLightHelper,
  Bvh,
  BakeShadows,
} from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Globals } from '@react-spring/shared';

Globals.assign({
  frameLoop: 'always',
});

import DomeDetail from './components/models/DomeDetail';
import Robot from './components/models/Robot';
import { toRadians } from './lib/helpers/math';
import { Papercups } from '@papercups-io/chat-widget';
import { useRouter } from 'next/router';
import PageTransition from './components/PageTransition';
import LoaderWrapper from './components/Loader';

const DomeScene = memo(function DetailScene({ statistics }) {
  const _hemisphereColor = new THREE.Color();
  const _hemisphereGroundColor = new THREE.Color();
  const { companies, job_applications, positions } = statistics;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleRouteChange = () => {
    setIsLoading(true);
  };
  const handleRouteComplete = () => {
    setIsLoading(false);
  };
  router.events.on('routeChangeStart', handleRouteChange);
  router.events.on('routeChangeComplete', handleRouteComplete);

  _hemisphereColor.setHSL(0.6, 1, 0.6);
  // hsl(216 100% 60% / 1) #3385ff
  // #ffc880
  _hemisphereGroundColor.setHSL(0.095, 1, 0.75);

  const hemisphereGroundColor = _hemisphereGroundColor;
  const pointLightEnabled = true;
  const pointRef = useRef();
  const ambientColor = '#FFA500';
  const ambientIntensity = 0.01;

  const addLeadingZeros = (number, width) => {
    var numString = number.toString();
    if (numString.length <= width) {
      var zerosToAdd = width - numString.length;
      var result = '0'.repeat(zerosToAdd) + numString;
      return result;
    } else {
      return '010k';
    }
  };

  const handleRobotClick = () => {
    Papercups.toggle();
  };

  const robotProps = {
    onClick: () => handleRobotClick(),
    tooltip: "robotTooltip",
    infoPult: true,
  };

  return (
    <>
      {isLoading && <PageTransition />}
      <Canvas
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
        shadows
        gl={{ powerPreference: 'high-performance' }}
        linear
      >
        <Suspense fallback={<LoaderWrapper />}>
          <DirectionalLight />
          <BakeShadows />
          <Bvh>
            <DomeDetail
              scale={0.015}
              rotation={[0, -Math.PI, 0]}
              position={[0, 2, 0]}
              companies={addLeadingZeros(companies, 4)}
              jobApplications={addLeadingZeros(job_applications, 4)}
              positions={addLeadingZeros(positions, 4)}
            />
            <Robot
              scale={1.5}
              position={[-5.35, 2.4, 18.64]}
              rotation={[0, toRadians(180), 0]}
              {...robotProps}
            />
            <Robot
              scale={1.5}
              position={[-0.15, 2.4, 18.64]}
              rotation={[0, toRadians(180), 0]}
              {...robotProps}
            />
            <Robot
              scale={1.5}
              position={[5.8, 2.4, 18.64]}
              rotation={[0, toRadians(210), 0]}
              {...robotProps}
            />
            <pointLight
              // ref={ref}
              position={[-5, 9, -10]}
              color={'ff2244'}
              intensity={0.4}
            />
          </Bvh>
          <hemisphereLight
            color={_hemisphereColor}
            groundColor={hemisphereGroundColor}
            position={[-7, 25, 13]}
            intensity={0.5}
          />
          {pointLightEnabled && <PointLight />}
          <ambientLight color={ambientColor} intensity={ambientIntensity} />
          <Environment
            background
            path="/images/"
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
  gl.gammaFactor = 0.21;
  gl.gammaOutput = true;
  const [springs, api] = useSpring(
    () => ({
      from: {
        position: [-2, 4, -50],
      },
      to: {
        position: [-2, 2, 10],
        target: [0, 4, 430],
      },
      onRest: () => {
        setAnimFinished(true);
      },
      config: {
        mass: 1,
        tension: 70,
        friction: 23,
        precision: 0.001,
        restVelocity: 1,
      },
      delay: 1600,
      reset: false,
    }),
    []
  );
  useEffect(() => {
    api.start();
  }, [api]);
  useHelper(lightRef);
  const AnimatedCamera = animated(PerspectiveCamera);
  const AnimatedOrbitControls = animated(OrbitControls);
  return (
    <>
      <AnimatedCamera
        ref={animatedCameraRef}
        fov={80}
        makeDefault
        position={springs.position.to((x, y, z) => [x, y, z])}
      />
      <AnimatedOrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        args={[animatedCameraRef, gl.domElement]}
        autoRotateSpeed={0}
        target={[0, 2, 20]}
        makeDefault
        maxDistance={animFinished ? 40 : 222}
        minDistance={1}
        enablePan={animFinished}
        polarAngle={(3 * Math.PI) / 13}
        minPolarAngle={toRadians(65)}
        maxPolarAngle={toRadians(90)}
        minAzimuthAngle={toRadians(110)}
        maxAzimuthAngle={toRadians(250)}
      />
    </>
  );
}

const PointLight = () => {
  const pointLight = '#ffc900';
  const pointIntensity = 0.33;
  const ref = useRef();

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
  const dref = useRef();
  useHelper(dref, DirectionalLightHelper, 2);

  return (
    <directionalLight
      ref={dref}
      position={[1, 16, 6]}
      angle={0.3}
      penumbra={0.1}
      castShadow
      intensity={dirIntensity}
      color={dirColor}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.0001}
    >
      <orthographicCamera
        fov={80}
        shadowMap
        attach="shadow-camera"
        args={[-50, 50, 50, -50, 0.221, 420]}
      />
    </directionalLight>
  );
};

export default DomeScene;
