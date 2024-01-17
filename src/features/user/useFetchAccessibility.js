import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import { useState } from "react";

export const useFetchAccessibility = (mono) => {
    const [queryKey, setQueryKey] = useState(["fetch.accessibility"]);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            let monoArray = mono;

            // Check if mono is a string, and convert it to an array
            if (typeof mono === "string") {
                if(monoArray === ""){
                    return
                }else {
                monoArray = [mono];
                }
            }

            const accessibilityResponse = await axiosInstance.post(
                "/api/backoffice/users/view/accessibility",
                {
                    mono: monoArray || [],
                }
            );
            return accessibilityResponse.data;
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
