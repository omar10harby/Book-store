import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Login as LoginApi } from "../../services/apiAuth"
import { act } from "react"
const login = createAsyncThunk('auth/login',
    async function (data) {
        const res=await LoginApi(data)
        return res.data
    }
)
const initialState={
    user:null,
    token:localStorage.getItem('token'),
    isLoading:false,
    error:''
}
const authSlice=createSlice({
    reducers:{
        logout(state){
            state.user=null
            state.token=null
            localStorage.removeItem('token')
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading=true
        }),
        builder.addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.user=action.payload.profile
            state.token=action.payload.accessToken
        }),
        builder.addCase(login.rejected,(state,action)=>{
            state.error=action.payload.message
        })
    }
})
export default authSlice.reducer