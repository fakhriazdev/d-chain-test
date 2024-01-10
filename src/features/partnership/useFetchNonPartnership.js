import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance.js";
import {decodeJWT} from "../../utils/decodeJWT.js";

const useFetchNonPartnership = (id) => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const decode = decodeJWT()
    const params = id ? id : decode?.company_id;
    const fetchPartnership = async () => {
        setIsLoading(true)
        try {
            const partnershipResponse = await axiosInstance.get(`/api/companies/${params}/non-partnerships`)
            setDatas(partnershipResponse.data.data)
            setIsLoading(false)
        }catch (err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchPartnership()
    }, []);
    return{
        datas,
        isLoading,
    }
};

export default useFetchNonPartnership;