import React, {useState} from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useFormik} from "formik";
import {useMutation} from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useCreateCompany} from "../../../../features/company/useCreateCompany.js";
import validationSchema from "./validateSchema.js";
import Loading from "../../../../components/Loading.jsx";
import LoadingSpin from "../../../../components/LoadingSpin.jsx";
import {useFetchLocations} from "../../../../features/locations/useFetchLocations.js"
const FormCompany = () => {
    const {province,city,handleChooseProvince} = useFetchLocations()

    const navigate = useNavigate();
    const [tempFile, setTempFile] = useState([])
    const formik = useFormik({
        initialValues:{
            accountNumber:"a",
            companyName: "",
            province:"",
            city:"",
            address:"",
            companyEmail:"",
            phoneNumber:"",
            files:{},
            username:"",
            financingLimit:20000000,
            remainingLimit:20000000,
            emailUser: "",

        },
        //validationSchema: validationSchema,
        onSubmit:()=>{
            const formData = new FormData();
            // Append form values to FormData
            formData.append('accountNumber', formik.values.accountNumber);
            formData.append('companyName', formik.values.companyName);
            formData.append('province', formik.values.province);
            formData.append('city', formik.values.city);
            formData.append('address', formik.values.address);
            formData.append('companyEmail', formik.values.companyEmail);
            formData.append('phoneNumber', formik.values.phoneNumber);
            formData.append('financingLimit', formik.values.financingLimit);
            formData.append('remainingLimit', formik.values.remainingLimit);
            formData.append('username', formik.values.username);
            formData.append("emailUser",formik.values.emailUser);
            formData.append("files",formik.values.files);
            // Append documents
            //
            // formik.values.files.map((document, index) => {
            //     formData.append(`files`, document.file);
            // });

            mutate(formData);
        }
    })

    const {mutate,isPending} = useCreateCompany({
        onSuccess:() =>{
            formik.resetForm();
            navigate("/backoffice/company");
        }
    })


    const handleFormInput = (e) => {
        const { name, files } = e.target;
        if (name === "province"){
            const selectedProvince = province.find((p) => p.name === e.target.value);
            handleChooseProvince(selectedProvince.id)
            formik.setFieldValue(name, e.target.value);
        }
        if (name === 'files') {
            formik.setFieldValue(name, e.currentTarget.files[0]);
        } else {
            formik.setFieldValue(name, e.target.value);
        }
    };

    const handleDeleteDoc = (id) =>{
        formik.setFieldValue('files',{})
        // const filtered = formik.values.files.filter((_, index) => index !== id);
        // formik.setFieldValue('files', filtered);
    }

    console.log(formik.values)
    console.log(formik.isValid)
    // console.log(tempFile)

    return (
        <>
            <div className="relative flex justify-start mb-6 mx-4">
                <h1 className="text-title my-auto">Add Company</h1>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <form className="p-6" encType="multipart/form-data" onSubmit={formik.handleSubmit}>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    required={true}
                                    type="text"
                                    name="companyName"
                                    autoComplete="name"
                                    placeholder="Enter Company Name"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    onChange={handleFormInput}
                                    value={formik.values.companyName}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label

                                className="block mb-2 text-[18px] font-medium text-gray">
                                Province</label>
                            <select
                                required={true}
                                name="province"
                                placeholder="car"
                                className="rounded-md border-0 py-3 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                onChange={handleFormInput}

                            >
                                <option selected>Select City</option>
                                {province.map((p)=>{
                                    return (
                                        <option value={p.name} key={p.id}>{p.name}</option>
                                    )

                                })}

                            </select>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                className="block mb-2 text-[18px] font-medium text-gray">City
                            </label>
                            <select
                                required={true}
                                name="city"
                                className="rounded-md border-0 py-3 text-lightgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                onChange={handleFormInput}
                            >

                                <option selected>Select City</option>
                                {city.map((c)=>{
                                    return (
                                        <option value={c.name} key={c.id}>{c.name}</option>
                                    )

                                })}

                            </select>
                        </div>
                        <div className="col-span-full">
                            <label
                                className="block text-[18px] font-medium leading-6 text-darkgray">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    required={true}
                                    type="text"
                                    name="address"
                                    autoComplete="address"
                                    placeholder="Enter address"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    value={formik.values.address}
                                    onChange={handleFormInput}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Email
                            </label>
                            <div className="mt-2">
                                <input
                                    required={true}
                                    type="email"
                                    name="companyEmail"
                                    autoComplete="email"
                                    placeholder="Enter Company Email"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    value={formik.values.companyEmail}
                                    onChange={handleFormInput}
                                    multiple
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                className="block text-[18px] font-medium leading-6 text-darkgray">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    required={true}
                                    type="text"
                                    name="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    autoComplete="phoneNumber"
                                    placeholder="Enter phone number"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    onChange={handleFormInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                className="block text-[18px] font-medium leading-6 text-darkgray">
                                Add Document
                            </label>
                            <div
                                className="mt-2 flex justify-center rounded-lg border border-dashed border-lightgray px-6 py-10">
                                <div className="text-center">

                                    <div className="mt-4 flex text-gray-600">
                                        <label
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-lightgray hover:text-orange">
                                            <p className=" text-gray-600"><CloudUploadOutlinedIcon/></p>
                                            <span>Select one or more Document</span>
                                            <input required={true} name="files" type="file" className="sr-only"
                                                   onInput={handleFormInput}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {formik.values.files?.name !== undefined ?
                            <div className="mt-3 flex mx-6 gap-y-8 justify-between">
                                <p className="text-[14px] text-darkgray my-auto">{formik.values.files.name}</p>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <span
                                            className="cursor-pointer text-red hover:text-red/50"
                                            onClick={() => handleDeleteDoc()}><DeleteOutlinedIcon/></span>
                                    </div>
                                </div>
                            </div>
                        :
                        <>
                        </>
                    }


                    <div className="relative mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-[18px] font-medium leading-6 text-darkgray">
                                User Account <span className="text-[12px] text-darkgray">(Will be used by User to Login to D-Auto Chain)</span>
                            </label>

                        </div>

                    </div>
                    <div className="relative mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3 ">
                            <label className="block text-[13px] leading-6 text-darkgray">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    required={true}
                                    type="text"
                                    name="username"
                                    autoComplete="username"
                                    placeholder="Enter Username"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    value={formik.values.username}
                                    onChange={handleFormInput}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-[13px] leading-6 text-darkgray">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    required={true}
                                    type="email"
                                    name="emailUser"
                                    autoComplete="username"
                                    placeholder="Enter Username"
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                    value={formik.values.emailUser}
                                    onChange={handleFormInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                                className="text-sm py-3 lg:py-3 rounded-md font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange"
                                disabled={isPending}>
                            {!isPending ? <><FileDownloadOutlinedIcon/>Add Company</> : <><LoadingSpin/>Loading...</>}
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
};

export default FormCompany;