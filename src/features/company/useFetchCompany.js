import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance.js";

export const useFetchCompany = (id) => {

    const [company, setCompany] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    const fetchCompany = async () => {
        setIsLoading(true)
        try {
            const companyResponse  = await axiosInstance.get(`/api/companies/${id}`)
            setCompany(companyResponse.data.data)
            setIsLoading(false)
        }catch (err){
            setError({
                message: err.response?.data?.message || 'An error occurred',
                statusCode: err.response?.status || 500,
                data: err.response?.data?.data || null,
            });
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!id) {
            return;
        }
        fetchCompany()
    }, [id]);


    return{
        company,
        isLoading,
        error
    }
};