import React, { useState } from "react";
import Node from "./node";

const rows = 15;

const GridBox = () => {
  const [grid, setGrid] = useState(createGrid());

  // Handle click events on a single grid element
  // Updates grid type
  const handleClick = (row, column) => {
    const newGrid = [...grid];
    newGrid[row][column].isWall = !grid[row][column].isWall;
    setGrid(newGrid);
  };

  return (
    <div className="px-5 py-7 bg-gray-800">
      <div className="flex flex-col p-4 bg-white rounded-md">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {row.map((node, nodeIndex) => (
              <Node
                key={nodeIndex}
                row={node.row}
                column={node.column}
                isStart={node.isStart}
                isFinish={node.isFinish}
                isWall={node.isWall}
                onclick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Creates a grid matrix with 15 rows and 20 cols
const createGrid = () => {
  var grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
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
  };
};

export default GridBox;
