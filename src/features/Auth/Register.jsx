import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import Logo from "../../assets/booksLogo.png";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Register as RegisterApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();
  async function onSubmit(data) {
    try {
      await RegisterApi({ ...data, role: "Customer" });
      toast.success("Register success");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Register faild");
    }
  }
  return (
    <Box
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit(onSubmit)}
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
      <Grid width={"80%"} container rowSpacing={2} columnSpacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label={"First name"}
            sx={{ width: "100%" }}
            {...register("first_name", { required: "enter your first name" })}
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label={"last name"}
            sx={{ width: "100%" }}
            {...register("last_name", { required: "enter your last name" })}
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label={"Email"}
            sx={{ width: "100%" }}
            {...register("email", { required: "enter your email" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            type="password"
            label={"Password"}
            sx={{ width: "100%" }}
            {...register("password", { required: "enter your password" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>

        <Grid size={12}>
          <Button
            sx={{
              width: "100%",
              padding: "12px 0px",
              fontSize: "20px",
              backgroundColor: "#6251dd",
            }}
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "...Register" : "Register"}
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
            onClick={() => navigate("/login")}
          >
            login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
