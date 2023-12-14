"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { getAngleFromLengthAndRadius } from '../lib/helpers/math';
import { generateCurvedLinePoints } from '../lib/helpers/sceneGeneration';
import { PREVIEW_STATES } from '../lib/consts/states';

export const GridContext = createContext();

function GridProvider({ children }) {
  const gridSizeX = 2.09;
  const gridSizeY = 4.48;
  const gridSnapAngle = 45;
  const radius = 8.43;
  const maxRows = 8;
  const debugGrid = false;
  const quadrantAngle = 45;

  const angle = -Math.abs(
    getAngleFromLengthAndRadius(gridSizeX, radius, quadrantAngle)
  );
  const radiusLength = 2 * Math.PI * radius;
  const maxCells = Math.floor(radiusLength / gridSizeX);
  const circlePoints = generateCurvedLinePoints(50, radius, 360, 0.31);
  const [gridPositions, setGridPositions] = useState([]);
  const [isSceneGenerated, setIsSceneGenerated] = useState(false);
  const [areQuadrantsGenerated, setQuadrantsGenerated] = useState(false);
  const [isSomethingHovered, setSomethingHovered] = useState(false);
  const [previewState, setPreviewState] = useState(PREVIEW_STATES.DOME);
  const [inboxId, setInboxId] = useState(null);
  const noOfCellsBasedOnRow = [3, 5, 6, 8, 9, 11, 15];

  const initBooths = (data) => {
    if (!data) return null;
    let positions = generatePossibleGridPositions();
    let newPositions = positions;

    for (let i = 0; i < data.length; i++) {
      let currentBoothRow = data[i].booths;
      if (!inboxId) {
        if (
          currentBoothRow[0]?.account_id ===
          process.env.NEXT_PUBLIC_NSZ_ACCOUNT_ID
        ) {
          // Check if the first one is the main booth and remove it
          setInboxId(currentBoothRow[0].inbox_id);
          currentBoothRow.splice(0, 1);
        } else {
          currentBoothRow = currentBoothRow.filter((item) => {
            if (item.account_id !== process.env.NEXT_PUBLIC_NSZ_ACCOUNT_ID) {
              setInboxId(item.inbox_id);
              return true;
            }
            return false;
          }); // if not remove it with filter
        }
      }
      assignPositionToItems(currentBoothRow, newPositions);
    }
    setGridPositions(positions);
  };

  useEffect(() => {
    if (gridPositions.length > 1 && areQuadrantsGenerated) {
      // If positions set
      setIsSceneGenerated(true);
    }
  }, [gridPositions, areQuadrantsGenerated]);

  const [clickedPosition, setClickedPosition] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);

  const setCameraClickedPosition = (position) => {
    setClickedPosition(position);
  };

  const generatePossibleGridPositions = () => {
    let gridPositions = [];
    for (let i = 0; i < maxRows; i++) {
      gridPositions[i] = [];
      const radiusCellAngle = getAngleFromLengthAndRadius(
        gridSizeX,
        radius + gridSizeY * i
      );
      const radiusCellAngleMapped = 45 / noOfCellsBasedOnRow[i];
      const radiusFullAngle = 270;
      let maxCells = Math.floor(radiusFullAngle / radiusCellAngleMapped);
      for (let j = 0; j < maxCells; j++) {
        gridPositions[i].push(null);
      }
    }
    return gridPositions;
  };

  const getNextFreeGridPosition = (gridPositions) => {
    for (let i = 0; i < gridPositions.length; i++) {
      for (let j = 0; j < gridPositions[i].length; j++) {
        if (gridPositions[i][j] === null) {
          return [j, i];
        }
      }
    }
  };

  const getQuadrantPosition = (position) => {
    const cellsPerQuadrant = getCellsPerQuadrant(position);
    return Math.floor(position[0] / cellsPerQuadrant);
  };

  const getCellsPerQuadrant = (position) => {
    return noOfCellsBasedOnRow[position[1]];
  };

  const checkIfInQuadrant = (quadrant, position) => {
    return getQuadrantPosition(position) === quadrant;
  };

  const quadrantStartingXPositionBasedOnRow = (quadrant, row) => {
    return quadrant * getCellsPerQuadrant([0, row]);
  };

  const assignPositionToItems = (
    items,
    gridPositions,
    sectorId,
    sectorColor
  ) => {
    const startingPosition = getNextFreeGridPosition(gridPositions);
    let lastAssignedPosition = [];
    let currentRow = startingPosition[1];
    let currentQuadrant = getQuadrantPosition(startingPosition);
    for (let i = 0; i <= items.length; i++) {
      if (i !== items.length) {
        for (let row = currentRow; row < maxRows; row++) {
          let itemAssigned = false;
          for (let x = 0; x < gridPositions[row].length; x++) {
            if (
              gridPositions[row][
                x + quadrantStartingXPositionBasedOnRow(currentQuadrant, row)
              ] === null
            ) {
              if (
                checkIfInQuadrant(currentQuadrant, [
                  x + quadrantStartingXPositionBasedOnRow(currentQuadrant, row),
                  row,
                ])
              ) {
                lastAssignedPosition = [x, row];
                gridPositions[row][
                  x + quadrantStartingXPositionBasedOnRow(currentQuadrant, row)
                ] = { ...items[i], sectorId, sectorColor };
                itemAssigned = true;
              }
              break;
            }
          }
          if (itemAssigned) {
            break;
          }
        }
      } else {
        // Check if there is more space until the end of row in qurrent quadrant
        let remainingEmptyCells =
          getCellsPerQuadrant(lastAssignedPosition) -
          lastAssignedPosition[0] -
          1;
        for (let x = 0; x < remainingEmptyCells; x++) {
          gridPositions[lastAssignedPosition[1]][
            lastAssignedPosition[0] +
              1 +
              x +
              quadrantStartingXPositionBasedOnRow(
                currentQuadrant,
                lastAssignedPosition[1]
              )
          ] = { sectorId, falseBuilding: true, sectorColor };
        }
      }
    }
    return gridPositions;
  };

  const closeBoothInfo = () => {
    setPreviewState(PREVIEW_STATES.DOME);
  };

  const props = {
    angle,
    gridSizeX,
    gridSizeY,
    gridSnapAngle,
    radius,
    maxRows,
    debugGrid,
    quadrantAngle,
    maxCells,
    circlePoints,
    gridPositions,
    generatePossibleGridPositions,
    getNextFreeGridPosition,
    getQuadrantPosition,
    getCellsPerQuadrant,
    checkIfInQuadrant,
    quadrantStartingXPositionBasedOnRow,
    assignPositionToItems,
    isSceneGenerated,
    setQuadrantsGenerated,
    isSomethingHovered,
    setSomethingHovered,
    setCameraClickedPosition,
    clickedPosition,
    previewState,
    setPreviewState,
    cameraPosition,
    setCameraPosition,
    initBooths,
    closeBoothInfo,
    noOfCellsBasedOnRow,
    inboxId,
  };

  return (
    <GridContext.Provider value={{ ...props }}>{children}</GridContext.Provider>
  );
}

export default GridProvider;
