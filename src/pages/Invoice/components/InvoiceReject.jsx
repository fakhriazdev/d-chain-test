import React from "react";
import {
  ChevronLeft as ChevronLeftIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  ArticleOutlined as ArticleOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  CloseOutlined as CloseOutlinedIcon,
  FileUploadOutlined as FileUploadOutlinedIcon,
} from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import rejectPayment from "../../../assets/icons/Icon Reject.svg";


export default function InvoiceReject() {
  return (
    <div>
      <h1 className="text-title">Invoicing Detail - Payable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <h1 className="text-subtitle ">Invoicing</h1>
          <h4>FI-C-36974019-6.23</h4>
          <div className="flex mt-10">
            <h4 className="w-1/4">Invoice Date</h4>
            <h4 className="w-1/4">25-05-23</h4>
            <h4 className="w-2/4"></h4>
          </div>
          <div className="flex">
            <h4 className="w-1/4">Due Date</h4>
            <h4 className="w-1/4">26-06-23</h4>
            <h4 className="w-2/4"></h4>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex mt-10">
              <h4 className="w-1/2">Billed To</h4>
              <h4 className="w-1/2">From</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">Oreo Jaya</h4>
              <h4 className="w-1/2">Goriorio Jaya</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">oreo123@gmail.com</h4>
              <h4 className="w-1/2">goriorio123@gmail.com</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">Medan, Sumatera Utara</h4>
              <h4 className="w-1/2">Batam, Kepulauan Riau</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">+6252828282929</h4>
              <h4 className="w-1/2">+6293983983938</h4>
            </div>
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <td scope="col" class="py-3">
                      Name
                    </td>
                    <td scope="col" class="py-3">
                      Quantity
                    </td>
                    <td scope="col" class=" py-3">
                      Price
                    </td>
                    <td scope="col" class=" py-3">
                      Amount
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class=" py-4">100</td>
                    <td class=" py-4">Laptop</td>
                    <td class=" py-4">$2999</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class=" py-4">120</td>
                    <td class=" py-4">Laptop PC</td>
                    <td class=" py-4">$1999</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800">
                    <th
                      scope="row"
                      class=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class=" py-4">100</td>
                    <td class=" py-4">Accessories</td>
                    <td class=" py-4">$99</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <td></td>
                    <td></td>
                    <td class=" py-4">Total</td>
                    <td class=" py-4">Rp.120.000.000</td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full h-10 bg-red bg-opacity-40 rounded-2xl flex my-auto mx-auto">
                <InfoIcon className="text-red flex my-auto ms-5" />{" "}
                <span className="flex items-center ps-2">
                  This invoice disputed
                </span>
              </div>
              <div className="flex w-full">
                <div className="w-1/2">
                  <h4 className="text-[18px] mt-5 mb-3">Reason</h4>
                  <p className="">Rasanya kurang enak</p>
                  <p className="">Rasanya kurang enak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center gap-2 text-white w-full h-12 bg-red mt-5 rounded-lg">
        <img src={rejectPayment} alt="" className="" />
        <p>Resolve Invoice</p>
      </button>
    </div>
  );
}
