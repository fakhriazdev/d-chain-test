import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined.js";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import { ChevronLeftOutlined } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined.js";
import Badge from "../../../../components/Badge";
import IconEdit from "../../../../assets/icons/Icon Edit.svg";
import IconDelete from "../../../../assets/icons/Icon Delete.svg";
import { Link } from "react-router-dom";
const UserListBackoffice = () => {
  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Manage Back-Office User</h1>
        <div>
          <button className="my-auto text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm lg:px-6 py-3 my-auto text-center  ">
            <AddOutlinedIcon /> Add New User
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative flex justify-end mb-5 gap-4 mx-4">
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
                    Role
                    <li>
                      <div className="flex items-center mt-5">
                        <input
                          type="radio"
                          value="Relationship Manager"
                          name="role"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Relationship Manager
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="Admin"
                          name="role"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Admin
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="Credit Analyst"
                          name="role"
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Credit Analyst
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
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  ACtion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <th
                  scope="col-span-4"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                >
                  John Doe
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-orange whitespace-nowrap text-[14px]"
                >
                  astra01@gmail.com
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                >
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    RM
                  </span>
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    Admin
                  </span>
                  <span
                    className={`bg-gray bg-opacity-20 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[2px] border-zinc-300`}
                  >
                    CA
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

export default UserListBackoffice;
