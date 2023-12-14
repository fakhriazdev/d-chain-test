import {
    ChevronLeft as ChevronLeftIcon,
    DeleteOutline as DeleteOutlineIcon,
    FileDownloadOutlined as FileDownloadOutlinedIcon,
    ArticleOutlined as ArticleOutlinedIcon,
    LogoutOutlined as LogoutOutlinedIcon,
    CloseOutlined as CloseOutlinedIcon,
    FileUploadOutlined as FileUploadOutlinedIcon,
  } from "@mui/icons-material";
  import ModalExit from "./ModalExit";
  import { useEffect } from "react";
  import { useState } from "react";
  
  
  export default function SuperUserProfile() {
    const [province, setProvince] = useState(null);
    const [city, setCity] = useState(null);
  
    useEffect(() => {
      const fetchProvince = async () => {
        try {
          // const response = await fetch('/api/provinces.json');
          const result = await response.json();
          setProvince(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchProvince();
    }, []);
  
    const handleProvinceChange = async (provinceId) => {
      fetchCity(provinceId)
    }
  
    const fetchCity = async (provinceId) => {
      try {
        const response = await fetch(`/api/regencies/${provinceId}.json`);
        const result = await response.json();
        setCity(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    return (
      <>
        <div className="flex justify-center flex-col items-center">
          <div className="flex w-3/4">
            <h1 className="text-subtitle ">
              <ChevronLeftIcon /> Profile
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-5 flex-col items-center">
          <div className="flex w-3/4 rounded-2xl shadow-md justify-center flex-col items-center mb-5">
            <form className="w-full p-10">
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
                    placeholder="Goriorio Jaya"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <label className="block text-[18px] font-medium leading-6 text-darkgray mb-2" htmlFor="province">
                    Province
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:ring-orange focus:border-orange"
                      id="province"
                      name="province"
                      onChange={(e) => handleProvinceChange(e.target.value)}
                    >
                      {province && province.length !== 0 ? (
                        province.map((province) => {
                          return(
                            <option key={province.id} value={province.id}>{province.name}</option>
                          )
                        })
                      ) : 'data kosong'}
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-[18px] font-medium leading-6 text-darkgray mb-2" htmlFor="city">
                    City
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:ring-orange focus:border-orange"
                      id="city"
                      name="city"
                    >
                      {city && city.length !== 0 ? (
                        city.map((province) => {
                          return(
                            <option key={province.id} value={province.id}>{province.name}</option>
                          )
                        })
                      ) : 'data kosong'}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block text-[18px] font-medium leading-6 text-darkgray mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:ring-orange focus:border-orange"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Goriorio Jaya"
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
                    placeholder="jane@gmail.com"
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
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-2 justify-between">
                <p className="text-gray">Document_a01.docx</p>
                <span className="flex gap-2">
                  <ArticleOutlinedIcon className="text-gray" />
                  <FileDownloadOutlinedIcon className="text-green" />
                  <DeleteOutlineIcon className="text-red" />
                </span>
              </div>
              <div className="flex flex-wrap mb-2 justify-between">
                <p className="text-gray">Document_a01.docx</p>
                <span className="flex gap-2">
                  <ArticleOutlinedIcon className="text-gray" />
                  <FileDownloadOutlinedIcon className="text-green" />
                  <DeleteOutlineIcon className="text-red" />
                </span>
              </div>
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
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block text-[18px] font-medium leading-6 text-darkgray text-lable text-gray mb-2"
                    htmlFor="phoneNumber"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="*******"
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
                  <button className="text-white bg-orange font-bold w-full h-10 rounded-lg border-2 border-orange hover:bg-orange hover:text-white">
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
          <ModalExit/>
        </div>
      </>
    );
  }
  