import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Register as RegisterApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useRegister() {
    const navigate=useNavigate();
    const {mutate:Register,isPending:isRegistering,error}=useMutation({
        mutationFn:RegisterApi,
        onSuccess:()=>{
            toast.success("Registerition successeded")
            navigate('/');
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })

    return {Register,isRegistering,error}
}

export default useRegister
