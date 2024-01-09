import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined.js";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import { ChevronLeftOutlined } from "@mui/icons-material";
import IconSearch from "../../../../assets/icons/Icon Search.svg";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
import Badge from "../../../../components/Badge";
import IconEdit from "../../../../assets/icons/Icon Edit.svg";
import IconDelete from "../../../../assets/icons/Icon Delete.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserList = () => {
  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Manage User</h1>
        <div>
          <button className="my-auto text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm lg:px-6 py-3 my-auto text-center  ">
            <AddOutlinedIcon /> Add New User
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative flex justify-between mb-5 gap-4 mx-4">
          <form>
            <div className="flex items-center py-2">
              <input
                className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12 "
                id="email"
                type="text"
                placeholder="Search..."
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
          <div className="flex items-center space-x-4">
            <p className="mt-3">Filter By:</p>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdownDefaultRadio"
              className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-3 py-1 text-center mt-3"
              type="button"
            >
              <ExpandMoreOutlinedIcon className="my-auto" />
            </button>
          </div>
          <div
            id="dropdownDefaultRadio"
            className={`divide-y hidden bg-white border border-orange divide-gray-100 rounded-lg shadow w-1/5 relative z-10`}
          >
            <form>
              <div className="flex">
                <div className="w-2/5">
                  <ul
                    className="p-3  mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200 ml-10"
                    aria-labelledby="dropdownRadioButton"
                  >
                    Access
                    <li>
                      <div className="flex items-center mt-5">
                        <input
                          type="radio"
                          value="Invoicing"
                          name="access"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Invoicing
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="Financing"
                          name="access"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Financing
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="Payment"
                          name="access"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Payment
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex space-x-5 justify-center mb-4 mt-4">
                <button
                  type="button"
                  id="dropdownDefaultButton"
                  data-bs-dismis="dropdownDefaultRadio"
                  className="bg-gray/20 hover:bg-gray/20 text-zinc-800 py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange hover:bg-orange text-white py-2 px-4 rounded"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative overflow-x-auto mx-4 sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right mb-2">
            <thead className="text-white text-[16px] font-[300] bg-orange ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Access
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <th
                  scope="col-span-4"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                >
                  admin_a1
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                >
                  Jeremy
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-orange whitespace-nowrap text-[14px]"
                >
                  jeremy01@gmail.com
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                >
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    Invoicing
                  </span>
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    Payment
                  </span>
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    Financing
                  </span>
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px] flex space-x-3"
                >
                  <button>
                    <img src={IconEdit} alt="Icon View" />
                  </button>
                  <button>
                    <img src={IconDelete} alt="Icon Download" />
                  </button>
                </th>
              </tr>
              {/* <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                  Payment Not Found...
                  </td>
                </tr> */}
            </tbody>
          </table>
        </div>
        <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
          <p className="my-auto">Showing 1 to 1 of 1 entries</p>

          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
              <li>
                <button className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange">
                  <ChevronLeftOutlined />
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              <li>
                <Link
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange page-link`}
                >
                  1
                </Link>
              </li>
              <li>
                <button className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange ">
                  <ChevronRightOutlinedIcon />
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default UserList;
