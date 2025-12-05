import React from "react";
import NavBar from "../ui/NavBar";
import HeroSlider from "../features/home/HeroSlider";
import CategoriesSlider from "../features/home/CategoriesSlider";
import NewReleaseBooksSlider from "../features/home/NewReleaseBooksSlider";

function Home() {
  return (
    <>
      <HeroSlider/>
      <CategoriesSlider/>
      <NewReleaseBooksSlider/>
    </>
  );
}

export default Home;
