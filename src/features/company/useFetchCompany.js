import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance.js";

export const useFetchCompany = (id) => {
    const [company, setCompany] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchCompany = async () => {
        setIsLoading(true)
        try {
            const companyResponse  = await axiosInstance.get(`/api/companies/${id}`)
            setCompany(companyResponse.data.data)
            setIsLoading(false)
        }catch (err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchCompany()
    }, []);


    return{
        company,
        isLoading,
    }
};