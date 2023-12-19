"use client"

import { Suspense, useState } from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
  useHelper,
  SpotLight,
  Plane,
  BakeShadows,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { SpotLightHelper, RectAreaLightHelper, Object3D } from 'three';
import { CinemaOpened } from './components/models/CinemaOpened';

import { animated, useSpring } from '@react-spring/three';
import { useContext, useRef } from 'react';
import { GridContext } from './contexts/GridContext';
import { useControls } from 'leva';
// import { TheatrePlaneComponent } from '@/components/TheatreComponent/TheatrePlaneComponent';
import { toRadians } from './lib/helpers/math';
import { useRouter } from 'next/navigation';
import PageTransition from './components/PageTransition';
import LoaderWrapper from './components/Loader';
import { TheatrePlaneComponent } from './components/TheatrePlaneComponent';

const TheatreScene = ({ cinemaMode, setCinemaMode, currentVideo }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [showMovie, setShowMovie] = useState(false);
  const [wallLightOn, setWallLightOn] = useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRouteChange = () => {
    setIsLoading(true);
  };
  const handleRouteComplete = () => {
    setIsLoading(false);
  };

  const hemisphereGroundColor = '#88ccff';
  const pointColor = '#ff4800';
  // router.events.on('routeChangeStart', handleRouteChange);
  // router.events.on('routeChangeComplete', handleRouteComplete);

  return (
    <>
      {isLoading && <PageTransition />}
      <Canvas
        // onClick={handleClick}
        style={{ width: '100vw', height: '100vh' }}
        camera={{ fov: 40, position: [15, 1, 15] }}
      >
        <Suspense fallback={<LoaderWrapper />}>
          <group rotation={[0, toRadians(180), 0]} position={[5, 0, 0]}>
            <CinemaOpened />
            <hemisphereLight
              intensity={wallLightOn ? 0.5 : 0.15}
              groundColor={wallLightOn ? hemisphereGroundColor : 'black'}
              color={'#9dc5f1'}
            />
            <Lights visible={!wallLightOn} />
            <PointLight
              visible={wallLightOn}
              position={[6, 5, -4]}
              intensity={0.2}
              color={pointColor}
            />
            <RectAreaLight
              width={0.13}
              height={2.8}
              intensity={15}
              size={[0.13, 2.8]}
              lookAt={[11, 3.97, 11]}
              visible={wallLightOn}
              position={[-5.96, 3.98, 3.5]}
              color={'white'}
            />
            <RectAreaLight
              width={0.13}
              height={2.8}
              intensity={15}
              size={[0.13, 2.8]}
              lookAt={[11, 3.97, 11]}
              visible={wallLightOn}
              position={[-6, 3.98, 1.1]}
              color={'white'}
            />
            <RectAreaLight
              width={0.13}
              height={2.8}
              intensity={15}
              size={[0.13, 2.8]}
              lookAt={[-6, 3.98, 11]}
              visible={wallLightOn}
              position={[-5.98, 3.98, -1.3]}
              color={'white'}
            />
            <BakeShadows />
            <TheatrePlaneComponent
              visible={!wallLightOn}
              cinemaMode={cinemaMode}
              setCinemaMode={setCinemaMode}
              currentVideo={currentVideo}
            />
          </group>
          <color attach="background" args={['black']} />
          <Controls
            setWallLightOn={setWallLightOn}
            wallLightOn={wallLightOn}
            cinemaMode={cinemaMode}
            setFirstTime={setFirstTime}
            firstTime={firstTime}
            setShowMovie={setShowMovie}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

function Controls({
  cinemaMode,
  setFirstTime,
  firstTime,
  setShowMovie,
  setWallLightOn,
  wallLightOn,
}) {
  const { gl, camera } = useThree();
  const animatedCameraRef = useRef();
  const { clickedPosition, cameraPosition, previewState } =
    useContext(GridContext);
  const [animFinished, setAnimFinished] = useState(false);
  const frameCount = useRef(0);
  const lightsOnFrame = 100;
  const { position, rotation, ambientIntensity } = useSpring({
    position:
      cinemaMode || !firstTime
        ? [4.64698872980732, 2.7911740160554492, 0.9678822069823809]
        : [-5.6, 4.747343293544693, -2.2],
    rotation:
      cinemaMode || !firstTime
        ? [0, toRadians(180), 0]
        : [0, toRadians(245), 0],
    ambientIntensity: firstTime ? 0.1 : 0.001,
    config: {
      mass: 1,
      tension: 80,
      friction: 40,
      precision: 0.0001,
    },
    delay: 200,
    onChange: () => {
      frameCount.current += 1;
      if (frameCount.current > lightsOnFrame) {
        setWallLightOn(false);
      }
    },
    onStart: () => {
      setFirstTime(false);
      setShowMovie(true);
    },
    onRest: () => setShowMovie(true),
    // delay: 100,
  });

  const AnimatedCamera = animated(PerspectiveCamera);
  const AnimatedOrbitControls = animated(OrbitControls);
  return (
    <>
      <AnimatedCamera
        ref={animatedCameraRef}
        fov={80}
        makeDefault
        position={position}
        rotation={rotation}
      />
      <animated.ambientLight color={'white'} intensity={ambientIntensity} />
    </>
  );
}

const PointLight = (props) => {
  const ref = useRef();

  return (
    <pointLight
      {...props}
      ref={ref}
      // color={pointLight}
      // intensity={pointIntensity}
    />
  );
};

const Lights = (props) => {
  const spotLight = useRef();
  const rectLight = useRef();
  useHelper(spotLight, SpotLightHelper, 'white');
  useHelper(rectLight, RectAreaLightHelper, 'red');
  const [target] = useState(() => new Object3D());
  return (
    <>
      <SpotLight
        castShadow
        position={[0, 5.4, 6]}
        target={target}
        penumbra={0.2}
        radiusTop={0.001}
        radiusBottom={15}
        distance={100}
        angle={0.25}
        attenuation={15}
        anglePower={3}
        intensity={0}
        opacity={0.6}
        visible={props.visible}
      />
      <rectAreaLight
        ref={rectLight}
        width={5.2}
        height={2}
        intensity={1}
        color={'white'}
        position={[0, 3.2, -7]}
        lookAt={[0, 4, -5]}
        penumbra={0.2}
        castShadow
        visible={props.visible}
      />
      <primitive object={target} position={[0, 4, -3]} />
    </>
  );
};

const RectAreaLight = (props) => {
  return (
    <>
      <rectAreaLight width={props.size[0]} height={props.size[1]} {...props} />
      <Plane
        args={props.size}
        position={props.position}
        rotation={[0, Math.PI, 0]}
      >
        <meshBasicMaterial color={props.color} />
      </Plane>
    </>
  );
};

export default TheatreScene;
