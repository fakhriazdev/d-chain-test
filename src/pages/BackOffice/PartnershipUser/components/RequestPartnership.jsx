import React, {useState} from 'react';
import {useFetchCompany} from "../../../../features/company/useFetchCompany.js";
import {decodeJWT} from "../../../../utils/decodeJWT.js";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
import {useAddPartnership} from "../../../../features/partnership/useAddPartnership.js";
import {useFormik} from "formik";


const RequestPartnership = (props) => {
    const {refetch} = props;
        const [temp, setTemp] = useState("")
        const [searchTerm, setSearchTerm] = useState('');
        const { company,isLoading,error } = useFetchCompany(searchTerm);
        console.log(error?.data);
    const decode = decodeJWT()

        const handleSearchChange = (event) => {
            setTemp(event.target.value);
        };
        const handleSearchSubmit = (event) => {
            event.preventDefault();
            setSearchTerm(temp)
        };
    console.log(company)

    const addPartnershipMutation = useAddPartnership({
        onSuccess: (data) => {
            // handle success
            refetch()
            console.log("Success:", data);
        },
        onFailure: (error) => {
            refetch()
            console.error("Error:", error);
        },
    });

    const handleAddPartnership = async () => {
            await addPartnershipMutation.mutate({'partnerId':company.companyId,'companyId':decode?.company_id});
    };


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
                    <div className="px-6 mb-10">
                        <form className="my-auto" onSubmit={handleSearchSubmit}>
                            <div className="flex flex-col">
                                <label
                                    className="block text-[14px] font-normal leading-6 text-darkgray mb-2">
                                    Company ID
                                </label>
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown"
                                           onChange={handleSearchChange}
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
                    <div className="px-6 py-3 text-center">
                        {error ? (
                            <h1>{error?.data}</h1>
                        ) : (
                            <>
                                {company !== null ? (
                                    <>
                                        <h1 className="text-[14px] font-medium">{company?.companyName}</h1>
                                        <h2 className="text-[10px] ">{company?.emailUser}</h2>
                                        <h2 className="text-[10px] ">{company?.address}</h2>
                                        <h2 className="text-[10px] ">{company?.phoneNumber}</h2>
                                    </>
                                ) : (
                                    <h1>No company data available</h1>
                                )}
                            </>
                        )}
                    </div>
                    <div className="px-6 py-3 text-center">
                        {error ? (
                            <></>
                        ) : (
                            <>
                                {company ? (
                                    <>
                                        <button
                                            onClick={handleAddPartnership}
                                            className="mt-2 text-white bg-orange border border-orange hover:bg-orange/80 focus:outline-none font-medium rounded-lg text-sm lg:px-6 py-3 my-auto text-center  ">
                                            <AddOutlinedIcon/> Request Partnership
                                        </button>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        )}


                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 gap-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPartnership;