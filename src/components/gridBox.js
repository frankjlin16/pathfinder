import React, { useState } from "react";
import Grid from "./grid";

const GridBox = () => {
  const [gridMatrix, setGridMatrix] = useState(createGrid());

  return (
    <div className="px-5 py-7 bg-gray-800">
      <div
        id="grid"
        className="grid gap-2 grid-cols-12 p-4 bg-white rounded-md"
      >
        {gridMatrix.map((grid) => (
          <Grid grid={grid} />
        ))}
        {/* TODO: Construct a single reactive grid component.
				The single reactive grid component need to hold "id" and "node type". 
				In addition, the component need to update its state on click.
         */}
      </div>
    </div>
  );
};

// Creates a grid matrix with 48 individual grids
const createGrid = () => {
  var grids = [];
  for (let i = 1; i <= 48; i++) {
    grids.push({ id: i, type: null });
  }
  return grids;
};

export default GridBox;
