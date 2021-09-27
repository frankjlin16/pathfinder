import React, { useState } from "react";
import Grid from "./node";

const rows = 15;

const GridBox = () => {
  const [gridMatrix, setGridMatrix] = useState(createGrid());

  // Handle click events on a single grid element
  // Updates grid type
  const handleClick = (id) => {
    const grids = [...gridMatrix];
    grids[id].type = !gridMatrix[id].type;
    setGridMatrix(grids);
  };

  return (
    <div className="px-5 py-7 bg-gray-800">
      <div
        id="grid"
        className="grid gap-1 auto-cols-max p-4 bg-white rounded-md"
      >
        {gridMatrix.map((grid) => (
          <Grid key={grid.id} grid={grid} onclick={handleClick} />
        ))}
      </div>
    </div>
  );
};

// Creates a grid matrix with 15 rows and 20 cols
const createGrid = () => {
  var grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow= [];
    for (let column = 0; column < 20; column++) {
      currentRow.push(createNode(row, column));
    }
    grid.push(currentRow);
  }
  return grid;
};

// Create individual nodes
const createNode = (row, column) => {
  return {
    row, 
    column, 
    isStart: null,
    isFinish: null,
    isWall: false,
    isVisited: false,
    distance: Infinity,
    previousNode: null,
  }
}

export default GridBox;
