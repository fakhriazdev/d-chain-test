import axiosInstance from "../api/axiosInstance";

const FinancingService = () => {
  const fetchFinancingBo = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/backoffice/financing`, {
      params: queryParams,
    });
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

  const getReceivableById = async (id) => {
    const { data } = await axiosInstance.get(`/api/financing/receivable/${id}`);
    return data;
  };
  const getPayableById = async (id) => {
    const { data } = await axiosInstance.get(`/api/financing/payable/${id}`);
    return data;
  };

  const saveFinancingAccept = async (payload) => {
    const { data } = await axiosInstance.post(
      "/api/backoffice/financing/approve",
      payload
    );
    return data;
  };
  const saveFinancingReject = async (payload) => {
    const { data } = await axiosInstance.post(
      "/api/backoffice/financing/reject",
      payload
    );
    return data;
  };

  return {
    fetchPaymentOngoing,
    fetchPaymentHistory,
    saveInvoice,
    fetchPartnership,
    getReceivableById,
    saveFinancingAccept,
    saveFinancingReject,
    fetchFinancingBo,
    getPayableById
  };
};

export default FinancingService;
