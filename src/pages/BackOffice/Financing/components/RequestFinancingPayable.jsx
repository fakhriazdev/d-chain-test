import React, {useEffect, useState} from 'react';
import TabFilter from "../../../../components/TabFilter.jsx";
import ViewLogo from '../../../../assets/icons/View.svg?react'
import AddLogo from '../../../../assets/icons/Icon Add.svg?react'

const RequestFinancingPayable = () => {
    const [datas, setDatas] = useState([{id:1}])
    const [isModalVisible, setModalVisible] = useState(false);

    const handleToggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleAddDatas = () => {
        const newData = { id: datas.length + 1 };
        const newDatas = [...datas, newData];
        setDatas(newDatas);
    };

    return (
        <>
            {isModalVisible && (
                <div
                    id="fakhri"
                    role="dialog"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-darkgray/20"
                >
                    {/* Modal Content */}
                    <div className="relative bg-white rounded-lg shadow p-5">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-5 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Static modal
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={handleToggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal Body */}
                        <div className="space-y-4">
                            {/* Your modal content goes here */}
                        </div>
                        {/* Modal Footer */}
                        <div className="flex items-center justify-end mt-5">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
                                onClick={handleToggleModal}
                            >
                                I accept
                            </button>
                            <button
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                                onClick={handleToggleModal}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <h1 className="text-[30px] md:text-title lg:text-title font-normal mb-5 md:mb-10 lg:mb-10">Request
                    Financing - Payable</h1>
            </div>
            <div className="w-full rounded-lg shadow-md p-3 md:p-6 lg:p-6">
                {datas.map((datas, i) =>{
                    return (
                        <div className="border-b-2 border-lightgray mb-10">
                            <div className="mb-5 ">
                                <p className="text-[18px] mb-3">Financing Payment 1</p>
                                <label className="text-[14px] text-darkgray">Payment</label>
                                <div className="flex justify-between items-center">
                                    <p className="font-medium">FI-C-36974019-6.23</p>
                                    <div className="flex gap-2 items-center">
                                        <p><ViewLogo/></p>
                                        <button
                                            onClick={handleToggleModal}
                                            className="bg-orange px-2 md:px-4 lg:px-4 py-2 md:py-4 lg:py-4 text-white rounded-lg">Select
                                            Invoice
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10">
                                <p className="text-[13px] text-darkgray">Amount</p>
                                <p className="text-[16px] font-medium mb-3">Rp. 100.000.000</p>
                            </div>
                            <div className="flex flex-wrap justify-between mb-10">
                                <div className="flex gap-5">
                                    <div className="relative w-[160px] md:w-[300px] lg:w-[300px] mb-5">
                                        <label className="text-[16px] text-darkgray mb-2">Tenure</label>
                                        <select
                                            name="province"
                                            placeholder="car"
                                            className="rounded-md border-0 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                        >
                                            <option selected>Select Months</option>
                                            <option value="1">12</option>
                                        </select>
                                    </div>
                                    <div className="relative text-[16px]">
                                        <label className="text-darkgray">No. Of Payment</label>
                                        <p className="my-1.5 md:my-2 lg:my-2">12x</p>
                                    </div>

                                </div>
                                <div className="flex gap-5">
                                    <div className="relative text-[16px]">
                                        <label className="text-darkgray mb-2">Monthly Installment</label>
                                        <p className="my-3">8.884.878/Mo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-between lg:justify-between mb-10">
                                <div className="flex gap-5 items-center">
                                    <p className="my-auto">Payment Method</p>
                                </div>
                                <div className="flex gap-5">
                                    <TabFilter filter1="Auto-Debit" filter2="Bank Transfer" width="300"/>
                                </div>
                            </div>
                        </div>
                    )
                })}


                <div className="mb-5 mb-16">
                    <p className="text-[18px] mb-3">Limit Detail</p>
                    <div className="flex justify-between mb-5">
                        <p>Current Payable Limit</p>
                        <p className="font-semibold text-[16px]">1.400.000.000</p>
                    </div>
                    <div className="flex justify-between mb-5">
                        <p>Used Limit</p>
                        <p className="font-semibold text-[16px]">100.000.000</p>
                    </div>
                    <div className="flex justify-between border-t-2 border-lightdark pt-5">
                        <p>Remaining Limit</p>
                        <p className="font-semibold text-[24px]">1.300.000.000</p>
                    </div>
                </div>
                <div className="mb-10">
                    <button
                        onClick={handleAddDatas}
                        className="w-full bg-white border-2 py-5 rounded-lg text-orange border-orange border-dashed text-[18px] font-medium">
                        <span className="mr-2 text-[20px] font-normal">+</span>Add Invoice
                    </button>
                </div>
                <div className="mb-5 flex gap-2 mb-10">
                    <input id="default-checkbox" type="checkbox" value=""
                           class="w-6 h-6 text-green bg-white rounded focus:none"/>
                    <p>I hereby declare that the information provided is true and correct.</p>
                </div>
                <div className="mb-10">
                    <button
                        className="w-full bg-orange border-2 py-5 rounded-lg text-white border-orange border-dashed text-[18px] font-medium">
                        Apply Financing Request
                    </button>
                </div>
            </div>
        </>
    );
};

export default RequestFinancingPayable;