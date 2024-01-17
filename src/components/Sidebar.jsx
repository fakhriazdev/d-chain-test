import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ManageCompanyLogo from "../assets/icons/ManageCompany.svg?react";
import ManageUser from "../assets/icons/Manage User.svg?react";
import DashboardLogo from "../assets/icons/Dashboard.svg?react";
import InvoiceLogo from "../assets/icons/invoice.svg?react";
import { decodeJWT } from "../utils/decodeJWT";
import {
  People,
  Category2,
  Book,
  SliderHorizontal,
  Shapes,
} from "iconsax-react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { children } = props;
  const { company_id, actor, role } = decodeJWT();

  return (
    <>
    {console.log(["SUPER_USER", "INVOICE_STAFF"].some(value => role.includes(value)))}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={logo} className="h-6 me-3" alt="D Auto Change" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-lg "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-10 h-10 rounded-lg"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {company_id}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {actor === "USER" ? (
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray/10 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-4 font-medium">
              <p className="text-darkgray">Menu</p>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                      isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                    }`
                  }
                  to={"/dashboard"}
                  end
                >
                  <Category2 />
                  <span className="ms-3">Dashboard</span>
                </NavLink>
              </li>
              {role.some(
                (item) => item === "INVOICE_STAFF" || item === "SUPER_USER"
              ) ? (
                <li>
                  <NavLink
                    to={"/dashboard/invoice"}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <Book />
                    <span className="ms-3">Invoice</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses invoice")
              )}

              {role.some(
                (item) => item === "FINANCE_STAFF" || item === "SUPER_USER"
              ) ? (
                <li>
                  <NavLink
                    to={`/dashboard/financing`}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <People />
                    <span className="ms-3">Financing</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses finance")
              )}

              {role.some(
                (item) => item === "PAYMENT_STAFF" || item === "SUPER_USER"
              ) ? (
                <li>
                  <NavLink
                    to={`/dashboard/payment`}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <SliderHorizontal />
                    <span className="ms-3">Payment</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses payment")
              )}

              {role.some((item) => item === "SUPER_USER") ? (
                <>
                  <p className="text-darkgray">Others</p>
                  <li>
                    <NavLink
                      to={`/dashboard/user`}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                          isActive
                            ? "bg-orange/20 text-orange"
                            : "text-darkgray"
                        }`
                      }
                    >
                      <Shapes />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Manage User
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/dashboard/partnership`}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                          isActive
                            ? "bg-orange/20 text-orange"
                            : "text-darkgray"
                        }`
                      }
                    >
                      <People />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Partnership
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : (
                console.log("tidak ada akses others")
              )}
            </ul>
          </div>
        </aside>
      ) : (
        //BACKOFFICE
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray/10 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-4 font-medium">
              <p className="text-darkgray">Menu</p>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                      isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                    }`
                  }
                  to={"/backoffice"}
                  end
                >
                  <Category2 />
                  <span className="ms-3">Dashboard</span>
                </NavLink>
              </li>
              {role.some(
                (item) => item === "CREDIT_ANALYST" || item === "SUPER_ADMIN"
              ) ? (
                <li>
                  <NavLink
                    to={"/backoffice/financing"}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <Book />
                    <span className="ms-3">Financing</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses financing")
              )}

              {role.some(
                (item) =>
                  item === "RELATIONSHIP_MANAGER" ||
                  item === "ADMIN" ||
                  item === "CREDIT_ANALYST" ||
                  item === "SUPER_ADMIN"
              ) ? (
                <li>
                  <NavLink
                    to={`/backoffice/company`}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <People />
                    <span className="ms-3">Manage Company</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses manage company")
              )}

              {role.some(
                (item) => item === "ADMIN" || item === "SUPER_ADMIN"
              ) ? (
                <li>
                  <NavLink
                    to={`/backoffice/user`}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg hover:bg-orange/20 hover:text-orange group ${
                        isActive ? "bg-orange/20 text-orange" : "text-darkgray"
                      }`
                    }
                  >
                    <SliderHorizontal />
                    <span className="ms-3">Manage BO User</span>
                  </NavLink>
                </li>
              ) : (
                console.log("tidak ada akses manage bo user")
              )}
            </ul>
          </div>
        </aside>
      )}

      <div className="p-4 sm:ml-64">
        <div className="p-2 md:p-4 lg:p-4 rounded-lg">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
