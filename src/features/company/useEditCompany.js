
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";

export const useEditCompany = ({ onSuccess,onError }) => {
    return useMutation({
        mutationFn: async (body) => {
            const companyResponse = await axiosInstance.put("/api/companies", body);

            return companyResponse;
        },
        onSuccess,
        onError,
    });
};