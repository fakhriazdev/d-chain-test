import axiosInstance from "../api/axiosInstance";

const FinancingService = () => {
  const fetchFinancingBoReceivable = async (queryParams) => {
    const { data } = await axiosInstance.get(
      `/api/financing/backoffice/receivable`,
      {
        params: queryParams,
      }
    );
    return data;
  };

  const fetchFinancingBoPayable = async (queryParams) => {
    const { data } = await axiosInstance.get(
      `/api/financing/backoffice/payable`,
      {
        params: queryParams,
      }
    );
    return data;
  };

  return {
    fetchFinancingBoReceivable,
    fetchFinancingBoPayable
  };
};

export default FinancingService;
