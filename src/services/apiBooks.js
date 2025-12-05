import axios from "axios";
import { getAuthToken } from "./apiAuth";

const baseUrl = import.meta.env.API_URL || "https://upskilling-egypt.com:3007";

// جلب الكتب مع pagination
export async function getBooks({ page = 1, limit = 10, search = "" } = {}) {
  try {
    const token = getAuthToken();
    
    const params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", limit);
    if (search) params.append("search", search);
    
    const res = await axios.get(`${baseUrl}/api/book?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

// جلب كتاب واحد بالـ ID
export async function getBookById(id) {
  try {
    const token = getAuthToken();
    const res = await axios.get(`${baseUrl}/api/book/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}