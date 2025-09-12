import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";
import NavIcons from "./NavIcons";
function SideDrawer({open,onClose}) {
  
  const drawer = (
    <Box sx={{ padding: "20px 0px" }} width={"250px"} height={'100%'} display={"flex"} flexDirection={"column"} justifyContent={'space-between'}>
      <Box >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>onClose(false)} sx={{ justifyContent: "center",padding:'15px 0px'  }}>
              <NavLink style={{color:'black'}}>Home</NavLink>
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderColor: "#979494" }} />
          <ListItem disablePadding>
            <ListItemButton onClick={()=>onClose(false)} sx={{ justifyContent: "center",padding:'15px 0px'  }}>
              <NavLink style={{color:'black'}}>Home</NavLink>
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderColor: "#979494" }} />
          <ListItem disablePadding>
            <ListItemButton onClick={()=>onClose(false)} sx={{ justifyContent: "center",padding:'15px 0px' }}>
              <NavLink style={{color:'black'}}>Home</NavLink>
            </ListItemButton>
          </ListItem>
        </List>
         
      </Box>
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
    </Box>
  );
  return <Drawer anchor="right" open={open} onClick={()=>onClose(false)}>{drawer}</Drawer>;
}

export default SideDrawer;
