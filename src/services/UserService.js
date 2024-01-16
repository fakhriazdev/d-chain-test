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
  const removeUser = async (id) => {
    const { data } = await axiosInstance.delete(`/api/manage-users/${id}`);
    console.log(data);
    return data;
  };
  const removeUserBackoffice = async (id) => {
    const { data } = await axiosInstance.delete(
      `/api/backoffice/users/delete/${id}`
    );
    console.log(data);
    return data;
  };

  return {
    fetchAll,
    fetchAllBackoffice,
    removeUser,
    removeUserBackoffice,
  };
};

export default UserService;
