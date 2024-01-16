import axiosInstance from "../api/axiosInstance";

const UserService = () => {
  const fetchInvoices = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/invoice`, {
      params: queryParams,
    });
    return data;
  };
  
  const fetchAll = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/manage-users`, {
      params: queryParams,
    });
    return data;
  };

  const saveUser = async (payload) => {
    try {
      const { data } = await axiosInstance.post("/api/manage-users", payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (payload) => {
    const {data} = await axiosInstance.put('/api/manage-users', payload)
    return data;
  }

  const fetchUserById = async (id) => {
    const { data } = await axiosInstance.get(`/api/manage-users/${id}`);
    return data;
  };

  const fetchPartnership = async (id, queryParams) => {
    const { data } = await axiosInstance.get(`/api/partnerships/${id}`, {
      params: queryParams,
    });
    return data;
  };

  const getById = async (id) => {
    const {data} = await axiosInstance.get(`/api/invoice/${id}`);
    return data;
  }

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
    fetchInvoices,
    saveUser,
    fetchPartnership,
    getById,
    updateUser,
    fetchUserById,
    fetchAll,
    fetchAllBackoffice,
    removeUser,
    removeUserBackoffice,
  };
};

export default UserService;
