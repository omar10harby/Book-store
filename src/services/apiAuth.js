import axios from "axios";
import Cookies from "js-cookie";

baseUrl = process.env.API_URL;

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

function getAuthToken() {
  return Cookies.get("auth_token");
}

export async function Register(data) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/register`, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function Login(data) {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/login`, data);
    saveAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function logout() {
  const res = await axios.get(`${baseUrl}/api/auth/logout`);
  removeAuthToken();
}
