import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import Logo from "../../assets/booksLogo.png";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

function Register() {
  return (
      <Box
          component={"form"}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <img src={Logo} alt="logo" style={{ marginBottom: "2rem" }} />
          <Box sx={{ width: "80%", mb: "1.5rem" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#7b7b8a", fontWeight: "600" }}
            >
              Create new account
            </Typography>
            <Typography variant="h3">Register</Typography>
          </Box>
          <Grid width={'80%'} container rowSpacing={2} columnSpacing={3}>
              <Grid size={{xs:12,md:6}}>
                  <TextField label={'First name'} sx={{width:'100%'}}/>
              </Grid>
              <Grid size={{xs:12,md:6}} >
                  <TextField label={'last name'} sx={{width:'100%'}}/>
              </Grid>
               <Grid size={12} >
                  <TextField label={'Email'} sx={{width:'100%'}}/>
              </Grid>
                <Grid size={12} >
                  <TextField label={'Password'} sx={{width:'100%'}}/>
              </Grid>
              <Grid size={12}>
                <TextField label={'Password confirm'} sx={{width:'100%'}} />
              </Grid>
              <Grid size={12}>
                  <Button
                        sx={{
                          width: "100%",
                          padding: "12px 0px",
                          fontSize: "20px",
                        }}
                        variant="contained"
                        type="sumbit"
                      >
                        register
                      </Button>
              </Grid>
                   <Grid size={12}>
                  <Button
                        sx={{
                          width: "100%",
                          padding: "10px 0px",
                          fontSize: "20px",
                        }}
                        variant="outlined"
                        type="sumbit"
                      >
                        login
                      </Button>
              </Grid>
          </Grid>
        </Box>
  )
}

export default Register
