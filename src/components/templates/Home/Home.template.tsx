import React from "react";
import HomeHeader from "../../molecules/Home/HomeHeader.tsx";
import HomeMain from "../../molecules/Home/HomeMain.tsx";
import HomeFooter from "../../molecules/Home/HomeFooter.tsx";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </>
  );
};

export default HomeTemplate;
