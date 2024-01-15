import axiosInstance from "../api/axiosInstance";

const UserService = () => {
  const fetchInvoices = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/invoice`, {
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


  return {
    fetchInvoices,
    saveUser,
    fetchPartnership,
    getById,
    updateUser,
    fetchUserById
  };
};

export default UserService;
