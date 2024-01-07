import { useState } from "react";

export default function ModalChange() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div
      id="modal-change"
      tabIndex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 inset-0 overflow-auto bg-black bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-2 h-full md:p-5 rounded-t dark:border-gray-600">
            <h3 className="text-[18px] ps-10 dark:text-white mt-3">
              Change Method Payment
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white mt-3"
              data-modal-hide="modal-change"
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
          <div className="">
            <div className="ml-52 mt-4">
              <label className="themeSwitcherTwo shadow-card border border-[#D5D5D7] relative inline-flex cursor-pointer select-none items-center justify-center rounded-xl bg-[#F3F4F6] p-1">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                    !isChecked ? "text-white bg-orange" : "text-orange"
                  }`}
                >
                  Auto Debit
                </span>
                <span
                  className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                    isChecked ? "text-white bg-orange" : "text-orange"
                  }`}
                >
                  Bank Transfer
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-6">
              <input
                type="checkbox"
                name="checkbox"
                className="rounded-md checked:bg-lime-600 w-5 h-5"
              />
              <label className="ms-4 text-[14px] font-medium text-gray dark:text-gray-300 text-center">
                I hereby declare that the information provided is true and
                correct.
              </label>
            </div>
          </div>
          <div className="flex justify-end p-5 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="modal-change"
              type="button"
              className="text-orange border-2 w-1/2 md:w-1/3 border-orange hover:bg-orange hover:opacity-80 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <button
              data-modal-hide="modal-change"
              type="button"
              className="ms-3 text-white w-1/2 md:w-1/3 bg-orange hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
