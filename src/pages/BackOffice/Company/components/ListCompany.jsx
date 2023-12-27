import React, { useContext, useEffect, useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {useCompanies} from'../../../../features/company/useCompanies.js'
import Loading from "../../../../components/Loading.jsx";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import {ChevronLeftOutlined} from "@mui/icons-material";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
import {Link} from "react-router-dom";
import {useFetchCompany} from "../../../../features/company/useFetchCompany.js";
const ListCompany = () => {
  const {data:companies,handlerSort,isLoading,sortOrder,totalPages,currentPage,pageSize, handlePageChange} = useCompanies()


  return (

    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Manage Company </h1>
        <Link to={`/backoffice/company/add`}
                className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
          <AddOutlinedIcon/> Add New Company
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="relative flex justify-end mb-5 gap-4 mx-4">
      <p className="my-auto font-gray text-[14px]">Sort By: </p>
      <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-2 py-2 text-center items-center"
              type="button"
          >
            {sortOrder ? sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1) : "Asc"}
            <ExpandMoreOutlinedIcon className="my-auto"/>
          </button>
          <div
              id="dropdown"
              className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20"
          >
            <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center">
                  <input
                      type="radio"
                      value="asc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                      onChange={handlerSort}
                  />
                  <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    A-Z
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                      type="radio"
                      value="dsc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                      onChange={handlerSort}
                  />
                  <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Z-A
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-x-auto mx-4 sm:rounded-lg">
          {isLoading === true ? <Loading/> :
              <table className="w-full text-sm text-left rtl:text-right mb-2">
                <thead className="text-white text-[16px] font-[300] bg-orange ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Company Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    E-mail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Limit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
                </thead>
                <tbody>
                {companies.map((company,i) => {
                  return (
                      <tr className="bg-white" key={i+1}>
                        <th scope="col-span-4"
                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                          {company.companyId}
                        </th>
                        <th scope="col"
                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                          {company.companyName}
                        </th>
                        <th scope="col"
                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                          {company.companyEmail}
                        </th>
                        <th scope="col"
                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                          {company.phoneNumber}
                        </th>
                        <th scope="col" className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                          {`Rp. ${company.financingLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                        </th>
                        <th scope="col"
                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                          <div className="flex gap-2 my-auto">
                            <Link to={`/backoffice/company/${company.companyId}/edit`}
                               className="font-medium text-green hover:text-green/60 dark:text-blue-500 hover:underline">
                              <EditNoteOutlinedIcon/>
                            </Link>
                            <Link to={`/backoffice/${company.companyId}/partnership`}
                               className="font-medium text-darkgray hover:text-lightgray dark:text-blue-500 hover:underline">
                              <ArticleOutlinedIcon/>
                            </Link>
                          </div>
                        </th>
                      </tr>
                  )

                })}


                </tbody>
              </table>
          }
        </div>
        <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
          {isLoading === true ?
              <p
                  className="my-auto text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</p>
              :
              <p className="my-auto">{`Showing ${currentPage} to ${pageSize} of ${companies.length} entries`}</p>
          }
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
              <li>
                <button onClick={()=>handlePageChange(currentPage -1)} disabled={currentPage === 1}
                    className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                >
                  <ChevronLeftOutlined/>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              {[...Array(totalPages).keys()].map((page) => (
                  <li key={page + 1}>
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 ${
                            currentPage === page + 1
                                ? 'bg-gray/20 text-orange font-bold'
                                : 'bg-gray/20 hover:bg-orange/20 hover:text-orange'
                        } rounded-md`}
                    >
                      {page + 1}
                    </button>
                  </li>
              ))}
              <li>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                >
                  <ChevronRightOutlinedIcon/>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )


};

export default ListCompany;
