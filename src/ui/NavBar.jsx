import { Box, Container, Divider, Grid, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";
import NavbarLogo from "../assets/sample logo 1.png";
import React from "react";

function NavBar() {
  return (
    <Box sx={{ backgroundColor: "#eee" }}>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
          padding={1.25}
        >
          {/* Logo */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Box>
              <img
                src={NavbarLogo}
                alt="Logo"
                style={{
                  maxWidth: "45px",
                }}
              />
            </Box>
          </Grid>

          {/* Links */}
          <Grid
            size={{ xs: 0, sm: 6, md: 8 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              component={"ul"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 0,
                m: 0,
              }}
            >
              <Box component={"li"}>
                <NavLink>Home</NavLink>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />

              <Box component={"li"}>
                <NavLink>Books</NavLink>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />

              <Box component={"li"}>
                <NavLink>New Realeas</NavLink>
              </Box>
            </Box>
          </Grid>
          {/* icons */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Box
              component={"ul"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 0,
                m: 0,
              }}
            >
              <Box component={"li"}>
                <IconButton>
                  <PermIdentityOutlinedIcon />
                </IconButton>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />
              <Box component={"li"}>
                <IconButton>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />
              <Box component={"li"}>
                <IconButton>
                  <LoginOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NavBar;
