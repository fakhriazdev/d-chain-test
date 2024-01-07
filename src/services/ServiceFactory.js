import AuthService from "./AuthService.js";
import CompanyService from "./CompanyService.js";
import FinancingService from "./FinancingService.js";
import InvoiceService from "./InvoiceService.js";
import PaymentService from "./PaymentService.js";

const ServiceFactory = () => {
  return {
    companyService: CompanyService(),
    authService: AuthService(),
    invoiceService: InvoiceService(),
    financingService: FinancingService(),
    paymentService: PaymentService(),
  };
};

export default ServiceFactory;
