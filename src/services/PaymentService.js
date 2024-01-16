import axiosInstance from "../api/axiosInstance";

const PaymentService = () => {
  const fetchById = async (id) => {
    const { data } = await axiosInstance.get(`/api/payments/${id}`);
    console.log(data);
    return data;
  };

  const updateMethod = async (payload) => {
    const { data } = await axiosInstance.put(`/api/payments/method`, payload);
    console.log(data);
    return data;
  };

  const fetchPaymentOngoing = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/payments/ongoing`, {
      params: queryParams,
    });
    return data;
  };

  const fetchPaymentHistory = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/payments/history`, {
      params: queryParams,
    });
    return data;
  };

  const saveInvoice = async (invoice) => {
    try {
      const { data } = await axiosInstance.post("/api/invoice", invoice);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPartnership = async (id, queryParams) => {
    const { data } = await axiosInstance.get(`/api/partnerships/${id}`, {
      params: queryParams,
    });
    return data;
  };

  const getById = async (id) => {
    const { data } = await axiosInstance.get(`/api/invoice/${id}`);
    return data;
  };

  const updateStatusInvoice = async (payload) => {
    const { data } = await axiosInstance.put("/api/invoice/update", payload);
    return data;
  };

  return {
    fetchPaymentOngoing,
    fetchPaymentHistory,
    saveInvoice,
    fetchPartnership,
    getById,
    updateStatusInvoice,
    fetchById,
    updateMethod,
  };
};

export default PaymentService;
