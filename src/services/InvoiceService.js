import axiosInstance from "../api/axiosInstance";

const InvoiceService = () => {
  const fetchInvoices = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/invoice`, {
      params: queryParams,
    });
    return data;
  };

  const saveInvoice = async (invoice) => {
    const formData = new FormData();
    formData.append('recipientId', invoice.recipientId);
    formData.append('dueDate', invoice.dueDate);
    formData.append('invDate', invoice.invDate);
    formData.append('amount', invoice.amount);
    formData.append('itemList', invoice.itemList);
    const {data} = await axiosInstance.post('/api/invoice', formData);
    return data;
  }

  return {
    fetchInvoices,
    saveInvoice
  };
};

export default InvoiceService;
