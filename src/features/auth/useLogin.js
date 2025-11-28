import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { Login } from '../../services/apiAuth'
import toast from 'react-hot-toast'

function useLogin() {
    const {mutate:login,isPending:isLogin,error}=useMutation({
        mutationFn:Login,
        onSuccess:()=>{
            toast.success("login successfully")
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
    return {login,isLogin,error}
}

export default useLogin
