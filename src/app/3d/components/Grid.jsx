import PropTypes from 'prop-types';

import { useContext } from 'react';
import { Line } from '@react-three/drei';
import { getPointOnACircle, toRadians } from '../lib/helpers/math';
import Rows from './Rows';

import { GridContext } from '../contexts/GridContext';
import Debug from './Debug';

const Grid = ({ handleOpenAccountInfo }) => {
  const { radius, debugGrid, circlePoints } = useContext(GridContext);

  return (
    <>
      <Rows handleOpenAccountInfo={handleOpenAccountInfo} />
      {debugGrid && (
        <>
          <Line
            color="red"
            points={[
              [0, 0.01, 0],
              [0, 0.01, 40],
            ]}
            lineWidth={2}
          />
          <Debug />
          <Line color="orange" points={circlePoints} />
          <Line
            color="green"
            points={[
              [0, 0.01, 0],
              getPointOnACircle(-toRadians(45), radius + 25, 0.01),
            ]}
            lineWidth={2}
          />
        </>
      )}
    </>
  );
};

Grid.defaultProps = {
  gridSizeX: 5,
  gridSizeY: 5,
  radius: 8,
  snapAngle: 45,
};

Grid.propTypes = {
  gridSizeX: PropTypes.number,
  gridSizeY: PropTypes.number,
  radius: PropTypes.number,
  snapAngle: PropTypes.number,
};

export default Grid;
