import React from "react";
import Sidebar from "../../../components/Sidebar";
import IconSearch from "../../../assets/icons/Icon Search.svg";
import { ChevronLeftOutlined } from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { decodeJWT } from "../../../utils/utility";
import { Formik, useFormik } from "formik";
import { useEffect } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../../slices/userSlice";

export default function Management() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useSearchParams();
  const { invoiceService, userService } = useContext(ServiceContext);
  const { id } = useParams();

  const [partnerships, setPartnerships] = useState([]);

  const [paging, setPaging] = useState({});

  const currentPage = parseInt(searchParam.get("page") || 1);
  const currentSize = parseInt(searchParam.get("size") || 10);

  const onNext = (page) => {
    if (page === paging.totalPages) return;
    searchParam.set("page", page + 1);
    setSearchParam(searchParam);
  };

  const onPrevious = (page) => {
    if (page === 1) return;
    searchParam.set("page", page - 1);
    setSearchParam(searchParam);
  };

  const { company_id } = decodeJWT();

  const {
    values: { username, name, email, access, companyIds },
    errors,
    dirty,
    isValid,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      userId: null,
      username: "",
      name: "",
      email: "",
      access: [],
      companyIds: [],
    },
    onSubmit: async (values) => {
      console.log(values);
      if (id === undefined) {
        dispatch(
          userAction(async () => {
            console.log(id === undefined);
            const result = await userService.saveUser({
              username,
              name,
              email,
              access,
              companyIds,
            });
            navigate("/dashboard/user");
            alert(result.message);
            // alert(result.message);
            return null;
          })
        );
        return;
      }

      dispatch(
        userAction(async () => {
          console.log("masuk updae");

          const result = await userService.updateUser(values);
          navigate("/dashboard/user");
          alert(result.message);

          return null;
        })
      );
    },
  });

  useEffect(() => {
    if (id !== undefined) {
      dispatch(
        userAction(async () => {
          const result = await userService.fetchUserById(id);
          const updatedData = {
            ...result.data,
          };

          const values = {
            userId: updatedData.userId,
            username: updatedData.username,
            name: updatedData.name,
            email: updatedData.email,
            access: updatedData.access,
            companyIds: updatedData.companyIds,
          };
          setValues(values);

          return null;
        })
      );
    }
  }, [dispatch, id, setValues, userService]);

  useEffect(() => {
    if (partnerships.length === 0) {
      const getPartnerships = async () => {
        try {
          const data = await invoiceService.fetchPartnership(company_id, {
            page: currentPage,
            size: currentSize,
          });
          setPartnerships(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getPartnerships();
    }
  });

  const handeChangeAccess = (e) => {
    setValues((prevValues) => {
      const updatedAccess = prevValues.access.includes(e.target.value)
        ? prevValues.access.filter((acc) => acc !== e.target.value)
        : [...prevValues.access, e.target.value];

      return {
        ...prevValues,
        access: updatedAccess,
      };
    });
  };

  console.log(access);

  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">{id ? "Edit User" : "Add User"}</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="p-6"
          encType="multipart/form-data"
        >
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label className="block mb-2 text-[18px] font-medium">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={username}
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block mb-2 text-[18px] font-medium">Name</label>
              <div className="mt-2 flex">
                <input
                  type="text"
                  name="name"
                  placeholder="User"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={name}
                  //   min={currentDate}
                />
                {/* <img src={IconCalender} alt="" className="absolute" /> */}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block mb-2 text-[18px] font-medium">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="user@email.com"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={email}
                />
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-[18px] font-medium leading-6">
                Access
              </label>
              <div className="mt-2 gap-y-2 flex flex-col">
                <div>
                  <input
                    type="checkbox"
                    name="access"
                    onChange={handeChangeAccess}
                    value={"INVOICE_STAFF"}
                    checked={access.includes("INVOICE_STAFF")}
                    className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                  />
                  <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                    Invoicing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="access"
                    onChange={handeChangeAccess}
                    value={"FINANCE_STAFF"}
                    checked={access.includes("FINANCE_STAFF")}
                    className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                  />
                  <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                    Financing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="access"
                    onChange={handeChangeAccess}
                    value={"PAYMENT_STAFF"}
                    checked={access.includes("PAYMENT_STAFF")}
                    className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                  />
                  <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                    Payment
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-[18px] font-medium leading-6">
                Company
              </label>
              <div className="mt-2 gap-y-2 flex flex-col">
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
                {partnerships &&
                  partnerships.length !== 0 &&
                  partnerships.map((partnership) => {
                    return (
                      <div key={partnership.partnershipId}>
                        <input
                          type="checkbox"
                          name="companyIds"
                          onChange={handleChange}
                          value={partnership.partner.companyId}
                          className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                        />
                        <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                          {partnership.partner.companyName}
                        </label>
                      </div>
                    );
                  })}

                <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
                  <p className="my-auto">
                    Showing {paging.page} to {paging.size} of {paging.count}{" "}
                    entries
                  </p>

                  <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
                      <li className={`${currentPage == 1 && "disabled"}`}>
                        <button
                          onClick={() => onPrevious(currentPage)}
                          className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                        >
                          <ChevronLeftOutlined />
                          <span className="sr-only">Previous</span>
                        </button>
                      </li>
                      {Array(paging.totalPages)
                        .fill(null)
                        .map((_, idx) => {
                          const page = ++idx;
                          return (
                            <li key={page}>
                              <Link
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange page-link ${
                                  currentPage == page &&
                                  "bg-gray/20 text-orange font-bold"
                                }`}
                                to={`/user/invoice?page=${page}&size=${currentSize}`}
                              >
                                {page}
                              </Link>
                            </li>
                          );
                        })}
                      <li
                        className={`${
                          currentPage >= paging.totalPages && "disabled"
                        }`}
                      >
                        <button
                          onClick={() => onNext(currentPage)}
                          className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                        >
                          <ChevronRightOutlinedIcon />
                          <span className="sr-only">Next</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              // disabled={!isValid || !dirty}
              className="text-[18px] py-3 lg:py-5 rounded-lg font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange flex justify-center gap-3"
            >
              {/* <img src={IconUpload} alt="Icon Upload" /> */}
              {id ? "Edit User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
