import { Box, Divider, Grid, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import React from 'react'

function NavIcons() {
  return (
            
 <Grid size={{  md: 2 }} sx={{ display: { xs: "none", md: "block" } }} >
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
  )
}

export default NavIcons
