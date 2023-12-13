import React from "react";
import axiosInstance from "../api/axiosInstance";

const CompanyService = () => {
  const saveCompany = async (menu) => {
    const formData = new FormData();
    formData.append("name", menu.name);
    formData.append("price", menu.price);
    formData.append("category", menu.category);
    formData.append("image", menu.image);
    const { data } = await axiosInstance.post("/api/menus", formData);
    return data;
  };

  const fetchCompanyById = async (id) => {
    const { data } = await axiosInstance.get(`/api/companies/${id}`);
    return data;
  };

  const updateCompany = async (newCompany) => {
    const formData = {
      id: newCompany.id,
      companyName: newCompany.companyName,
      province: newCompany.province,
      city: newCompany.city,
      address: newCompany.address,
      phoneNumber: newCompany.phoneNumber,
      companyEmail: newCompany.companyEmail,
    };
    console.log(formData);
    const { data } = await axiosInstance.put(`/api/companies/profile`, formData);
    return data;
  };

  const deleteCompany = async (id) => {
    const { data } = await axiosInstance.delete(`/api/menus/${id}`);
    return data;
  };

  const fetchCompanies = async (queryParams) => {
    const { data } = await axiosInstance.get(`/api/menus`, {
      params: queryParams,
    });

    return data;
  };

  const downloadImageCompany = async (url) => {
    const { data } = await axiosInstance.get(url, { responseType: "blob" });
    console.log(data);

    return data;
  };

  return {
    saveCompany,
    fetchCompanyById,
    updateCompany,
    deleteCompany,
    fetchCompanies,
    downloadImageCompany,
  };
};

export default CompanyService;
