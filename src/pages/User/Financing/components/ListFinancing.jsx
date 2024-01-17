import React, { useState, useEffect } from "react";
import Badge from "../../../../components/Badge.jsx";
import { ChevronLeftOutlined } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Button from "../../../../components/Button.jsx";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined.js";
import TabFilter from "../../../../components/TabFilter.jsx";
import { useFetchFinancing } from "../../../../features/financing/useFetchFinancing.js";
import { Link } from "react-router-dom";
import { formatDate, formatIDRCurrency, toTitleCase } from "../../../../utils/utility.js";

const ListFinancing = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const size = 10; // Number of items per page
  const [selectedType, setSelectedType] = useState("payable");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    let checked = "";
    if (!isChecked) {
      setSelectedType("receivable");
      checked = "receivable";
    } else {
      setSelectedType("payable");
      checked = "payable";
    }
  };

  //   console.log(checked);
  console.log(selectedType);

  const { data, isLoading, isError, error, refetch } = useFetchFinancing(
    selectedType,
    selectedStatus,
    currentPage,
    size
  );

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };
  const handleStatusClick = (e) => {
    setSelectedStatus(e.target.value);
   
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log(data);

  useEffect(() => {
    refetch()
  }, [selectedType])

  return (
    <>
      <div className="relative flex justify-between mx-4">
        <h1 className="text-title my-auto">Financing</h1>
        {/* <TabFilter
          filter1={"receivable"}
          filter2={"payable"}
          onFilterClick={handleTypeClick}
        /> */}

        <div>
          <label className="themeSwitcherTwo shadow-card border border-[#D5D5D7] relative inline-flex cursor-pointer select-none items-center justify-center rounded-xl bg-[#F3F4F6] p-1">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                !isChecked ? "text-white bg-orange" : "text-orange"
              }`}
            >
              Account Payable
            </span>
            <span
              className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                isChecked ? "text-white bg-orange" : "text-orange"
              }`}
            >
              Account Receivable
            </span>
          </label>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative flex justify-end mb-5 gap-4 mx-4">
          {/*<form className="my-auto">*/}
          {/*    <div className="flex">*/}
          {/*        <div className="relative w-full">*/}
          {/*            <input type="search" id="search-dropdown"*/}
          {/*                   className="block p-2.5 w-full z-20 text-sm text-gray bg-orange/20 rounded-lg border border-transparent focus:outline-none"*/}
          {/*                   placeholder="Search..." required/>*/}
          {/*            <button type="submit"*/}
          {/*                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange rounded-e-lg border border-orange hover:bg-white hover:text-orange focus:ring-none focus:outline-none focus:ring-orange">*/}
          {/*                <p>Search</p>*/}
          {/*            </button>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</form>*/}
          <div className="flex gap-2 mt-10">
            <p className="my-auto font-gray text-[14px]">Filter By: </p>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-2 py-2 text-center items-center"
              type="button"
            >
              <ExpandMoreOutlinedIcon className="my-auto" />
            </button>
          </div>
          <div
            id="dropdown"
            className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 border-2 border-orange"
          >
            <ul
              className="m-8 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownRadioButton"
            >
              <p className="mb-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                Status
              </p>
              <li className="mb-16">
                <div className="flex items-center">
                  <input
                    onClick={handleStatusClick}
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All
                  </label>
                </div>
              </li>
              <li className="mb-16">
                <div className="flex items-center">
                  <input
                    onClick={handleStatusClick}
                    type="radio"
                    value="pending"
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pending
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    onClick={handleStatusClick}
                    type="radio"
                    value="rejected"
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Rejected
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="asc"
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    On-Going
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="asc"
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Outstanding
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="asc"
                    name="default-radio"
                    className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Completed
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex space-x-7 mt-6">
            <Link
              to={
                selectedType === "payable"
                  ? "request-financing-payable"
                  : "request-financing-receivable"
              }
            >
              <button
                type="button"
                className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm lg:px-6 py-3 my-auto text-center flex space-x-2 items-center"
              >
                <p>Request Financing</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto mx-4 sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right mb-2">
            <thead className="text-white text-[16px] font-[300] bg-orange ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Inv. Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((d) => {
                return (
                  <tr key={d.invoice_number} className="bg-white">
                    <th
                      scope="col-span-4"
                      className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                    >
                      {formatDate(d?.date)}
                    </th>
                    <th
                      scope="col-span-4"
                      className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                    >
                      {d?.invoice_number}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-orange  font-normal whitespace-nowrap text-[14px]"
                    >
                      {formatIDRCurrency(d?.amount)}
                    </th>
                    <th
                      scope="col-span-4"
                      className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                    >
                      {d?.company_name}
                    </th>
                    <th
                      scope="col-span-4"
                      className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                    >
                      <Badge variant={d?.status}>{toTitleCase(d?.status)}</Badge>
                    </th>
                    <th
                      scope="col-span-4"
                      className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                    >
                      <Link
                        to={selectedType === "payable" ? (`${d?.financing_id}/detail-payable`) : (`receivable/${d?.financing_id}`)}
                        className="font-medium text-darkgray hover:text-lightgray dark:text-blue-500 hover:underline"
                      >
                        <ArticleOutlinedIcon />
                      </Link>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
          {isLoading === true ? (
            <p className="my-auto text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
              loading...
            </p>
          ) : (
            <p className="my-auto">{`Showing ${currentPage} to ${size} of ${data.data.length} entries`}</p>
          )}
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                  aria-disabled={currentPage === 1}
                >
                  <ChevronLeftOutlined />
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              {[...Array(data?.totalPages || 0).keys()].map((page) => (
                <li key={page + 1}>
                  <button
                    onClick={() => handlePageChange(page + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 ${
                      currentPage === page + 1
                        ? "bg-gray/20 text-orange font-bold active-page"
                        : "bg-gray/20 hover:bg-orange/20 hover:text-orange"
                    } rounded-md`}
                    aria-current={currentPage === page + 1 ? "page" : null}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === data?.totalPages || 0}
                  className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                  aria-disabled={currentPage === data?.totalPages || 0}
                >
                  <ChevronRightOutlinedIcon />
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ListFinancing;
