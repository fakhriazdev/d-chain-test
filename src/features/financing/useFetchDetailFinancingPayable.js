import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import {useState} from "react";
export const useFetchDetailFinancingPayable = (id) => {
    const [queryKey, setQueryKey] = useState(["fetch.financing"]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const financingDetailResponse = await axiosInstance.get(`/api/financing/payable/${id}`);
            return financingDetailResponse.data;
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