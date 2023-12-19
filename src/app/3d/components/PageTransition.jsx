import Logo from './Logo';
import styles from './PageTransition.module.css';
import { Loader } from '@react-three/drei';
const PageTransition = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <Loader
        containerStyles={{
          background: '#f2eeed',
          color: 'black',
          width: '100vw',
        }} // Flex layout styles
        innerStyles={{ background: '#333' }} // Inner container styles
        barStyles={{ background: '#d03a39' }} // Loading-bar styles
        dataStyles={{ color: 'black', userSelect: 'none' }} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => active} // Initial black out state
      />
    </div>
  );
};

export default PageTransition;
