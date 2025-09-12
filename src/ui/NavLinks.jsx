import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
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
              <Box component={"li"} px={1}>
                <NavLink style={{color:'black'}}>Home</NavLink>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />

              <Box component={"li"} px={1}>
                <NavLink style={{color:'black'}} >Books</NavLink>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, borderColor: "#ccc" }}
              />

              <Box component={"li"} px={1}>
                <NavLink style={{color:'black'}}>New Realeas</NavLink>
              </Box>
            </Box>
          </Grid>
  )
}

export default NavLinks
