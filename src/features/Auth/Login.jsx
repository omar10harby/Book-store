import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/booksLogo.png";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
// import { Login as LoginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./AuthSlice";
function Login() {
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoading,error } = useSelector((store) => store.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  async function onSubmit(data) {
    try {
      await dispatch(login(data)).unwrap();
      toast.success("login success");
      navigate("/");
      reset();

    } catch (err) {
      console.log(error);
      
    }
  }

  return (
    <Box
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit(onSubmit)}
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
      <TextField
        sx={{ width: "80%", mb: "2rem" }}
        label="Email"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* password */}
      <TextField
        sx={{ width: "80%", mb: "1rem" }}
        label="Password"
        type="password"
        {...register("password", { required: "Password is required" })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Box mb={"1rem"} display={"flex"} alignItems={"center"} width={"80%"}>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          sx={{ flexGrow: 1 }}
        />
        <Box
          component={"p"}
          color={"#6251DD"}
          sx={{ m: "0", cursor: "pointer" }}
          onClick={() => navigate("/forgetpassword")}
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
          backgroundColor: "#6251dd",
        }}
        variant="contained"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>

      <Button
        sx={{
          width: "80%",
          padding: "12px 0px",
          fontSize: "20px",
        }}
        variant="outlined"
        type="button" // تم تعديلها من sumbit
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </Box>
  );
}

export default Login;
