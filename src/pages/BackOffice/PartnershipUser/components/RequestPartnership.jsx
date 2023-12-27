import React from 'react';

const RequestPartnership = () => {
    return (
        <div>
            <div className="relative p-4 max-h-full">
                <div className="relative bg-white rounded-lg shadow px-4 py-3 min-w-[700px] mx-auto">
                    <div className="flex items-center justify-end px-4 md:px-5 md:py-2 rounded-t">
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="px-6 py-3">
                        <h1 className="text-[20px]">Request Partnership</h1>
                    </div>
                    <div className="px-6">
                        <form>
                            <div className="">
                                <form className="my-auto">
                                    <div className="flex flex-col">
                                        <label
                                            className="block text-[14px] font-normal leading-6 text-darkgray mb-2">
                                            Company ID
                                        </label>
                                        <div className="relative w-full">
                                            <input type="search" id="search-dropdown"
                                                   className="block p-2.5 w-full z-20 py-3 text-sm text-gray bg-white rounded-lg border border-lightgray focus:outline-none"
                                                   placeholder="Search..." required/>
                                            <button type="submit"
                                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange rounded-e-lg border border-orange hover:bg-white hover:text-orange focus:ring-none focus:outline-none focus:ring-orange">
                                                <p>Search</p>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-end p-4 md:p-5 gap-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPartnership;