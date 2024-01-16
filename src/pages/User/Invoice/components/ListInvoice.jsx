import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined.js";
import { ChevronLeftOutlined } from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import Badge from "../../../../components/Badge.jsx";
import InvoiceGenerationButton from "../../../../assets/icons/Icon Invoice Generation Button.svg";
import IconDownload from "../../../../assets/icons/Icon Download.svg";
import IconView from "../../../../assets/icons/View.svg";
import IconSearch from "../../../../assets/icons/Icon Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../../../context/ServiceContext.jsx";
import { invoiceAction } from "../../../../slices/invoiceSlice.js";
import { Link, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { toTitleCase } from "../../../../utils/utility.js";

const ListInvoice = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const dispatch = useDispatch();
  const { invoices } = useSelector((state) => state.invoice);
  const { invoiceService } = useContext(ServiceContext);
  const [paging, setPaging] = useState({});

  console.log(invoices);

  const currentPage = parseInt(searchParam.get("page") || 1);
  const currentSize = parseInt(searchParam.get("size") || 10);

  const statusOptions = [
    "Pending",
    "Unpaid",
    "Paid",
    "Late-Unpaid",
    "Late-Paid",
    "Disputed",
    "Cancelled",
  ];

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

  const formik = useFormik({
    initialValues: {
      status: "",
      type: "payable",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        invoiceAction(async () => {
          const result = await invoiceService.fetchInvoices({
            page: currentPage,
            size: currentSize,
            direction: "asc",
            type: values.type,
            status: values.status,
          });
          console.log(result);
          if (result) {
            setPaging(result.paging);
            const data = result.data;
            console.log(data);
            return { data };
          }
        })
      );
    },
  });

  useEffect(() => {
    const onGetInvoices = () => {
      try {
        dispatch(
          invoiceAction(async () => {
            const result = await invoiceService.fetchInvoices({
              page: currentPage,
              size: currentSize,
              direction: "asc",
              type: "payable",
              status: null,
            });
            console.log(result.paging);
            if (result) {
              setPaging(result.paging);
              const data = result.data;
              console.log(data);
              return { data };
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    onGetInvoices();
  }, [dispatch, invoiceService, currentPage, currentSize]);

  useEffect(() => {
    if (currentPage < 1 || currentPage > paging.totalPages) {
      const newSearchParam = new URLSearchParams(searchParam);
      newSearchParam.set("page", 1);
      setSearchParam(newSearchParam.toString());
    }
  }, [currentPage, paging.totalPages, searchParam, setSearchParam]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    let checked = "";
    if (!isChecked) {
      formik.setValues({
        type: "receivable",
      });
      checked = "receivable";
    } else {
      formik.setValues({
        type: "payable",
      });
      checked = "payable";
    }
    console.log(checked);

    dispatch(
      invoiceAction(async () => {
        const result = await invoiceService.fetchInvoices({
          page: currentPage,
          size: currentSize,
          direction: "asc",
          type: checked,
          status: null,
        });
        console.log(result);
        return result;
      })
    );
  };

  const [searchTerm, setSearchTerm] = useState("");
  const data = invoices.data;
  const filterInvoices = searchTerm
    ? data.filter((item) =>
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Invoice</h1>
        <div>
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
              Account Payable
            </span>
            <span
              className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                isChecked ? "text-white bg-orange" : "text-orange"
              }`}
            >
              Account Receivable
            </span>
          </label>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative flex justify-between mb-5 gap-4 mx-4">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center py-2"
          >
            <input
              className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12"
              id="search"
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              value={searchTerm}
            />
            <img src={IconSearch} className="absolute ml-5" alt="Search Icon" />
            <button
              className="bg-orange text-white rounded-r-lg focus:outline-none focus:shadow-outline w-24 h-11 disabled:bg-opacity-70"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-3 py-1 text-center mt-3"
              type="button"
              onClick={toggleDropdown}
            >
              Filter
              <ExpandMoreOutlinedIcon className="my-auto" />
            </button>
            <div className="flex space-x-7">
              <Link to={"/user/invoice/add"}>
                <button
                  type="button"
                  className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm lg:px-6 py-3 my-auto text-center flex space-x-2 items-center"
                >
                  <img
                    src={InvoiceGenerationButton}
                    alt="Icon Invoice Generation Button"
                  />
                  <p>Invoice Generation</p>
                </button>
              </Link>
            </div>
          </div>
          <div
            id="dropdown"
            className={`z-20 ${
              isDropdownOpen ? "block" : "hidden"
            } bg-white divide-y border border-orange divide-gray-100 rounded-lg shadow w-60`}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="">
                <ul
                  className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200 ml-10"
                  aria-labelledby="dropdownRadioButton"
                >
                  Status
                  {statusOptions.map((status) => (
                    <li key={status}>
                      <div className="flex items-center mt-3">
                        <input
                          type="radio"
                          value={status}
                          name="status"
                          checked={formik.values.status === status}
                          onChange={formik.handleChange}
                          className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                        />
                        <label
                          htmlFor={`radio-${status}`}
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {status}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-5 justify-end mr-4 mb-4 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    toggleDropdown();
                  }}
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
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Inv. Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filterInvoices && filterInvoices?.length !== 0 ? (
                filterInvoices.map((i, idx) => {
                  return (
                    <tr key={idx} className="bg-white">
                      <th
                        scope="col-span-4"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        {i.companyName}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        {i.invNumber}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-orange whitespace-nowrap text-[14px]"
                      >
                        Rp. {i.amount}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        {i.dueDate}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        <Badge variant={toTitleCase(i.status)}>
                          {toTitleCase(i.status)}
                        </Badge>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px] flex space-x-3"
                      >
                        <button>
                          <img src={IconView} alt="Icon View" />
                        </button>
                        <button>
                          <img src={IconDownload} alt="Icon Download" />
                        </button>
                      </th>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                    Company Not Found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
          <p className="my-auto">
            Showing {paging.page} to {paging.size} of {paging.count} entries
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
                className={`${currentPage >= paging.totalPages && "disabled"}`}
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
    </>
  );
};

export default ListInvoice;
