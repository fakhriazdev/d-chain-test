import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance.js";
export const useAddPartnership = ({onSuccess,onFailure})=>{
    return useMutation({
        mutationFn: async (body) => {
            const companyResponse = await axiosInstance.post("/api/partnerships",body)
            console.log(companyResponse)
            return companyResponse
        },
        onSuccess,
        onFailure,
    })
}