import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance.js";

const useFetchNonPartnership = (id) => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const fetchPartnership = async () => {
        setIsLoading(true)
        try {
            const partnershipResponse = await axiosInstance.get(`/api/companies/${id}/non-partnerships`)
            setDatas(partnershipResponse.data.data)
            setIsLoading(false)
        }catch (err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchPartnership()
    }, []);

    console.log(datas)
    return{
        datas,
        isLoading,
    }
};

export default useFetchNonPartnership;