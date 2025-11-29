import {  useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Login } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useLogin() {
    const queryClient= useQueryClient()
    const navigate=useNavigate()
    const {mutate:login,isPending:isLogin,error}=useMutation({
        mutationFn:Login,
        onSuccess:(data)=>{
            toast.success("login successfully")
            queryClient.setQueryData(['user'],data.profile)
            navigate("/app")
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
    return {login,isLogin,error}
}

export default useLogin
