import {useEffect, useState} from "react";
import axiosInstance from "../../api/axiosInstance.js";

export const useFetchLocations = ()=>{
const [province, setProvince] = useState([])
const [isLoading, setIsLoading] = useState(false)
    const [cityId, setCityId] = useState(11)
const [city, setCity] =useState([])
const fetchProvices = async () =>{
    setIsLoading(true)
    try{
        const provinceResponse = await axiosInstance.get("/api/locations/provinces")
        setProvince(provinceResponse.data)
    }catch (e) {
        console.log(e)
    }
}

const fetchCites = async () =>{
    setIsLoading(true)
    try{
        const cityResponse = await axiosInstance.get(`/api/locations/city/${cityId}`)
        setCity(cityResponse.data)
        setIsLoading(false)
    }catch (e) {
        console.log(e)
    }
}

const handleChooseProvince = (id)=>{
    setCityId(id)
}

    useEffect(() => {
        fetchProvices()
    }, []);

    useEffect(() => {
        fetchCites()
    }, [cityId]);

return {
    province,
    handleChooseProvince,
    city,
}
}

