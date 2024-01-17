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
      console.log(data);
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
    const {data} = await axiosInstance.get(`/api/invoice/${id}`);
    return data;
  }

  const approveInvoice = async (invId) => {
    const {data} = await axiosInstance.get(`/api/invoice/approve/${invId}`)
    return data;
  }

  const rejectInvoice = async (payload) => {
    const {data} = await axiosInstance.post("/api/incoive/reject", payload);
    return data;
  }

  return {
    fetchInvoices,
    saveInvoice,
    fetchPartnership,
    getById,
    approveInvoice,
    rejectInvoice,
  };
};

export default InvoiceService;
