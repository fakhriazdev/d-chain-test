import {useMutation} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
export const useCreateUser = ({onSuccess})=>{
    return useMutation({
        mutationFn: async (formData) => {
            const userResponse = await axiosInstance.post("/api/backoffice/users",formData)
            console.log(userResponse)
            return userResponse
        },
        onSuccess
    })
}