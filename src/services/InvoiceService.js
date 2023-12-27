import axiosInstance from "../api/axiosInstance";

const InvoiceService = () => {
  const fetchInvoices = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/invoice`, {
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

  return {
    fetchInvoices,
    saveInvoice,
    fetchPartnership,
  };
};

export default InvoiceService;
