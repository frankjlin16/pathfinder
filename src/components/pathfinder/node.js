import React, { useState } from "react";

const Grid = (props) => {
  var { key, isWall, row, column} = props;
  var className = "bg-opacity-50 h-7 w-7";

  //Chanage grid class property based on grid type
  if (!isWall) {
    className += " bg-purple-400"
  } else {
    className += " bg-green-400"
  }

  return (
    <div id={key} onClick={() => props.onclick(row, column)} className={className}>
    </div>
  );
};

export default Grid;
