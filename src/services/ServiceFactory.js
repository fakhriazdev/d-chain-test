
import CompanyService from "./CompanyService.js";
import RegionService from "./regionServices.js";

const ServiceFactory = () => {
    return {
        companyService: CompanyService(),
        regionService: RegionService(),
    };
};

export default ServiceFactory;