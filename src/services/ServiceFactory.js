import AuthService from "./AuthService.js";
import CompanyService from "./CompanyService.js";
import InvoiceService from "./InvoiceService.js";


const ServiceFactory = () => {
    return {
        companyService: CompanyService(),
        authService: AuthService(),
        invoiceService: InvoiceService(),
    };
};

export default ServiceFactory;
