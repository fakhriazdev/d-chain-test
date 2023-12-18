import axiosInstance from "../api/axiosInstance"


const CompanyService = () => {

    const getAllCompanies = async () => {
        const data = await axiosInstance.GET("/api/companies")
        console.log(data)
    }

    return {
        getAllCompanies,
    }
};

export default CompanyService;