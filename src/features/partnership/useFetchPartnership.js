import React, { useEffect, useState } from 'react';
import axiosInstance from "../../api/axiosInstance.js";
import {decodeJWT} from "../../utils/decodeJWT.js";

const useFetchPartnership = (id) => {
    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    //const companyId = sessionStorage.getItem("companyId");
    const decode = decodeJWT()
    console.log(decode)
    let params = id ? id : decode?.company_id;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchPartnership = async () => {
        setIsLoading(true);
        try {
            const partnershipResponse = await axiosInstance.get(`/api/partnerships/${params}`, {
                params: {
                    sortOrder,
                    page: currentPage,
                    size: pageSize,
                    sortBy: "company",
                },
            });
            const { count, totalPages } = partnershipResponse.data.paging;
            setTotalPages(totalPages);
            console.log(partnershipResponse.data.data)
            setDatas(partnershipResponse.data.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    };
    const refetch = () => {
        fetchPartnership();
    };

    useEffect(() => {
fetchPartnership()
    }, [currentPage, pageSize, sortOrder]);
    return {
        datas,
        isLoading,
        currentPage,
        pageSize,
        totalPages,
        handlePageChange,
        refetch
    };
};

export default useFetchPartnership;
