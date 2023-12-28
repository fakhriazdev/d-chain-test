import React from 'react';
import Badge from "../../../../components/Badge.jsx";
import {ChevronLeftOutlined} from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Button from "../../../../components/Button.jsx";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined.js";
import TabFilter from "../../../../components/TabFilter.jsx";
const ListFinancing = () => {

    return (
        <>
            <div className="relative flex justify-between my-12 mx-4">
                <h1 className="text-title my-auto">Financing</h1>
                <TabFilter filter1={"Account Payable"} filter2={"Account Receivable"}/>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="relative flex justify-between mb-5 gap-4 mx-4">
                    <form className="my-auto">
                        <div className="flex">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown"
                                       className="block p-2.5 w-full z-20 text-sm text-gray bg-orange/20 rounded-lg border border-transparent focus:outline-none"
                                       placeholder="Search..." required/>
                                <button type="submit"
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange rounded-e-lg border border-orange hover:bg-white hover:text-orange focus:ring-none focus:outline-none focus:ring-orange">
                                    <p>Search</p>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex gap-2">
                        <p className="my-auto font-gray text-[14px]">Filter By: </p>
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-2 py-2 text-center items-center"
                            type="button"
                        >

                            <ExpandMoreOutlinedIcon className="my-auto"/>
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
                            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-gray-300">Status</p>
                            <li className="mb-16">
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
                                        All
                                    </label>
                                </div>
                            </li>
                            <li className="mb-16">
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
                                        Pending
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
                        <tr className="bg-white">
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                26-06-24
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                FI-C-36974019-6.23
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                {`Rp. ${"80000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                Goriorio Jaya
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <Badge variant="pending">Pending</Badge>
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <ArticleOutlinedIcon/>
                            </th>
                        </tr>
                        <tr className="bg-white">
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                26-06-24
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                FI-C-36974019-6.23
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                {`Rp. ${"80000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                Goriorio Jaya
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <Badge variant="completed">Completed</Badge>
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <ArticleOutlinedIcon/>
                            </th>
                        </tr>
                        <tr className="bg-white">
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                26-06-24
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                FI-C-36974019-6.23
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                {`Rp. ${"80000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                Goriorio Jaya
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <Badge variant="rejected">Rejected</Badge>
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <ArticleOutlinedIcon/>
                            </th>
                        </tr>
                        <tr className="bg-white">
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                26-06-24
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                FI-C-36974019-6.23
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                {`Rp. ${"80000000".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                Goriorio Jaya
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <Badge variant="outstanding">Outstanding</Badge>
                            </th>
                            <th scope="col-span-4"
                                className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                <ArticleOutlinedIcon/>
                            </th>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">

                    <p className="my-auto">Showing 1 to 10 of 50 entries</p>

                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
                            <li>

                                <a
                                    href="#"
                                    className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                                >
                                    <ChevronLeftOutlined/>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange font-bold"
                                >
                                    1
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                                >
                                    <ChevronRightOutlinedIcon/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default ListFinancing;