import axios from "axios";
const baseUrl = "https://upskilling-egypt.com:3007";
export async function Register(data) {
      const response = await axios.post(`${baseUrl}/api/auth/register`, data);
  console.log(response);

  return response.data;
}
export async function Login(data) {
  const response = await axios.post(`${baseUrl}/api/auth/login`, data);
  console.log(response.data);

  return response.data;
}
export async function ForgetPassword(data) {
  const response = await axios.post(`${baseUrl}/api/auth/forgot-password`,data);
  console.log(response);
  return response.data;
}
export async function ResetPassword(data) {
    const response =await axios.post(`${baseUrl}/api/auth/reset-password`,data)
    console.log(response);
    return response.data
}