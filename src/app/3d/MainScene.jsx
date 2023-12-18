"use client"

import { useRef, useContext, memo, Suspense, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Sky,
  Text,
  PerspectiveCamera,
  BakeShadows,
  Stats,
  Cloud,
  AdaptiveDpr,
  AdaptiveEvents,
  PerformanceMonitor,
  Preload,
} from '@react-three/drei';

import { animated } from '@react-spring/three';

import * as THREE from 'three';
import { toRadians } from './lib/helpers/math';
import { Windmil } from './components/models/Windmill';
import { Garden } from './components/Garden';
import { GridContext } from './contexts/GridContext';
import { PREVIEW_STATES } from './lib/consts/states';
import { Theatre } from './components/models/Theatre';
import { TheatreBase } from './components/models/TheatreBase';
import { Globals } from '@react-spring/shared';
import { TerrainWithPaths } from './components/models/TerrainWithPaths';
import { PathX } from './components/models/PathX';

import LoaderWrapper from './components/Loader.jsx';
// import { Terrain } from './components/models/Terrain';
import { Zeppelin } from './components/models/Zeppelin';
import { Road3 } from './components/models/Road3';
import { Road4 } from './components/models/Road4';
import { Road5 } from './components/models/Road5';
import { Road6 } from './components/models/Road6';
import { Road7 } from './components/models/Road7';
import { Road8 } from './components/models/Road8';
import { Dome } from './components/models/Dome';
import PageTransition from './components/PageTransition';
import Grid from './components/Grid';

const Rings = dynamic(() => import('./components/models/Rings'), {
  ssr: false,
});

const RingsMobile = dynamic(() => import('./components/models/RingsMobile'), {
  ssr: false,
});

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
// Globals.assign({
//   frameLoop: 'always',
// });

