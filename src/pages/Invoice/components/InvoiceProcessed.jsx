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
import html2pdf from 'html2pdf.js';

export default function InvoiceProcessed() {


 const handlePrint = () => {
  const element = document.getElementById('pdf-content');
  const options = {
    margin: 10,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' },
    ignoreElements: (element) => {
      // Ignore the button with the id 'excludeButton'
      return element.id === 'excludeButton';
    },
  };

  html2pdf(element, options);
 }

  return (
    <div>
      <h1 className="text-title">Invoicing Detail - Payable</h1>

      <div id="pdf-content" className="flex justify-center mt-5 flex-col items-center">
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

              <div className="w-full h-10 bg-blue bg-opacity-50 rounded-2xl flex my-auto mx-auto">
                <InfoIcon className="text-blue flex my-auto ms-5" />{" "}
                <span className="flex items-center ps-2">
                  This invoice is paid using 2 payments
                </span>
              </div>
              <div className="flex w-full">
                <div className="w-1/2">
                  <h4 className="text-[18px] mt-5">Financing By Danamon</h4>
                  <p className="flex mb-3 mt-3">
                    <span className="w-1/3">Amount</span>
                    <span className="w-1/3 text-orange font-bold">
                      Rp 120.000.000
                    </span>
                  </p>
                  <p className="flex">
                    <p className="w-1/3">Financing Number</p>
                    <p className="w-1/3 text-gray">FI-C-36974019-6.23</p>
                  </p>
                  <button id="excludeButton" className="border-2 border-orange w-36 rounded-lg text-orange hover:bg-orange hover:text-white h-10 mt-5">
                    Financing Detail
                  </button>
                </div>
                <div className="w-1/2">
                  <h4 className="text-[18px] mt-5">Bank Transfer</h4>
                  <p className="flex mb-3 mt-3">
                    <span className="w-1/3">Amount</span>
                    <span className="w-1/3 text-orange font-bold">
                      Rp 100.000.000
                    </span>
                  </p>
                  <p className="flex mb-3">
                    <p className="w-1/3">Due Date</p>
                    <p className="w-1/3 text-gray">17 November 2023</p>
                  </p>
                  <p className="flex">
                    <p className="w-1/3">Transaction Number</p>
                    <p className="w-1/3 text-gray">FI-C-36974019-6.23</p>
                  </p>
                  <button id="excludeButton" className="border-2 border-orange w-36 rounded-lg text-orange hover:bg-orange hover:text-white h-10 mt-5">
                    Payment Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-orange rounded-lg mt-5 p-3 hover:bg-opacity-70" onClick={handlePrint}>print test</button>
    </div>
  );
}
