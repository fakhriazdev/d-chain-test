import axiosInstance from "../api/axiosInstance";

const UserService = () => {
  const fetchAll = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/manage-users`, {
      params: queryParams,
    });
    return data;
  };

  return {
    fetchAll
  }
};

export default UserService;
