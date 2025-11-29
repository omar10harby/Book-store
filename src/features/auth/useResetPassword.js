import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { ResetPassword } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useResetPassword() {
    const navigate=useNavigate()
    const {mutate:resetpassword,isPending:isResetting,error}=useMutation({
        mutationFn:ResetPassword,
        onSuccess:()=>{
            toast.success("Password reset successfully! Please login")
            navigate('/')
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
    return {resetpassword,isResetting,error}
}

export default useResetPassword
