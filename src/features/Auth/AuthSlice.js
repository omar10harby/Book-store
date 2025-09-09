import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Login as LoginApi,
  Register as RegisterApi,
   ForgetPassword as ForgetPasswordApi, 
    ResetPassword as ResetPasswordApi 
} from "../../services/apiAuth";
import { act } from "react";
export const login = createAsyncThunk(
  "auth/login",
  async function (data, { rejectWithValue }) {
    try {
      const res = await LoginApi(data);
      localStorage.setItem("token", res?.data?.accessToken);
      localStorage.setItem("userData", JSON.stringify(res?.data?.profile));
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.message || "login faild");
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async function (data, { rejectWithValue }) {
    try {
      const res = await RegisterApi({ ...data, role: "Customer" });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ForgetPasswordApi(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send reset code"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ResetPasswordApi(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to reset password"
      );
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.profile;
        state.token = action.payload.accessToken;
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
      }),
      builder.addCase(register.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
        builder.addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(forgetPassword.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
        builder.addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
