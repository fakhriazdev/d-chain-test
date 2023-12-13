import React from 'react';
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined.js";

import {ChevronLeftOutlined} from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
const ListPartnership = () => {
    return (
        <>
            <div className="relative flex justify-between mb-6 mx-4">
                <h1 className="text-title my-auto">List Partnership </h1>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="relative flex justify-end mb-5 gap-4 mx-4">
                    <p className="my-auto font-gray text-[14px]">Filter By: </p>
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-2 py-2 text-center items-center"
                        type="button"
                    >

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

                        <table className="w-full h-96 text-sm text-left rtl:text-right mb-2">
                            <thead className="text-white text-[16px] font-[300] bg-orange ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Partnership No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Partnership Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Partner Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                    <tr className="bg-white">
                                        <th scope="col-span-4"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">

                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">

                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
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

export default ListPartnership;