import React from "react";
import ExploreSearchbar from "../../molecules/Explore/ExploreSearchbar.tsx";
import ExploreTabs from "../../organisms/Explore/ExploreTabs.tsx";

const ExploreTemplate: React.FC = () => {
  return (
    <>
      <ExploreSearchbar />
      <ExploreTabs />
    </>
  );
};

export default ExploreTemplate;
