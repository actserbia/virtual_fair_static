import { getPointOnACircle } from './math';

export const generateCubes = (length, radius) => {
  let angles = [];
  let cubes = [];
  let linePoints = [];

  angles = generateAngles(length);

  for (let i = 0; i < length; i++) {
    const point = getPointOnACircle(angles[i], radius);

    cubes[i] = {
      position: point,
      rotation: [0, (((i * 360) / length) * Math.PI) / 180, 0],
    };
    linePoints[i] = point;
  }
  return cubes;
};

export const getRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

export const generateCurvedLinePoints = (
  segments,
  radius,
  angle = 30,
  y = 0.01,
  percentage = 100
) => {
  const angles = generateAngles(segments, percentage / 100);
  const linePoints = [];
  for (let i = 0; i < segments; i++) {
    const point = getPointOnACircle(angles[i], radius, y);
    linePoints[i] = point;
  }
  if (angle === 360) {
    linePoints.push(getPointOnACircle(angles[0], radius, y));
  }
  return linePoints;
};

export const generateAngles = (length, percentage = 1, offset = -45) => {
  let angles = [];
  for (let i = 0; i < length; i++) {
    angles.push(
      (offset * Math.PI) / 180 +
        (((i * 360 * percentage) / length) * Math.PI) / 180
    );
  }
  return angles;
};

export const generatePossibleGridPositions = (
  maxRows,
  radius,
  gridSizeX,
  gridSizeY
) => {
  let gridPositions = [];
  for (let i = 0; i < maxRows; i++) {
    gridPositions[i] = [];
    const radiusLength = 2 * Math.PI * (radius + gridSizeY * i);
    let maxCells = Math.floor(radiusLength / gridSizeX);
    for (let j = 0; j < maxCells; j++) {
      gridPositions[i].push(null);
    }
  }
  return gridPositions;
};

export const getNextFreeGridPosition = (gridPositions) => {
  for (let i = 0; i < gridPositions.length; i++) {
    for (let j = 0; j < gridPositions[i].length; j++) {
      if (gridPositions[i][j] === null) {
        return [j, i];
      }
    }
  }
};

export const getQuadrantPosition = (
  position,
  radius,
  gridSizeX,
  gridSizeY,
  quadrantAngle
) => {
  const cellsPerQuadrant = getCellsPerQuadrant(
    radius,
    gridSizeX,
    gridSizeY,
    position[1],
    quadrantAngle
  );
  return Math.floor(position[0] / cellsPerQuadrant);
};

export const getCellsPerQuadrant = (
  radius,
  gridSizeX,
  gridSizeY,
  positionY,
  quadrantAngle = 45
) => {
  const radiusLength =
    (2 / (360 / quadrantAngle)) * Math.PI * (radius + gridSizeY * positionY);
  return Math.floor(radiusLength / gridSizeX);
};

export const checkIfInQuadrant = (
  quadrant,
  position,
  radius,
  gridSizeX,
  gridSizeY,
  quadrantAngle
) => {
  return (
    getQuadrantPosition(
      position,
      radius,
      gridSizeX,
      gridSizeY,
      quadrantAngle
    ) === quadrant
  );
};

export const assignPositionToItems = (
  items,
  gridPositions,
  radius,
  gridSizeX,
  gridSizeY,
  quadrantAngle,
  maxRows
) => {
  const startingPosition = getNextFreeGridPosition(gridPositions);
  let currentRow = startingPosition[1];
  let currentQuadrant = getQuadrantPosition(
    startingPosition,
    radius,
    gridSizeX,
    gridSizeY,
    quadrantAngle
  );
  for (let i = 0; i < items.length; i++) {
    for (let row = currentRow; i < maxRows; row++) {
      let itemAssigned = false;
      for (let x = 0; x < gridPositions[row].length; x++) {
        if (gridPositions[row][x + startingPosition[0]] === null) {
          if (
            checkIfInQuadrant(
              currentQuadrant,
              [x + startingPosition[0], startingPosition[1] + row],
              radius,
              gridSizeX,
              gridSizeY,
              quadrantAngle
            )
          ) {
            gridPositions[row][x + startingPosition[0]] = {
              ...items[i],
              position: [startingPosition[0], row],
            };
            itemAssigned = true;
          }
          break;
        }
      }
      if (itemAssigned) {
        break;
      }
    }
  }
  return gridPositions;
};
