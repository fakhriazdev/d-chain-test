import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import {useState} from "react";
export const useFetchPaymentOngoing = () => {
    const [queryKey, setQueryKey] = useState(["fetch.financing"]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const paymentResponse = await axiosInstance.get(`/api/payments/ongoing`,{
                groupBy:"payable",
                type:"INVOICING",
            });
            return paymentResponse.data.data;
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