import React from "react";
import Searchbar from "../../molecules/Explore/Searchbar.tsx";
import ExploreTabs from "../../organisms/Explore/ExploreTabs.tsx";

const ExploreTemplate: React.FC = () => {
  return (
    <>
      <Searchbar />
      <ExploreTabs />
    </>
  );
};

export default ExploreTemplate;
