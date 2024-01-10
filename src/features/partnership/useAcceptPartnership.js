import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";

export const useAcceptPartnership = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (id) => {
            const PartnershipResponse = await axiosInstance.get(`/api/partnerships/${id}/accept`);
            return PartnershipResponse;
        },
        onSuccess,
    });
};