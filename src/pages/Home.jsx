import React from "react";
import NavBar from "../ui/NavBar";
import HeroSlider from "../features/home/HeroSlider";
import CategoriesSlider from "../features/home/CategoriesSlider";

function Home() {
  return (
    <>
      <HeroSlider/>
      <CategoriesSlider/>
    </>
  );
}

export default Home;
