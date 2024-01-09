import axiosInstance from "../api/axiosInstance";

const FinancingService = () => {
  const fetchFinancingBoReceivable = async (queryParams) => {
    const { data } = await axiosInstance.get(
      `/api/backoffice/financing/receivable`,
      {
        params: queryParams,
      }
    );
    return data;
  };

  const fetchFinancingBoPayable = async (queryParams) => {
    const { data } = await axiosInstance.get(
      `/api/backoffice/financing/payable`,
      {
        params: queryParams,
      }
    );
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
    const {data} = await axiosInstance.get(`/api/financing/receivable/${id}`);
    return data;
  }

  const updateStatusInvoice = async (payload) => {
    const {data} = await axiosInstance.put('/api/invoice/update', payload)
    return data;
  }

  return {
    fetchPaymentOngoing,
    fetchPaymentHistory,
    saveInvoice,
    fetchPartnership,
    getReceivableById,
    updateStatusInvoice,
    fetchFinancingBoPayable,
    fetchFinancingBoReceivable
  };
};

export default FinancingService;
