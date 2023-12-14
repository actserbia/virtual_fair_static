import { Detailed } from '@react-three/drei';
import { Ring1Segment } from './Ring1Segment';
import { Ring1SegmentLow } from './Ring1SegmentLow';
import { Ring2Segment } from './Ring2Segment';
import { Ring2SegmentLow } from './Ring2SegmentLow';
import { Ring3Segment } from './Ring3Segment';
import { Ring3SegmentLow } from './Ring3SegmentLow';
import { Ring4Segment } from './Ring4Segment';
import { Ring4SegmentLow } from './Ring4SegmentLow';
import { Ring5Segment } from './Ring5Segment';
import { Ring5SegmentLow } from './Ring5SegmentLow';
import { Ring6Segment } from './Ring6Segment';
import { Ring6SegmentLow } from './Ring6SegmentLow';
import { Ring7Segment } from './Ring7Segment';
import { Ring7SegmentLow } from './Ring7SegmentLow';
import { Ring8Segment } from './Ring8Segment';
import { Ring8SegmentLow } from './Ring8SegmentLow';
import { toRadians } from '../../lib/helpers/math';

const Rings = ({ debugLod, numberOfLines }) => {
  return (
    <>
      <Detailed position={[-7.5, 0, 7.5]} distances={[20, 30]}>
        <Ring1Segment
          debugLod={debugLod}
          scale={0.002}
          position={[7.5, 0.03, -7.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring1SegmentLow
          scale={0.002}
          position={[7.5, 0.03, -7.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed position={[-7.5, 0, -7.5]} distances={[20, 30]}>
        <Ring1Segment
          debugLod={debugLod}
          scale={0.002}
          position={[7.5, 0.03, 7.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring1SegmentLow
          scale={0.002}
          position={[7.5, 0.03, 7.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed position={[7.5, 0, -7.5]} distances={[20, 30]}>
        <Ring1Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-7.5, 0.03, 7.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring1SegmentLow
          scale={0.002}
          position={[-7.5, 0.03, 7.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed position={[-11, 0, 11]} distances={[20, 30]}>
        <Ring2Segment
          debugLod={debugLod}
          scale={0.002}
          position={[11, 0.03, -11]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring2SegmentLow
          scale={0.002}
          position={[11, 0.03, -11]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed position={[-11, 0, -11]} distances={[20, 30]}>
        <Ring2Segment
          debugLod={debugLod}
          scale={0.002}
          position={[11, 0.03, 11]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring2SegmentLow
          scale={0.002}
          position={[11, 0.03, 11]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed position={[11, 0, -11]} distances={[20, 30]}>
        <Ring2Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-11, 0.03, 11]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring2SegmentLow
          scale={0.002}
          position={[-11, 0.03, 11]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 2}
        position={[-14.5, 0, 14.5]}
        distances={[20, 30]}
      >
        <Ring3Segment
          debugLod={debugLod}
          scale={0.002}
          position={[14.5, 0.03, -14.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring3SegmentLow
          scale={0.002}
          position={[14.5, 0.03, -14.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 2}
        position={[-14.5, 0, -14.5]}
        distances={[20, 30]}
      >
        <Ring3Segment
          debugLod={debugLod}
          scale={0.002}
          position={[14.5, 0.03, 14.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring3SegmentLow
          scale={0.002}
          position={[14.5, 0.03, 14.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 2}
        position={[14.5, 0, -14.5]}
        distances={[20, 30]}
      >
        <Ring3Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-14.5, 0.03, 14.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring3SegmentLow
          scale={0.002}
          position={[-14.5, 0.03, 14.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 3}
        position={[-17.5, 0, 17.5]}
        distances={[20, 30]}
      >
        <Ring4Segment
          debugLod={debugLod}
          scale={0.002}
          position={[17.5, 0.03, -17.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring4SegmentLow
          scale={0.002}
          position={[17.5, 0.03, -17.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 3}
        position={[-17.5, 0, -17.5]}
        distances={[20, 30]}
      >
        <Ring4Segment
          debugLod={debugLod}
          scale={0.002}
          position={[17.5, 0.03, 17.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring4SegmentLow
          scale={0.002}
          position={[17.5, 0.03, 17.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 3}
        position={[17.5, 0, -17.5]}
        distances={[20, 30]}
      >
        <Ring4Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-17.5, 0.03, 17.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring4SegmentLow
          scale={0.002}
          position={[-17.5, 0.03, 17.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 4}
        position={[-20.5, 0, 20.5]}
        distances={[20, 30]}
      >
        <Ring5Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring5SegmentLow
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 4}
        position={[-20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring5Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring5SegmentLow
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 4}
        position={[20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring5Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring5SegmentLow
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 5}
        position={[-20.5, 0, 20.5]}
        distances={[20, 30]}
      >
        <Ring6Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring6SegmentLow
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 5}
        position={[-20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring6Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring6SegmentLow
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 5}
        position={[20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring6Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring6SegmentLow
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 6}
        position={[-20.5, 0, 20.5]}
        distances={[20, 30]}
      >
        <Ring7Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring7SegmentLow
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 6}
        position={[-20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring7Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring7SegmentLow
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 6}
        position={[20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring7Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring7SegmentLow
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 7}
        position={[-20.5, 0, 20.5]}
        distances={[20, 30]}
      >
        <Ring8Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring8SegmentLow
          scale={0.002}
          position={[20.5, 0.03, -20.5]}
          rotation={[0, toRadians(45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 7}
        position={[-20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring8Segment
          debugLod={debugLod}
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring8SegmentLow
          scale={0.002}
          position={[20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-45), 0]}
        />
      </Detailed>
      <Detailed
        visible={numberOfLines > 7}
        position={[20.5, 0, -20.5]}
        distances={[20, 30]}
      >
        <Ring8Segment
          debugLod={debugLod}
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
        <Ring8SegmentLow
          scale={0.002}
          position={[-20.5, 0.03, 20.5]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Detailed>
    </>
  );
};

export default Rings;
