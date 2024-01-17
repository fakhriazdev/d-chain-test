import axiosInstance from "../api/axiosInstance";

const DashboardUserService = () => {
  const getLimit = async () => {
    const { data } = await axiosInstance.get("/api/user-dashboard/limit");
    return data;
  };

  const getCashCycle = async (type) => {
    if (type === "payable") {
      const { data } = await axiosInstance.get("/api/user-dashboard/cash/payable");
      return data;
    } else {
      const { data } = await axiosInstance.get("/api/user-dashboard/cash/receivable");
      return data;
    }
  };

  return {
    getLimit,
    getCashCycle,
  };
};

export default DashboardUserService;
