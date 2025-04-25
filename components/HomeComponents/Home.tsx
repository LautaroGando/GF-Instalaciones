import React from "react";
import WeHighlight from "./WeHighlight/WeHighlight";
import Graph from "./Graph/Graph";
import Newsletter from "./Newsletter/Newsletter";
import CoverageArea from "./CoverageArea/CoverageArea";
import Contact from "./Contact/Contact";
import Companies from "./Companies/Companies";
import SuccessStories from "./SuccessStories/SuccessStories";

export const Home: React.FC = () => {
  return (
    <div>
      <Graph />
      <WeHighlight />
      <CoverageArea />
      <SuccessStories />
      <Companies />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Home;
