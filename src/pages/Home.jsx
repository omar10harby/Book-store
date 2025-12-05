import React from "react";
import NavBar from "../ui/NavBar";
import HeroSlider from "../features/home/HeroSlider";
import CategoriesSlider from "../features/home/CategoriesSlider";
import NewReleaseBooksSlider from "../features/home/NewReleaseBooksSlider";
import SaleSection from "../features/home/SaleSection";

function Home() {
  return (
    <>
      <HeroSlider/>
      <CategoriesSlider/>
      <NewReleaseBooksSlider/>
      <SaleSection/>
    </>
  );
}

export default Home;
