
import React from 'react';
import CompanyService from "./CompanyService.js";

const ServiceFactory = () => {
    return {
        companyService: CompanyService(),
        authService: AuthService(),
    };
};

export default ServiceFactory;
