import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import {useState} from "react";
export const useFetchFinancing = (accountType,status,page = 1, size = 10) => {
    const [queryKey, setQueryKey] = useState(["fetch.financing", { accountType , status , page, size}]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const financingResponse = await axiosInstance.get(`/api/financing/${accountType}`,{
                status,
                page,
                size
            });
            return financingResponse.data;
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