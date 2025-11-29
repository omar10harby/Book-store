import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = import.meta.env.API_URL || "https://upskilling-egypt.com:3007";

function saveAuthToken(token) {
  // حفظ التوكن لمدة 7 أيام
  Cookies.set("auth_token", token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
}

function removeAuthToken() {
  Cookies.remove("auth_token");
}

export function getAuthToken() {
  return Cookies.get("auth_token");
}

export async function Register(data) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/register`, {
      ...data,
      role: "Customer",
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function Login(data) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/login`, data);
    saveAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function ForgetPassword(email) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/forgot-password`, {
      email,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function ResetPassword(data) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/reset-password`, data);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
export async function logout() {
  try {
    const token = getAuthToken();
    const res = await axios.get(`${baseUrl}/api/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    removeAuthToken();
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
