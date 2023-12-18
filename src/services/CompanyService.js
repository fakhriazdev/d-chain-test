import React from 'react';
import axiosInstance from '../api/axiosInstance';


const CompanyService = () => {
    const saveCompany= async (menu) => {
        const formData = new FormData();
        formData.append('name', menu.name);
        formData.append('price', menu.price);
        formData.append('category', menu.category);
        formData.append('image', menu.image);
        const { data } = await axiosInstance.post('/api/menus', formData)
        return data;
    }

    const fetchCompanyById = async (id) => {
        const { data } = await axiosInstance.get(`/api/companies/${id}`);
        return data;
    }

    const updateCompany= async (newMenu) => {
        const formData = new FormData();
        formData.append('id', newMenu.id);
        formData.append('name', newMenu.name);
        formData.append('price', newMenu.price);
        formData.append('category', newMenu.category);
        formData.append('image', newMenu.image);
        const { data } = await axiosInstance.put(`/api/menus`, formData);
        return data;
    }

    const deleteCompany= async (id) => {
        const { data } = await axiosInstance.delete(`/api/menus/${id}`);
        return data;
    }

    const fetchCompanies = async (queryParams) => {
        const { data } = await axiosInstance.get(`/api/menus`, { params: queryParams });
        
        return data;
    }

    const downloadImageCompany= async (url) => {
        const {data} = await axiosInstance.get(url, { responseType: 'blob' });
        console.log(data);

        return  data;
    }

    return {
        saveCompany,
        fetchCompanyById,
        updateCompany,
        deleteCompany,
        fetchCompanies,
        downloadImageCompany
    }
    
};

export default CompanyService;