import React, { useState } from "react";

const Grid = (props) => {
  var { grid } = props;
  var className = "bg-opacity-50 h-7 w-7";

  //Chanage grid class property based on grid type
  if (!grid.type) {
    className += " bg-purple-400"
  } else {
    className += " bg-green-400"
  }

  return (
    <div id={grid.id} onClick={() => props.onclick(grid.id)} className={className}>
    </div>
  );
};

export default Grid;
