import { Instances, Ring1SegmentLowInstance } from './Ring1SegmentMerged';
import { Ring2Instances, Ring2SegmentLowInstance } from './Ring2SegmentMerged';
import { Ring3Instances, Ring3SegmentLowInstance } from './Ring3SegmentMerged';
import { Ring4Instances, Ring4SegmentLowInstance } from './Ring4SegmentMerged';
import { Ring5Instances, Ring5SegmentLowInstance } from './Ring5SegmentMerged';
import { Ring6Instances, Ring6SegmentLowInstance } from './Ring6SegmentMerged';
import { Ring7Instances, Ring7SegmentLowInstance } from './Ring7SegmentMerged';
import { Ring8Instances, Ring8SegmentLowInstance } from './Ring8SegmentMerged';
import { toRadians } from '../../lib/helpers/math';

const RingsMobile = ({ numberOfLines }) => {
  return (
    <>
      <Instances>
        <Ring1SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring1SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring1SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Instances>
      <Ring2Instances>
        <Ring2SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring2SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring2SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring2Instances>
      <Ring3Instances>
        <Ring3SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring3SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring3SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring3Instances>
      <Ring4Instances visible={numberOfLines > 3}>
        <Ring4SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring4SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring4SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring4Instances>
      <Ring5Instances visible={numberOfLines > 4}>
        <Ring5SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring5SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring5SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring5Instances>
      <Ring6Instances visible={numberOfLines > 5}>
        <Ring6SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring6SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring6SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring6Instances>
      <Ring7Instances visible={numberOfLines > 6}>
        <Ring7SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring7SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring7SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring7Instances>
      <Ring8Instances visible={numberOfLines > 7}>
        <Ring8SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, -0]}
          rotation={[0, toRadians(45), 0]}
        />
        <Ring8SegmentLowInstance
          scale={0.002}
          position={[0, 0.03, 0]}
          rotation={[0, toRadians(-45), 0]}
        />
        <Ring8SegmentLowInstance
          scale={0.002}
          position={[-0, 0.03, 0]}
          rotation={[0, toRadians(-135), 0]}
        />
      </Ring8Instances>
    </>
  );
};

export default RingsMobile;
