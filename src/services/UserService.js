import axiosInstance from "../api/axiosInstance";

const UserService = () => {
  const fetchAll = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/manage-users`, {
      params: queryParams,
    });
    return data;
  };
  const fetchAllBackoffice = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/backoffice/users`, {
      params: queryParams,
    });
    console.log(data);
    return data;
  };

  return {
    fetchAll,
    fetchAllBackoffice,
  };
};

export default UserService;
