import React, { useState } from "react";
import Hero from "./hero";
import GridBox from "./pathfinder/gridBox"

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <GridBox />
    </React.Fragment>
  );
};

export default Home;
