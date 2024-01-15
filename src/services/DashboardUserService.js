import axiosInstance from "../api/axiosInstance";

const DashboardUserService = () => {
  const getLimit = async () => {
    const { data } = await axiosInstance.get('/api/user-dashboard/limit');
    return data;
  };
  
  return {
    getLimit,
  };
};

export default DashboardUserService;
