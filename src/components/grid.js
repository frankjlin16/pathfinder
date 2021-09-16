import React, { useState } from "react";

const Grid = (props) => {
  var { grid } = props;

  return (
    <div key={grid.id} onClick={props.onclick} className="bg-purple-400 bg-opacity-50 h-12 w-12">
      <p className="text-center">{grid.id}</p>
      <p className="text-center">{grid.type}</p>

    </div>
  );
};

export default Grid;
