import {useMutation} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
export const useEditUser = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const userResponse = await axiosInstance.put(
                `/api/backoffice/users/edit`,
                body
            );

            return userResponse;
        },
        onSuccess,
    });
};