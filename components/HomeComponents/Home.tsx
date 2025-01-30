import React from "react";
import WeHighlight from "./WeHighlight/WeHighlight";
import Graph from "./Graph/Graph";
import Newsletter from "./Newsletter/Newsletter";
import CoverageArea from "./CoverageArea/CoverageArea";

const Home = () => {
  return (
    <div>
      <Graph />
      <WeHighlight />
      <CoverageArea />
      <Newsletter />
    </div>
  );
};

export default Home;
