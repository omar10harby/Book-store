import React from "react";
import useCategories from "./useCategories";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function CategoriesSlider() {
  const { categories, isPending, error } = useCategories();

  const categoriesImages = [
    "/src/assets/categories/Rectangle 11 (1).png",
    "/src/assets/categories/Rectangle 11 (2).png",
    "/src/assets/categories/Rectangle 11.png",
  ];

  if (isPending) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading categories</p>;

  return (
    <section className="py-10 px-10 md:px-24">
      <div className="heading mb-10 flex justify-between">
        <div className="flex flex-col">
          <p className="flex items-center gap-4 text-main-orange">
            <span className="w-10 h-0.5 bg-main-orange"></span>
            <span className="font-semibold">Categories</span>
          </p>
          <h2 className="text-secoundry-deepBlue text-2xl font-bold">
            Explore our Top Categories
          </h2>
        </div>
        <div className="hidden md:flex gap-2 mt-4">
          <button className="custom-prev-cate border border-gray-300  bg-white/40 hover:bg-main-orange text-main-orange hover:text-white p-3 rounded-full  transition-all duration-300">
            <IoChevronBack className="w-6 h-6"/>
          </button>
          <button className="custom-next-cates border border-gray-300  bg-white/40 hover:bg-main-orange text-main-orange hover:text-white p-3 rounded-full  transition-all duration-300">
            <IoChevronForward className="w-6 h-6"/>
          </button>
        </div>
      </div>

    <Swiper
  spaceBetween={20}
  modules={[Navigation]}
  loop={true}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = ".custom-prev-cate";
    swiper.params.navigation.nextEl = ".custom-next-cate";
  }}
  navigation={{
    prevEl: ".custom-prev-cate",
    nextEl: ".custom-next-cate",
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {categories.slice(0, 9).map((cate, index) => (
    <SwiperSlide key={index}>
      <div>
        <img
          src={categoriesImages[index % categoriesImages.length]}
          alt={cate.title}
          className="w-full rounded-lg object-cover"
        />
        <p className="text-center text-secoundry-deepBlue text-lg font-semibold mt-2">
          {cate.title}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
}

export default CategoriesSlider;
