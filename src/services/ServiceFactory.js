import React from 'react';
import CompanyService from "./CompanyService.js";

const ServiceFactory = () => {
    return {
        companyService: CompanyService()
    };
};

export default ServiceFactory;