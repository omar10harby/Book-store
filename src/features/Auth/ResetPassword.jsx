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
import { useNavigate } from "react-router-dom";
import { ResetPassword as ResetPasswordApi } from "../../services/apiAuth";
function ResetPassword() {
    const navigate=useNavigate()
  const [isLoading,setIsLoading]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
async  function onSubmit(data) {
    try {
        setIsLoading(true)
        await ResetPasswordApi(data)
        navigate('/login')
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
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
       <TextField
        sx={{ width: "80%", mb: "2rem" }}
        label="otp"
        {...register("otp", { required: "enter your otp" })}
        error={!!errors.otp}
        helperText={errors.otp?.message}
      />
      <TextField
        sx={{ width: "80%", mb: "2rem" }}
        label="Email"
        {...register("email", { required: "enter your email" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
     
       <TextField
        sx={{ width: "80%", mb: "2rem" }}
        label="Password"
        {...register("password", { required: "enter your password" })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      
      <Button
        sx={{
          width: "80%",
          padding: "12px 0px",
          fontSize: "20px",
          mb: "1.5rem",
          backgroundColor:'#6251dd',
          
        }}
        
        variant="contained"
        type="submit"
      >
        Reset
      </Button>
    </Box>
  );
}

export default ResetPassword