const MainScene = memo(function MainScene({ handleOpenAccountInfo, fairId }) {
  const [isMobile, setIsMobile] = useState(false);
  const hemisphereColor = new THREE.Color();
  const router = useRouter();
  const hemisphereGroundColor = new THREE.Color();
  const [isLoading, setIsLoading] = useState(false);
  const handleRouteChange = () => {
    setIsLoading(true);
  };
  const handleRouteComplete = () => {
    setIsLoading(false);
  };

  // router.events.on('routeChangeStart', handleRouteChange);
  // router.events.on('routeChangeComplete', handleRouteComplete);
  hemisphereColor.setHSL(0.6, 1, 0.6);
  hemisphereGroundColor.setHSL(0.095, 1, 0.75);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  const fogColor = '#f5f5f5';
  const debugLod = false;
  const ambientColor = '#FFA500';
  const ambientIntensity = 0.3;
  const dirColor = '#fffbb4';
  const dirIntensity = 1;
  const hemisphereIntensity = 0.7;
  const shadowCameraRef = useRef();
  const { gridPositions } = useContext(GridContext);
  const numberOfLines = gridPositions.filter((item) =>
    item.some((child) => child != null)
  ).length;
  const [dpr, setDpr] = useState(1.5);
  return (
    <>
      {/* {isLoading && <PageTransition />} */}
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        shadows
        linear
        dpr={dpr}
        camera={{ position: [10, 13, -25], fov: 80 }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense >
          <Cloud
            opacity={0.2}
            scale={50}
            speed={0.1} // Rotation speed
            width={10} // Width of the full cloud
            depth={0.11} // Z-dir depth
            segments={20} // Number of particles
            position={[-520, 320, 500]}
          />
          <Cloud
            opacity={0.2}
            scale={50}
            speed={0.1} // Rotation speed
            width={10} // Width of the full cloud
            depth={0.11} // Z-dir depth
            segments={20} // Number of particles
            position={[520, 350, 510]}
          />
          <Cloud
            opacity={0.2}
            scale={50}
            speed={0.1} // Rotation speed
            width={10} // Width of the full cloud
            depth={0.11} // Z-dir depth
            segments={20} // Number of particles
            position={[520, 310, -520]}
          />
          <Cloud
            opacity={0.3}
            scale={50}
            speed={0.1} // Rotation speed
            width={10} // Width of the full cloud
            depth={0.11} // Z-dir depth
            segments={20} // Number of particles
            position={[-520, 310, -520]}
          />
          <Stats showPanel={0} className="stats" />
          <Preload all />
          <Zeppelin
            scale={0.002}
            rotation={[0, toRadians(225), 0]}
            position={[-100, 4, 30]}
          />
          <directionalLight
            position={[10, 90, 60]}
            angle={0.3}
            penumbra={1}
            castShadow
            intensity={dirIntensity}
            color={dirColor}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.00002}
          >
            <orthographicCamera
              fov={80}
              ref={shadowCameraRef}
              shadowMap
              attach="shadow-camera"
              args={[-50, 50, 40, -50, 0.1, 3530]}
            />
          </directionalLight>
          <Grid handleOpenAccountInfo={handleOpenAccountInfo} />
          <Text
            position={[-2.59, -0.08, -0.33]}
            rotation={[0, toRadians(45), 0]}
            color="#c0c0c0"
            scale={0.021}
          >
            Psst kid, wanna buy some frames?
          </Text>
          <fog attach="fog" args={[fogColor, 40, 211.5]} />
          <Theatre
            position={[0, 0, 0]}
            scale={0.045}
            rotation={[0, toRadians(22.5), 0]}
            fairId={fairId}
          />
          <TheatreBase
            scale={0.002}
            rotation={[0, toRadians(45), 0]}
            position={[0, 0.01, 0]}
          />
          {isMobile ? (
            <RingsMobile debugLod={debugLod} numberOfLines={numberOfLines} />
          ) : (
            <Rings debugLod={debugLod} numberOfLines={numberOfLines} />
          )}

          {numberOfLines === 3 && (
            <Road3
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}
          {numberOfLines === 4 && (
            <Road4
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}
          {numberOfLines === 5 && (
            <Road5
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}
          {numberOfLines === 6 && (
            <Road6
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}
          {numberOfLines === 7 && (
            <Road7
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}
          {numberOfLines === 8 && (
            <Road8
              scale={0.002}
              rotation={[toRadians(-90), toRadians(0), toRadians(45)]}
              position={[0, 0, 0]}
            />
          )}

          <BakeShadows />
          {/* <Landscape position={[0, -0.34, 0]} scale={3.8} /> */}
          <Windmil
            position={[16, 8.1, -136]}
            scale={1.5}
            rotation={[0, toRadians(15), 0]}
          />
          <Windmil
            position={[50, 5.1, 110]}
            scale={2}
            rotation={[0, toRadians(15), 0]}
          />
          <Windmil
            position={[-110, 3.1, -50]}
            scale={1.8}
            rotation={[0, toRadians(15), 0]}
          />
          <hemisphereLight
            color={hemisphereColor}
            groundColor={hemisphereGroundColor}
            position={[-7, 25, 13]}
            intensity={hemisphereIntensity}
          />
          <ambientLight color={ambientColor} intensity={ambientIntensity} />
          <Environment
            background
            path={`${process.env.NEXT_PUBLIC_ROOT}images/`}
            files="venice_sunset_1k.hdr"
            blur={1}
          />
          <Garden scale={0.002} rotation={[0, Math.PI / 4, 0]}></Garden>
          <Dome scale={0.2} rotation={[0, Math.PI / 4, 0]} />
          <TerrainWithPaths scale={0.002} rotation={[0, Math.PI / 4, 0]} />
          <PathX scale={0.002} rotation={[0, Math.PI / 4, 0]} />
          <Controls />
          <Sky scale={1000} sunPosition={[10, 10, 30]} turbidity={0.1} />
        </Suspense>
      </Canvas>
    </>
  );
});

function Controls() {
  const { gl, camera } = useThree();
  const animatedCameraRef = useRef();
  const { previewState } = useContext(GridContext);

  const isDomePreview = previewState === PREVIEW_STATES.DOME;

  const AnimatedCamera = animated(PerspectiveCamera);
  const AnimatedOrbitControls = animated(OrbitControls);
  return (
    <>
      <AnimatedCamera
        ref={animatedCameraRef}
        fov={80}
        makeDefault
        position={[0, 13, -25]}
        far={1300}
      />
      <AnimatedOrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        args={[camera, gl.domElement]}
        autoRotate={true}
        maxDistance={44}
        autoRotateSpeed={0}
        target={[0, 0, 0]}
        makeDefault
        enableRotate={isDomePreview}
        enablePan={false}
        polarAngle={(3 * Math.PI) / 13}
        minPolarAngle={toRadians(15)}
        maxPolarAngle={toRadians(80)}
      />
    </>
  );
}

MainScene.defaultProps = {
  handleOpenAccountInfo: null,
  fairId: "234q1234fawfSDfasdasdfasdf",
}

MainScene.propTypes = {
  handleOpenAccountInfo: PropTypes.func,
  fairId: PropTypes.string,
}

export default MainScene;
