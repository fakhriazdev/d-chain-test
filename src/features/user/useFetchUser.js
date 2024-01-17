import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";
import { useMemo } from "react";

export const useFetchUser = (id) => {

  const queryKey = useMemo(() => ["fetch.user", id], [id]);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const UserResponse = await axiosInstance.get(`/api/backoffice/users/detail/${id}`);
      return UserResponse.data;
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
