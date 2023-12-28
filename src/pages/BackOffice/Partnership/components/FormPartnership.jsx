import React from 'react';
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined.js";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined.js";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined.js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined.js";

import {useParams} from "react-router-dom";
import useFetchNonPartnership from "../../../../features/partnership/useFetchNonPartnership.js";
import {useFormik} from "formik";
import {useEditCompany} from "../../../../features/company/useEditCompany.js";
import {toast, Toaster} from "react-hot-toast";
import {useAddPartnership} from "../../../../features/partnership/useAddPartnership.js";
import { useNavigate } from 'react-router-dom';
import {useCreateCompany} from "../../../../features/company/useCreateCompany.js";
import useFetchPartnership from "../../../../features/partnership/useFetchPartnership.js";
const FormPartnership = () => {
    const params = useParams();
    console.log(params.id)
    const navigate = useNavigate();
    const {datas} = useFetchNonPartnership(params.id)


    const formik = useFormik({
        initialValues: {
            companyId: params?.id || '',
            partnerId: '',

        },
        enableReinitialize: true,
        onSubmit: async () => {
           const {companyId,partnerId} = formik.values
            mutate({companyId,partnerId})
        },
    });

    const { mutate, isPending } = useAddPartnership({
        onSuccess:() =>{
            formik.resetForm();
            navigate(`/backoffice/${params.id}/partnership`);
        },
        onFailure: (error) => {
            alert(error);
        }
    });


    const handleFormInput = (e) => {
        const { name } = e.target;
        formik.setFieldValue(name, e.target.value);
    };

    console.log(formik.values)


    return (
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow px-4 py-3">

                <div className="flex items-center justify-end px-4 md:px-5 md:py-2 rounded-t">
                    <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal">
                        {/*<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                        {/*     viewBox="0 0 14 14">*/}
                        {/*    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>*/}
                        {/*</svg>*/}
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="px-6 py-3">
                    <h1 className="text-[20px]">Add Partnership</h1>
                </div>
                <div className="px-6">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="companyName"
                                       className="block mb-2 text-[12px] font-medium text-gray">
                                    Partner Company Name</label>
                                <select id="partnerId"
                                        name="partnerId"
                                        onChange={handleFormInput}
                                        className="rounded-md border-0 py-3 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full">
                                    <option selected>Partner Company Name</option>
                                    {datas?.map((nonpartner) => {
                                        return (
                                            <option value={nonpartner?.companyId}
                                                    key={nonpartner?.companyId}>{nonpartner?.companyName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center justify-end p-4 md:p-5 gap-3">
                            <button data-modal-hide="default-modal" type="button"
                                    className="text-orange bg-white border-2 border-orange hover:bg-orange hover:text-white hover:border-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Cancel
                            </button>
                            <button data-modal-hide="default-modal" type="submit"
                                    className="text-white bg-orange border-2 border-transparent hover:bg-white hover:text-orange hover:border-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Add
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default FormPartnership;