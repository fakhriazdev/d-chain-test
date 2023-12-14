
import AuthService from "./AuthService.js";
import CompanyService from "./CompanyService.js";

const ServiceFactory = () => {
    return {
        companyService: CompanyService(),
        authService: AuthService(),
    };
};

export default ServiceFactory;