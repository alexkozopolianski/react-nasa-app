import React from "react";

import Search from "./Search";
import AstronomyContainer from "./Container";

const Nasa = () => {
  return (
    <div className="nasa">
      <Search />
      <AstronomyContainer />
    </div>
  );
};

export default Nasa;
