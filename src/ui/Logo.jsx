import { Box, Grid } from '@mui/material'
import NavbarLogo from "../assets/sample logo 1.png";

import React from 'react'

function Logo() {
  return (
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
  )
}

export default Logo
