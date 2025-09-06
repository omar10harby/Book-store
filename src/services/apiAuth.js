import axios from "axios"
const baseUrl='https://upskilling-egypt.com:3007'
async function Login(data) {
        const response=await axios.post(`${baseUrl}/api/auth/login`,data)
}