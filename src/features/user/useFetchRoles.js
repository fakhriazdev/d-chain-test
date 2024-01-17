import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import {useState} from "react";
export const useFetchRoles = () => {
    const [queryKey, setQueryKey] = useState(["fetch.roles"]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const RolesResponse = await axiosInstance.get(`/api/backoffice/users/roles`,{
            
            });
            return RolesResponse.data;
        },
        onSuccess: (data) => {
            console.log("Data successfully fetched:", data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        },
    });

    return { data, isLoading, isError, error, refetch, setQueryKey };
};