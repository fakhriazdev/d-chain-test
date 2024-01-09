import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import IconSearch from "../../../../assets/icons/Icon Search.svg";
import { useEffect } from "react";

export default function RequestFinancingReceivable() {
  const {
    values: { request },
    errors,
    dirty,
    isValid,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik(
    {
      initialValues: {
        request: [
          {
            invoice_number: "",
            amount: 0,
            disbursment_date: "",
            percentage: 0,
          },
        ],
      },
      // onSubmit: async (values) => {
      //   const resultAmount = values.itemList.map((item, idx) => {
      //     return item.itemsQuantity * item.unitPrice;
      //   });
      //   const totalAmount = resultAmount.reduce(
      //     (acc, currentValue) => acc + currentValue,
      //     0
      //   );
      //   const stringifyData = JSON.stringify(values.itemList);
      //   const dataInvoice = {
      //     recipientId: values.recipientId,
      //     dueDate: values.dueDate,
      //     invDate: values.invDate,
      //     amount: totalAmount,
      //     itemList: stringifyData,
      //   };
    }
    // validationSchema: schema,
    //   }
  );

  useEffect

  const handleAddItem = () => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        request: [
          ...prevValues.request,
          {
            invoice_number: "",
            amount: 0,
            disbursment_date: "",
            percentage: 0,
          },
        ],
      };
    });
  };

  return (
    <div>
      <h1 className="text-title">Request Financing - Receivable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <h1 className="text-subtitle ">Select Invoice</h1>
          <form action="">
            {request.map((item, idx) => (
              <div key={idx} className="mb-5">
                {console.log(item.percentage)}
                <div className="flex items-center">
                  <div className="w-1/2">
                    <h4>FI-C-36974019-6.23</h4>
                  </div>
                  <div className="w-1/2 text-end">
                    <button
                      type="button"
                      data-modal-target="modal-invoice-list"
                      data-modal-toggle="modal-invoice-list"
                      className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                    >
                      Select Invoice
                    </button>
                  </div>
                </div>
                <h1 className="text-subtitle mt-5">Financing Amount</h1>
                <div className="flex w-full gap-3">
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Disbursement Date
                    </label>
                    <input
                      required={true}
                      type="date"
                      name="companyEmail"
                      autoComplete="email"
                      placeholder="Enter Company Email"
                      className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Amount
                    </label>
                    <input
                      required={true}
                      type="number"
                      name="amount"
                      className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                      disabled
                      value={item.percentage}
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Percentage
                    </label>
                    <input
                      type="range"
                      name="percentage"
                      id="percentage"
                      className="w-full py-3"
                      min={1}
                      max={100}
                      step={1}
                      value={item.percentage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full">
              <button
                required={true}
                type="date"
                name="companyEmail"
                autoComplete="email"
                onClick={handleAddItem}
                placeholder="Enter Company Email"
                className="block rounded-md py-3 text-orange shadow-sm w-full border-2 border-dotted mt-3 font-bold border-orange"
              >
                + Add Invoice
              </button>
            </div>
          </form>
        </div>
        <div className=" w-full rounded-2xl shadow-md min-h-fit mt-10 p-10"></div>
      </div>
      {/* MODAL */}
      <div
        id="modal-invoice-list"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 inset-0 overflow-auto bg-black bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 h-full md:p-5 rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal-reject"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <form>
              <div className="">
                <h3 className="text-xl font-semibold ps-10 text-gray-900 dark:text-white">
                  Select Invoice
                </h3>
                <div className="flex justify-end me-10">
                  <form>
                    <div className="flex items-center py-2">
                      <input
                        className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12 "
                        id="email"
                        type="text"
                        placeholder="Search..."
                        // onChange={handleSearch}
                        // value={searchTerm}
                      />
                      <img
                        src={IconSearch}
                        className="absolute ml-5"
                        alt="Search Icon"
                      />
                      <button
                        className="bg-orange text-white rounded-r-lg focus:outline-none focus:shadow-outline w-24 h-11 disabled:bg-opacity-70"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <h4 className="text-lable ps-10 pt-5">Write your reason</h4>
                <div className="mx-10">
                  <select
                    name="reasonType"
                    id="reasonType"
                    className="w-full rounded-md"
                  >
                    <option value="balbaalala" disabled selected hidden>
                      Why do you want to reject this invoice?
                    </option>
                    <option value="Quantity Discrepancies">
                      Quantity Discrepancies
                    </option>
                    <option value="Price Discrepancies">
                      Price Discrepancies
                    </option>
                    <option value="Quality Issues">Quality Issues</option>
                    <option value="Others">Others</option>
                  </select>
                  <textarea
                    name="reason"
                    id="reason"
                    className="mt-2 w-full rounded-md h-40"
                    placeholder="What is your reason?"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center p-5 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="modal-reject"
                  type="button"
                  className="text-orange border-2 w-1/2 md:w-1/3 border-orange hover:bg-orange hover:opacity-80 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cancel
                </button>
                <button
                  data-modal-hide="modal-reject"
                  type="submit"
                  className="ms-3 text-white w-1/2 md:w-1/3 bg-orange hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* END MODAL */}
    </div>
  );
}
