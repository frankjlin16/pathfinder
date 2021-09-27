import React, { useState } from "react";
import Grid from "./node";

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

// Creates a grid matrix with 48 individual grids
const createGrid = () => {
  var grids = [];
  for (let i = 0; i < 48; i++) {
    grids.push({ id: i, type: false });
  }
  return grids;
};

export default GridBox;
