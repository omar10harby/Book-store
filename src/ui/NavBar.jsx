import { Box, Container, Divider, Drawer, Grid, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import IconsDrawer from "./SideDrawer";
import SideDrawer from "./SideDrawer";

function NavBar() {
  const [open,setOpen]=useState(false)
  function toggleOpen(value){
    setOpen(value)
  }
  return (
    <Box >
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
          padding={1.3}
        >
          {/* Logo */}
          <Logo/>
          {/* Links */}
          <NavLinks/>
          {/* icons */}
          <NavIcons/>
          <Grid  sx={{display:{md:'none'}}}>
            <IconButton onClick={()=>toggleOpen(true)}>
              <MenuIcon/>
            </IconButton>
          </Grid>
          <SideDrawer open={open} onClose={toggleOpen}/>
        </Grid>
      </Container>
    </Box>
  );
}

export default NavBar;
