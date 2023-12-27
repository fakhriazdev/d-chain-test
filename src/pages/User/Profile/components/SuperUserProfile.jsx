import {
  ChevronLeft as ChevronLeftIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  ArticleOutlined as ArticleOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  CloseOutlined as CloseOutlinedIcon,
  FileUploadOutlined as FileUploadOutlinedIcon,
} from "@mui/icons-material";
import ModalExit from "./ModalExit";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ServiceContext } from "../../../../context/ServiceContext";
import {
  companyAction,
  selectCompanyAction,
  downloadFile,
} from "../../../../slices/companySlice";
import { authAction, forgetAction } from "../../../../slices/authSlice";
import { useContext } from "react";
import { useFormik } from "formik";
import validationSchema from './validationSchema';
import { Link } from "react-router-dom";
import PDFViewer from "../../../../utils/PDFViewer";

export default function SuperUserProfile() {
  const [listProvince, setListProvince] = useState(null);
  const [listCity, setListCity] = useState(null);
  const dispatch = useDispatch();
  const { selectedCompany } = useSelector((state) => state.companies);
  const { companyService, authService } = useContext(ServiceContext);
  const { companyId } = useParams();
  const navigate = useNavigate();
  let selectedProvince;

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const response = await fetch("/api/locations/provinces");
        const result = await response.json();
        setListProvince(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProvince();
  }, []);

  const handleProvinceChange = (provinceId) => {
    fetchCity(provinceId);
  };

  const fetchCity = async (provinceId) => {
    try {
      const response = await fetch(`/api/locations/city/${provinceId}`);
      const result = await response.json();
      setListCity(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const {
    values: {
      id,
      companyName,
      province,
      city,
      address,
      phoneNumber,
      companyEmail,
      files,
      username,
      emailUser,
      oldPassword,
      newPassword,
      confirmNewPassword,
    },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      id: "",
      companyName: "",
      province: "",
      city: "",
      address: "",
      phoneNumber: "",
      companyEmail: "",
      files: "",
      userId: "",
      username: "",
      emailUser: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: async (values) => {
      if (!isValid) return;
      if (oldPassword && confirmNewPassword) {
        dispatch(
          forgetAction(async () => {
            const result = await authService.changePassword({
              email: emailUser,
              oldPassword,
              newPassword,
            });
            if (result.statusCode === 201) {
              alert(result.data);
            }
            return null;
          })
        );
      }
      dispatch(
        companyAction(async () => {
          const result = await companyService.updateCompany(values);
          if (result.statusCode === 200) {
            alert(result.message);
          }
          return null;
        })
      );
    },
    validationSchema: validationSchema,
  });

  useEffect(() => {
    const onGetCompanyById = () => {
      dispatch(
        selectCompanyAction(async () => {
          const result = await companyService.fetchCompanyById(companyId);
          const updatedData = {
            ...result.data,
          };

          const values = {
            id: companyId,
            companyName: updatedData.companyName,
            province: updatedData.province,
            city: updatedData.city,
            address: updatedData.address,
            phoneNumber: updatedData.phoneNumber,
            companyEmail: updatedData.companyEmail,
            accountNumber: updatedData.accountNumber,
            files: updatedData.files,
            userId: updatedData.userId,
            username: updatedData.username,
            emailUser: updatedData.emailUser,
          };
          setValues(values);

          return null;
        })
      );
    };
    onGetCompanyById();
  }, []);

  const handleDownload = (idx) => {
    window.location.href = files[idx].url;
  };

  const handlePreview = (idx) => {
    // <PDFViewer pdfUrl={files[idx].url} />;
    navigate("/pdf");
  };

  return (
    <>
      {console.log(errors)}
      {province && listCity === null ? handleProvinceChange(province) : ""}

      <div className="flex justify-center flex-col items-center">
        <div className="flex w-3/4">
          <h1 className="text-subtitle ">
            <ChevronLeftIcon /> Profile
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-5 flex-col items-center">
        <div className="flex w-3/4 rounded-2xl shadow-md justify-center flex-col items-center mb-5">
          <form className="w-full p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="companyName"
                >
                  Conpany Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:ring-orange focus:border-orange"
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="province"
                >
                  Province
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:ring-orange focus:border-orange"
                    id="province"
                    name="province"
                    value={province}
                    onChange={handleChange}
                  >
                    {listProvince && listProvince.length !== 0
                      ? listProvince.map((listProvince) => {
                          return (
                            <option
                              key={listProvince.id}
                              value={listProvince.id}
                              // onClick={()=>handleProvinceChange(listProvince.id)}
                            >
                              {listProvince.name}
                            </option>
                          );
                        })
                      : "data kosong"}
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:ring-orange focus:border-orange"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleChange}
                  >
                    {listCity && listCity.length !== 0
                      ? listCity.map((listCity) => {
                          return (
                            <option key={listCity.id} value={listCity.id}>
                              {listCity.name}
                            </option>
                          );
                        })
                      : "data kosong"}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:ring-orange focus:border-orange"
                  id="address"
                  name="address"
                  type="text"
                  value={address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="companyEmail"
                >
                  Company Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="companyEmail"
                  name="companyEmail"
                  type="text"
                  value={companyEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="+628133878787"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            {files && files.length !== 0
              ? files.map((file, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex flex-wrap mb-2 justify-between"
                    >
                      <p className="text-gray">{file.filename}</p>
                      <span
                        className="flex gap-2"
                        onClick={() => handleDownload(idx)}
                      >
                        <ArticleOutlinedIcon className="text-gray" />
                        <FileDownloadOutlinedIcon className="text-green" />
                      </span>
                    </div>
                  );
                })
              : "data kosong"}

            <label
              className="block text-[18px] font-medium leading-6 text-darkgray mb-1 mt-5"
              htmlFor="companyEmail"
            >
              User Account
            </label>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                  htmlFor="companyEmail"
                >
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Jane"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                  htmlFor="phoneNumber"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="budiono@gmail.com"
                  value={emailUser}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label
              className="block text-[18px] font-medium leading-6 text-darkgray mb-1 mt-5"
              htmlFor="companyEmail"
            >
              Change Password
            </label>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                  htmlFor="companyEmail"
                >
                  Current Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                  htmlFor="phoneNumber"
                >
                  New Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                  htmlFor="phoneNumber"
                >
                  Confirm New Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-2">
                <button className="text-orange font-bold w-full h-10 rounded-lg border-2 border-orange hover:bg-orange hover:text-white">
                  <CloseOutlinedIcon /> Cancle
                </button>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2">
                <button
                  type="submit"
                  className="text-white bg-orange font-bold w-full h-10 rounded-lg border-2 border-orange hover:bg-orange hover:text-white"
                >
                  <FileUploadOutlinedIcon /> Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex w-3/4 px-3 justify-center flex-col items-center mb-10">
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            className="text-orange font-bold w-full md:w-1/2 h-10 rounded-lg border-2 border-orange hover:bg-orange hover:text-white"
          >
            <LogoutOutlinedIcon /> Logout
          </button>
        </div>
        <ModalExit />
      </div>
    </>
  );
}
