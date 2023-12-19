
import styles from './PageTransition.module.css';
import { Html, Loader, useProgress } from '@react-three/drei';

const LoaderWrapper = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html position={[0, 0, 0]}>
      <div className={`${styles.wrapper} ${styles.loader}`}>
        <Loader
          containerStyles={{ background: 'transparent', color: 'black' }} // Flex layout styles
          innerStyles={{ background: '#333', marginBottom: '0px' }} // Inner container styles
          barStyles={{ background: '#d03a39' }} // Loading-bar styles
          dataStyles={{ color: 'black', userSelect: 'none', fontSize: "13px", marginLeft: "0" }} // Text styles
          dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
          initialState={(active) => active} // Initial black out state
        />
        {progress >=100 && <p className={`${styles["loading-text"]}`}> Preparing the scene, please wait. </p>}
      </div>

    </Html>
  );
};

export default LoaderWrapper;
