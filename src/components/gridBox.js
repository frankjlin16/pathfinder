import React, { useState } from "react";

const GridBox = () => {
  const [gridMatrix, setGridMatrix] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
  ]);

  return (
    <div className="p-3 pt-7 bg-gray-800">
      <div className="grid gap-4 grid-cols-12 p-4 bg-white rounded-md">
        {gridMatrix.map((grid) => (
          <div
            key={grid.id}
            className="bg-purple-400 bg-opacity-50 rounded-md h-12"
          >
            <p className="text-center">{grid.id}</p>
          </div>
        ))}
        {/* TODO: Construct a single reactive grid component.
				The single reactive grid component need to hold "id" and "node type". 
				In addition, the component need to update its state on click.
         */}
      </div>
    </div>
  );
};

export default GridBox;
