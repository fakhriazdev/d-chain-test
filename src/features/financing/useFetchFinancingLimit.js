import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import {useState} from "react";
export const useFetchFinancingLimit = () => {
    const [queryKey, setQueryKey] = useState(["fetch.financing.limit"]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const limitResponse = await axiosInstance.get(`/api/financing/limit`);
            return limitResponse.data.data;
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