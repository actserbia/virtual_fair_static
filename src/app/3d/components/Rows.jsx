/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useContext, memo } from 'react';

import { useGLTF, Instances } from '@react-three/drei';
import { GridContext } from '../contexts/GridContext';
import { getPointOnACircle, toRadians } from '../lib/helpers/math';
import Cell from './Cell';
import { generateCurvedLinePoints } from '../lib/helpers/sceneGeneration';

const Rows = ({ handleOpenAccountInfo }) => {
  const { nodes } = useGLTF(`${process.env.NEXT_PUBLIC_ROOT}/models/booth_low.glb`);
  const {
    gridSizeY,
    radius,
    maxRows,
    gridPositions,
    getQuadrantPosition,
    noOfCellsBasedOnRow,
  } = useContext(GridContext);

  const boothColor = '#ababab';
  const quadrantOffset = 1.2;
  const quadrantStartingPositions = [];

  for (let index = 0; index < 6; index++) {
    quadrantStartingPositions.push(
      getPointOnACircle(toRadians(-45 * index - 22.5), quadrantOffset, 0)
    );
  }

  const getRowSequence = (y) => {
    const cellsLengthInOneQuadrant = noOfCellsBasedOnRow[y] || 3;
    const sequence = [];
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < cellsLengthInOneQuadrant; j++) {
        if (i % 2 === 0) {
          sequence.push(j);
        } else {
          sequence.push(
            cellsLengthInOneQuadrant - (j % cellsLengthInOneQuadrant) - 1
          );
        }
      }
    }
    return sequence;
  };

  const getSequence = (arr) => {
    const sequence = [];
    for (var i = 0; i < arr.length; i++) {
      sequence.push(getRowSequence(i));
    }
    return sequence;
  };

  const sequence = getSequence(noOfCellsBasedOnRow);
  const rowInnerLinesPaths = [];

  const generateBooths = () => {
    let boothData = [];
    let rowPositions = gridPositions;
    for (let i = 0; i < maxRows; i++) {
      let cellWidthInDegreesBasedOnRow = -toRadians(
        45 / noOfCellsBasedOnRow[i]
      );
      const currentRadius = radius + gridSizeY * i;
      rowInnerLinesPaths.push(
        generateCurvedLinePoints(50, currentRadius, i * -45, 0.5)
      );

      for (let j = 0; j < rowPositions[i]?.length; j++) {
        const quadrant = getQuadrantPosition([j, i]);
        const quadrantRowZeroMiddlePosition = getPointOnACircle(
          toRadians(-45 * quadrant - 22.5),
          currentRadius,
          0.1
        );
        const quadrantMovePosition = getPointOnACircle(
          toRadians(-45 * quadrant - 22.5),
          currentRadius + quadrantOffset,
          0.1
        );
        const quadrantDistanceToMove = [
          quadrantMovePosition[0] - quadrantRowZeroMiddlePosition[0],
          0,
          quadrantMovePosition[2] - quadrantRowZeroMiddlePosition[2],
        ];

        let cellEdge1 = getPointOnACircle(
          j * cellWidthInDegreesBasedOnRow,
          currentRadius + quadrantOffset,
          10
        );
        cellEdge1 = [
          cellEdge1[0] + quadrantDistanceToMove[0],
          cellEdge1[1],
          cellEdge1[2] + quadrantDistanceToMove[2],
        ];

        let cellEdge2 = getPointOnACircle(
          cellWidthInDegreesBasedOnRow + j * cellWidthInDegreesBasedOnRow,
          currentRadius,
          10
        );
        cellEdge2 = [
          cellEdge2[0] + quadrantDistanceToMove[0],
          cellEdge2[1],
          cellEdge2[2] + quadrantDistanceToMove[2],
        ];
        const quadrantStartingPosition = getPointOnACircle(
          toRadians(-45 * quadrant - 22.5),
          quadrantOffset,
          0
        );
        const childPosition = getPointOnACircle(
          cellWidthInDegreesBasedOnRow +
            j * cellWidthInDegreesBasedOnRow -
            cellWidthInDegreesBasedOnRow / 2,
          currentRadius + 1.9,
          0.115 + sequence[i][j] * 0.18 + 0.1
        );
        const cameraTargetPosition = getPointOnACircle(
          cellWidthInDegreesBasedOnRow +
            j * cellWidthInDegreesBasedOnRow -
            cellWidthInDegreesBasedOnRow / 8,
          currentRadius + 2,
          0.115
        );
        const childCameraPosition = getPointOnACircle(
          cellWidthInDegreesBasedOnRow +
            j * cellWidthInDegreesBasedOnRow -
            cellWidthInDegreesBasedOnRow / 4,
          currentRadius + 1.7,
          0.8
        );
        const childRotation = [
          0,
          cellWidthInDegreesBasedOnRow +
            j * cellWidthInDegreesBasedOnRow -
            cellWidthInDegreesBasedOnRow / 2,
          0,
        ];

        const childPositionPulledBack = [
          childPosition[0] + quadrantDistanceToMove[0],
          childPosition[1],
          childPosition[2] + quadrantDistanceToMove[2],
        ];
        const cameraTargetPositionPulledBack = [
          cameraTargetPosition[0] + quadrantDistanceToMove[0],
          cameraTargetPosition[1],
          cameraTargetPosition[2] + quadrantDistanceToMove[2],
        ];

        boothData.push({
          quadrant,
          cellEdge1,
          cellEdge2,
          quadrantStartingPosition,
          childPositionPulledBack,
          childCameraPosition,
          cameraTargetPositionPulledBack,
          childRotation,
          ...rowPositions[i][j],
        });
      }
    }

    return boothData;
  };

  const boothData = useMemo(() => generateBooths(), []);

  return (
    <>
      {/* Booths white */}
      <Instances
        castShadow
        receiveShadow
        range={408}
        geometry={nodes.BOOTH_LOW.geometry}
      >
        {boothData.map(
          (booth, index) =>
            booth.company_name && (
              <>
                <Cell
                  {...booth}
                  handleOpenAccountInfo={handleOpenAccountInfo}
                  key={`cell${index}`}
                />
              </>
            )
        )}

        {/* <DefaultMaterial /> */}
        <meshStandardMaterial
          roughness={1}
          metalness={0}
          opacity={1}
          color={boothColor}
        ></meshStandardMaterial>
      </Instances>
    </>
  );
};

export default memo(Rows);

useGLTF.preload(`${process.env.NEXT_PUBLIC_ROOT}/models/booth_low.glb`);
