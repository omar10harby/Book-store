import axios from "axios";
import { getAuthToken } from "./apiAuth";

const baseUrl = import.meta.env.API_URL || "https://upskilling-egypt.com:3007";

export async function getCategories() {
  try {
    const token = getAuthToken();
    const res = await axios.get(`${baseUrl}/api/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
export async function getCategoryById(id) {
  try {
    const token = getAuthToken();
    const res = await axios.get(`${baseUrl}/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
