import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance.js";
import {data} from "autoprefixer";


export const useCompanies = () => {

    const [companies, setCompanies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [sortOrder, setSortOrder] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    const handlerSort = (e) => {
        setSortOrder(e.target.value)
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchCompanies = async () =>{
        setIsLoading(true);
        try {
                const companiesResponse = await axiosInstance.get("/api/companies",{
                    params:{
                        sortOrder,
                        page: currentPage,
                        size: pageSize,
                    }
                })

            const {  data } = companiesResponse.data;
            const {count, totalPages} = companiesResponse.data.paging
            setTotalPages(totalPages)

            let sortedData = data;

            if (sortOrder) {
                sortedData = sortedData.sort((a, b) =>
                    sortOrder === 'asc' ? a.companyName.localeCompare(b.companyName) : b.companyName.localeCompare(a.companyName)
                );
            }

            setCompanies(sortedData);
                setIsLoading(false)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCompanies();
    }, [sortOrder,currentPage,pageSize]);



    return {
        data:companies,
        handlerSort,
        sortOrder,
        isLoading,
        currentPage,
        pageSize,
        totalPages,
        handlePageChange,
    };
};

