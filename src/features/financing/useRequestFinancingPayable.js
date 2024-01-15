import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance.js";
export const useRequestFinancingPayable = ({onSuccess,onFailure})=>{
    return useMutation({
        mutationFn: async (body) => {
            const requestResponse = await axiosInstance.post("/api/financing/payable",body)
            console.log(requestResponse)
            return requestResponse
        },
        onSuccess,
        onFailure,
    })
}