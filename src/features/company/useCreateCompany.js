import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance.js";
export const useCreateCompany = ({onSuccess})=>{
    return useMutation({
        mutationFn: async (formData) => {
            const companyResponse = await axiosInstance.post("/api/companies",formData)
            console.log(companyResponse)
            return companyResponse
        },
        onSuccess
    })
}