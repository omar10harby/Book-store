import React from "react";
import AuthImage from "../assets/bookstorimg.jpg";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
function AuthLayOut() {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container height={"100%"} spacing={0}>
        <Grid sx={{ position:'relative',display: { xs: "none", md: "block" },backgroundImage:`url(${AuthImage})`, backgroundSize:'cover' }} size={{sm:0,md:6}}>
              <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.3)", 
        }}
      />
        </Grid>
        <Grid sx={{p:7,width:'100%'}} size={{ sm: 12, md: 6 }}>
            <Outlet/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AuthLayOut;
