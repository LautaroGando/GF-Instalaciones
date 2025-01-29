import React from "react";
import WeHighlight from "./WeHighlight/WeHighlight";
import Graph from "./Graph/Graph";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Graph />
      <WeHighlight />
      <Newsletter />
    </div>
  );
};

export default Home;
