import React from "react";
import WeHighlight from "./WeHighlight/WeHighlight";
import Graph from "./Graph/Graph";
import Newsletter from "./Newsletter/Newsletter";
import CoverageArea from "./CoverageArea/CoverageArea";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Graph />
      <WeHighlight />
      <CoverageArea />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Home;
