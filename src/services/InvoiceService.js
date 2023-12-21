import axiosInstance from "../api/axiosInstance";

const InvoiceService = () => {
  const fetchInvoices = async () => {
    const { data } = await axiosInstance.get(
      `https://run.mocky.io/v3/f10278db-0d5f-423b-bf8e-c2cf1b234d89`
    );
    return data;
  };

  return {
    fetchInvoices,
  };
};

export default InvoiceService;
// https://run.mocky.io/v3/8ed53fee-a9f5-4bd8-b27e-32587466b6e0
