import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/booksLogo.png";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import {ForgetPassword as ForgetPasswordApi} from '../../services/apiAuth'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "./AuthSlice";
function ForgetPassword() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {isLoading,error}=useSelector((store)=>store.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
async  function onSubmit(data) {
    try {
      await dispatch(forgetPassword(data)).unwrap()
      navigate('/resetpassword')
      reset()
    } catch (err) {
      console.log(error);
    }
}
  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <img src={Logo} alt="logo" style={{ marginBottom: "2rem" }} />

      <Box sx={{ width: "80%", mb: "2rem" }}>
        <Typography variant="h4">Forget password</Typography>
      </Box>

      {/* email */}
      <TextField
        sx={{ width: "80%", mb: "2rem" }}
        label="Email"
        {...register("email", { required: "enter your email" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* password */}

      <Button
        sx={{
          width: "80%",
          padding: "12px 0px",
          fontSize: "20px",
          mb: "1.5rem",
          backgroundColor:'#6251dd'
        }}
        variant="contained"
        type="submit"
        disabled={isLoading}
      >
        Send
      </Button>
    </Box>
  );
}

export default ForgetPassword
