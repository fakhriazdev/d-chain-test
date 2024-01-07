import axiosInstance from "../api/axiosInstance";

const PaymentService = () => {
  const fetchById = async (id) => {
    const { data } = await axiosInstance.get(`/api/payments/${id}`);
    console.log(data);
    return data;
  };

  return {
    fetchById,
  };
};

export default PaymentService;