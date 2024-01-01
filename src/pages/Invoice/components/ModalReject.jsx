import { useEffect, useContext, useState } from "react";

export default function ModalReject({rejectInvoice}) {
  const [reasonType, setReasonType] = useState("");
  const [reason, setReason] = useState("");

  return (
    <div
      id="modal-reject"
      tabIndex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 inset-0 overflow-auto bg-black bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      {console.log(reasonType)}
      {console.log(reason)}
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
          <form onSubmit={() => rejectInvoice()}>
            <div className="">
              <h3 className="text-xl font-semibold ps-10 text-gray-900 dark:text-white">
                Sure you want to reject this invoice?
              </h3>
              <h4 className="text-lable ps-10 pt-5">Write your reason</h4>
              <div className="mx-10">
                <select
                  name="reasonType"
                  id="reasonType"
                  className="w-full rounded-md"
                  onChange={(e) => setReasonType(e.target.value)}
                >
                  <option value="balbaalala" disabled selected hidden>
                    Why do you want to reject this invoice?
                  </option>
                  <option value="Quantity Discrepancies">Quantity Discrepancies</option>
                  <option value="Price Discrepancies">Price Discrepancies</option>
                  <option value="Quality Issues">Quality Issues</option>
                  <option value="Others">Others</option>
                </select>
                <textarea
                  name="reason"
                  id="reason"
                  className="mt-2 w-full rounded-md h-40"
                  onChange={(e) => setReason(e.target.value)}
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
  );
}
