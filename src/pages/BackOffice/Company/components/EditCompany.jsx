import React from 'react';
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined.js";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined.js";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined.js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined.js";

const EditCompany = () => {
    return (
        <>
            <div className="relative flex justify-start mb-6 mx-4">
                <h1 className="text-title my-auto">Edit Company</h1>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <form className="p-6">
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="name"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    placeholder="Enter Company Name"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="province"
                                   className="block mb-2 text-[18px] font-medium text-gray">
                                Province</label>
                            <select id="province"
                                    placeholder="car"
                                    className="rounded-md border-0 py-3 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="city"
                                   className="block mb-2 text-[18px] font-medium text-gray">City
                            </label>
                            <select id="city"
                                    className="rounded-md border-0 py-3 text-lightgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full">
                                <option selected>Select City</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="address"
                                    placeholder="Enter address"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    placeholder="Enter Company Email"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="phoneNumber"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="phoneNumber"
                                    placeholder="Enter phone number"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="addDocument"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Add Document
                            </label>
                            <div
                                className="mt-2 flex justify-center rounded-lg border border-dashed border-lightgray px-6 py-10">
                                <div className="text-center">

                                    <div className="mt-4 flex text-gray-600">
                                        <label htmlFor="file-upload"
                                               className="relative cursor-pointer rounded-md bg-white font-semibold text-lightgray hover:text-orange">
                                            <p className=" text-gray-600"><CloudUploadOutlinedIcon/></p>
                                            <span>Select one or more Document</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex mx-6 gap-y-8 justify-between">
                        <p className="text-[14px] text-darkgray my-auto">Document_a01.docx</p>
                        <div className="flex gap-2">
                            <div className="flex gap-2">
                                <span
                                    className="cursor-pointer text-darkgray hover:text-lightgray"><DescriptionOutlinedIcon/></span>
                                <span
                                    className="cursor-pointer text-green hover:text-green/50"><FileDownloadOutlinedIcon/></span>
                                <span className="cursor-pointer text-red hover:text-red/50"><DeleteOutlinedIcon/></span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex mx-6 gap-y-8 justify-between">
                        <p className="text-[14px] text-darkgray my-auto">Document_a01.docx</p>
                        <div className="flex gap-2">
                            <span
                                className="cursor-pointer text-darkgray hover:text-lightgray"><DescriptionOutlinedIcon/></span>
                            <span className="cursor-pointer text-green hover:text-green/50"><FileDownloadOutlinedIcon/></span>
                            <span className="cursor-pointer text-red hover:text-red/50"><DeleteOutlinedIcon/></span>
                        </div>
                    </div>
                    <div className="relative mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                        <div className="sm:col-span-full">
                            <label htmlFor="username" className="block text-[18px] font-medium leading-6 text-darkgray">
                                User Account <span className="text-[12px] text-darkgray">(Will be used by User to Login to D-Auto Chain)</span>
                            </label>
                            <label className="block text-[13px] leading-6 text-darkgray">
                                Username
                            </label>

                        </div>
                        <div className="sm:col-span-4 sm:col-start-1">
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    placeholder="Enter Username"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 my-auto">
                            <button type="button" className="text-sm font-normal mt-2 py-3 md:py-1 lg:py-3 rounded-md text-gray-900 w-full bg-orange text-white hover:text-orange hover:bg-white border-2 border-white hover:border-orange">
                                Generate Password
                            </button>
                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm py-3 lg:py-3 rounded-md font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange">
                            <FileDownloadOutlinedIcon/> Sava Data
                        </button>

                    </div>

                </form>
            </div>
        </>
    );
};

export default EditCompany;