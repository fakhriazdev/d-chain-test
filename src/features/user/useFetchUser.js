import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import { useMemo } from "react";

export const useFetchUser = (id) => {
  // If id is null, return default values
  if (id === undefined) {
    return { data: null, isLoading: false, isError: false, error: null, refetch: () => {} };
  }

  const queryKey = useMemo(() => ["fetch.user", id], [id]);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const userResponse = await axiosInstance.get(`/api/backoffice/users/detail/${id}`);
      return userResponse.data;
    },
    onSuccess: (data) => {
      console.log("Data successfully fetched:", data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  return { data, isLoading, isError, error, refetch };
};
