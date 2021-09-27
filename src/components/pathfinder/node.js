import React, { useState } from "react";

const Node = (props) => {
  var {isWall, row, column} = props;
  var className = "bg-opacity-50 h-7 w-7 m-0.5";

  //Chanage grid class property based on grid type
  if (!isWall) {
    className += " bg-purple-400"
  } else {
    className += " bg-green-400"
  }

  return (
    <div id={`node-${row}-${column}`} onClick={() => props.onclick(row, column)} className={className}>
    </div>
  );
};

export default Node;
