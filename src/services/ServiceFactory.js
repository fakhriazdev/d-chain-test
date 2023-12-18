import AuthService from "./AuthService";
import CompanyService from "./CompanyService.js";


const ServiceFactory = () => {
    return {
        authService: AuthService(),
        companyService:CompanyService(),
    };
};

export default ServiceFactory;
