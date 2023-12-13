import React from "react";
import {
  ChevronLeft as ChevronLeftIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  ArticleOutlined as ArticleOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  CloseOutlined as CloseOutlinedIcon,
  FileUploadOutlined as FileUploadOutlinedIcon,
} from "@mui/icons-material";
import proceedPayment from "../../../assets/icons/Icon Proceed Payment.svg";
import rejectPayment from "../../../assets/icons/Icon Reject.svg";
import ModalReject from "./ModalReject";

export default function InvoiceDetail() {
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
                  <tr class="bg-white  dark:bg-gray-800">
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>Rp.120.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-full mt-5 mb-3 gap-">
          <div className="w-full md:w-1/2 md:pr-2 px-0 mb-2">
            <button
              data-modal-target="modal-reject"
              data-modal-toggle="modal-reject"
              type="button"
              className="flex justify-center items-center gap-2 text-white font-bold w-full h-12 rounded-lg border-2 bg-red border-red  hover:bg-orange hover:text-white"
            >
              <img src={rejectPayment} alt="" className="" />
              <p>Reject Invoice</p>
            </button>
          </div>
          <div className="w-full md:w-1/2 md:pl-2 pl-0 mb-2">
            <button className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg border-2 border-green hover:bg-orange hover:text-white">
              <img src={proceedPayment} alt="" className="" />
              <p>Proceed Payment</p>
            </button>
          </div>
        </div>
        <ModalReject/>
      </div>
    </div>
  );
}
