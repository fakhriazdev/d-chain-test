import React, {useEffect, useState} from 'react';
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined.js";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined.js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined.js";
import {useFetchLocations} from "../../../../features/locations/useFetchLocations.js";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {useFetchCompany} from "../../../../features/company/useFetchCompany.js";
import {useEditCompany} from "../../../../features/company/useEditCompany.js";
import { useNavigate } from 'react-router-dom';
import {toast, Toaster} from "react-hot-toast";


const EditCompany = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {province,city,handleChooseProvince} = useFetchLocations()
    const { company, isLoading } = useFetchCompany(params.id);

    useEffect(() => {
        formik.setValues({
            id: company?.companyId || '',
            accountNumber: company?.accountNumber || '',
            companyName: company?.companyName || '',
            province:company?.province || '',
            city:company?.city|| '',
            address:company?.address|| '',
            companyEmail:company?.companyEmail|| '',
            phoneNumber:company?.phoneNumber|| '',
            files:company?.files[0] ||{},
            username:company?.username|| '',
            financingLimit:company?.financingLimit|| 20000000,
            remainingLimit:company?.remainingLimit|| 20000000,
            emailUser:company?.emailUser|| "",
            isGeneratePassword: false,
        });
    }, [company]);

    const formik = useFormik({
        initialValues: {
            id: company?.companyId || '',
            accountNumber: company?.accountNumber || '',
            companyName: company?.companyName || '',
            province: company?.province || '',
            city: company?.city || '',
            address: company?.address || '',
            companyEmail: company?.companyEmail || '',
            phoneNumber: company?.phoneNumber || '',
            files: company?.files[0] || null,
            username: company?.username || '',
            emailUser: company?.emailUser || "",
            isGeneratePassword: false,
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const {
                id,
                accountNumber,
                companyName,
                province,
                city,
                address,
                companyEmail,
                phoneNumber,
                files,
                username,
                emailUser,
                isGeneratePassword
            } = values;


                const formData = new FormData();
                formData.append('id', id);
                formData.append('accountNumber', accountNumber);
                formData.append('companyName', companyName);
                formData.append('province', province);
                formData.append('city', city);
                formData.append('address', address);
                formData.append('companyEmail', companyEmail);
                formData.append('phoneNumber', phoneNumber);
                formData.append("files", files);
                formData.append('username', username);
                formData.append("emailUser", emailUser);
                formData.append("isGeneratePassword", isGeneratePassword);
                mutate(formData)
        },
    });

    const { mutate, isPending } = useEditCompany({
        onSuccess: () => {
            toast.success(`Success editing company`);
            setTimeout(() => {
                navigate('/backoffice/company');
            }, 2000);
        },
        onError: (error) => {
                toast.error(`Error editing company: ${error.message}`, {
                    icon: '❌',
                });
        },
    });
    if (isPending) {
        toast.promise(
            new Promise((resolve) => {
                // Simulate loading
                setTimeout(() => {
                    resolve('Saving changes...');
                }, 1000);
            }),
            {
                loading: 'Saving changes...',
                icon: '⏳', // Customize the loading icon
            }
        );
    }
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

    const handleGeneratePassword = ()=>{
        formik.setFieldValue('isGeneratePassword', !formik.values.isGeneratePassword)
    }

    const handleDeleteDoc = () =>{
        formik.setFieldValue('files',{})
        // const filtered = formik.values.files.filter((_, index) => index !== id);
        // formik.setFieldValue('files', filtered);
    }

    console.log(formik.values)
    return (
        <>
            <div><Toaster/></div>
            <div className="relative flex justify-start mb-6 mx-4">
                <h1 className="text-title my-auto">Edit Company</h1>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <form className="p-6" encType="multipart/form-data" onSubmit={formik.handleSubmit}>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="companyName"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleFormInput}
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    autoComplete="companyName"
                                    placeholder="Enter Company Name"
                                    defaultValue={formik.values.companyName}
                                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                className="block mb-2 text-[18px] font-medium text-gray">
                                Province</label>
                            <select
                                onChange={handleFormInput}
                                name="province"
                                placeholder="province"
                                className="rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                            >
                                <option defaultValue={formik.values.province}>{formik.values.province}</option>
                                {province.map((p) => {
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
                                onChange={handleFormInput}
                                name="city"
                                className="rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                            >
                                <option defaultValue={formik.values.city}>{formik.values.city}</option>
                                {city.map((c) => {
                                    return (
                                        <option value={c.name} key={c.id}>{c.name}</option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleFormInput}
                                    defaultValue={formik.values.address}
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
                            <label htmlFor="emailCompany"
                                   className="block text-[18px] font-medium leading-6 text-darkgray">
                                Company Email
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleFormInput}
                                    defaultValue={formik.values.companyEmail}
                                    type="email"
                                    name="companyEmail"
                                    id="companyEmail"
                                    autoComplete="emailCompany"
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
                                    onChange={handleFormInput}
                                    defaultValue={formik.values.phoneNumber}
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
                    {formik.values.files?.filename !== undefined || formik.values.files?.name !== undefined ?
                        <div className="mt-3 flex mx-6 gap-y-8 justify-between mb-12">
                            <p className="text-[14px] text-gray-900 my-auto">{formik.values?.files?.filename} {formik.values?.files?.name}</p>
                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    <span
                                        className="cursor-pointer text-green hover:text-green/50"><FileDownloadOutlinedIcon/></span>
                                    <span className="cursor-pointer text-red hover:text-red/50"
                                          onClick={handleDeleteDoc}><DeleteOutlinedIcon/></span>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    }


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
                                    onChange={handleFormInput}
                                    defaultValue={formik.values.username}
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
                            <button type="button"
                                    onClick={handleGeneratePassword}
                                    className={`text-sm font-normal mt-2 py-3 md:py-1 lg:py-3 rounded-md w-full ${formik.values.isGeneratePassword ? 'bg-white text-orange border-orange' : `bg-orange text-white border-white`} border-2`}>
                                {formik.values.isGeneratePassword ? "Generated" : "Generate Password"}
                            </button>
                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                                className="text-sm py-3 lg:py-3 rounded-md font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange">
                            <FileDownloadOutlinedIcon/>Save Company
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default EditCompany;