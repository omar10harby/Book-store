import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/booksLogo.png";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
function Login() {
  return (
    <Box
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Logo} alt="logo" style={{ marginBottom: "2rem" }} />
      <Box sx={{ width: "80%", mb: "2rem" }}>
        <Typography
          variant="subtitle1"
          sx={{ color: "#7b7b8a", fontWeight: "600" }}
        >
          Welcome back!
        </Typography>
        <Typography variant="h3">Login now</Typography>
      </Box>
      {/* email */}
      <TextField sx={{ width: "80%", mb: "2rem" }} label={"Email"} />
      {/* email */}
      <TextField sx={{ width: "80%", mb: "1rem" }} label={"Password"} />
      <Box mb={"1rem"} display={"flex"} alignItems={"center"} width={"80%"}>
        <FormControlLabel
          control={<Checkbox />}
          label={"Remember me"}
          sx={{ flexGrow: 1 }}
        />
        <Box
          component={"p"}
          color={"#6251DD"}
          sx={{ m: "0", cursor: "pointer" }}
        >
          Forget password
        </Box>
      </Box>
      <Button
        sx={{
          width: "80%",
          padding: "12px 0px",
          fontSize: "20px",
          mb: "1.5rem",
        }}
        variant="contained"
        type="sumbit"
      >
        Login
      </Button>
        <Button
        sx={{
          width: "80%",
          padding: "12px 0px",
          fontSize: "20px",
        }}
        variant="outlined"
        type="sumbit"
      >
        register
      </Button>
    </Box>
  );
}

export default Login;
