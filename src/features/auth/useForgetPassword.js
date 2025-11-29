import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { ForgetPassword } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useForgetPassword() {
    const navigate=useNavigate()
    const {mutate:forgetPassword,isPending:isLoading,error}=useMutation({
      mutationFn:ForgetPassword,
      onSuccess:()=>{
        toast.success("Otp successfully sended")
        navigate("/resetpassword")
      },
      onError:(err)=>{
          toast.error(err.message)
      }
    })
    return {forgetPassword,isLoading,error}
}

export default useForgetPassword
