import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Box, Grid } from "@mui/material";

function HeroSlider() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Swiper
        className="custom-swiper"
        // modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        height={"100%"}
        navigation
    //   pagination={{ clickable: true }}
      >
        <SwiperSlide>
                <Box display={'flex'} alignItems={'center'} height={'300px'} sx={{background:'linear-gradient(to right,#FFE5E5 11%,#F5FFFE 69%,#FFFFFF 100%)'}}>
                    <Grid container ></Grid>
                </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
