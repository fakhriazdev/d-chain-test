import AuthService from "./AuthService.js";
import CompanyService from "./CompanyService.js";
import DashboardUserService from "./DashboardUserService.js";
import FinancingService from "./FinancingService.js";
import InvoiceService from "./InvoiceService.js";
import PaymentService from "./PaymentService.js";
import UserService from "./UserService.js";


const ServiceFactory = () => {
    return {
        companyService: CompanyService(),
        authService: AuthService(),
        invoiceService: InvoiceService(),
        paymentService: PaymentService(),
        financingService: FinancingService(),
        userService: UserService(),
        dashboardUserServise: DashboardUserService(),
    }
};

export default ServiceFactory;
