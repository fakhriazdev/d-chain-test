import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";

export const useRejectPartnership = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (id) => {
            const productsResponse = await axiosInstance.get(`/api/partnerships/${id}/reject`);
            return productsResponse;
        },
        onSuccess,
    });
};