import React, { useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';

const context = createContext();
export function Ring3Instances({ children, ...props }) {
  const { nodes } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/ring3_segment_low.glb`);
  const instances = useMemo(
    () => ({
      RINGMODLOW: nodes.RING_3_MOD_LOW_1,
      RINGMODLOW1: nodes.RING_3_MOD_LOW_2,
      RINGMODLOW2: nodes.RING_3_MOD_LOW_3,
      RINGMODLOW3: nodes.RING_3_MOD_LOW_4,
      RINGMODLOW4: nodes.RING_3_MOD_LOW_5,
      RINGMODLOW5: nodes.RING_3_MOD_LOW_6,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances}>{children}</context.Provider>
      )}
    </Merged>
  );
}

export function Ring3SegmentLowInstance(props) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group position={[-318.199, 0, 0.001]}>
        <instances.RINGMODLOW />
        <instances.RINGMODLOW1 />
        <instances.RINGMODLOW2 />
        <instances.RINGMODLOW3 />
        <instances.RINGMODLOW4 />
        <instances.RINGMODLOW5 />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_ROOT}/models/ring3_segment_low.glb`);
