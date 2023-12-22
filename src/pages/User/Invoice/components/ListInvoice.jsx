import InvoiceGeneration from "./InvoiceGeneration";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined.js";
import { ChevronLeftOutlined } from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import Badge from "../../../../components/Badge.jsx";
import InvoiceGenerationButton from "../../../../assets/icons/Icon Invoice Generation Button.svg";
import IconUploadBlack from "../../../../assets/icons/Icon Upload Black.svg";
import IconDownload from "../../../../assets/icons/Icon Download.svg";
import IconView from "../../../../assets/icons/Icon View.svg";
import IconSearch from "../../../../assets/icons/Icon Search.svg";
import Status from "../../../../components/Status.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../../../context/ServiceContext.jsx";
import { invoiceAction } from "../../../../slices/invoiceSlice.js";
import { Link, useSearchParams } from "react-router-dom";

const ListInvoice = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoice.invoices);
  const { invoiceService } = useContext(ServiceContext);
  const [paging, setPaging] = useState({});

  const currentPage = parseInt(searchParam.get("page") || 1);
  const currentSize = parseInt(searchParam.get("size") || 1);

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

  useEffect(() => {
    const onGetInvoices = () => {
      dispatch(
        invoiceAction(async () => {
          const result = await invoiceService.fetchInvoices({
            page: currentPage,
            size: currentSize,
          });
          if (result) {
            setPaging(result.paging);
            const data = await Promise.all();
            return { data };
          }
        })
      );
    };
    onGetInvoices();
  }, [dispatch, invoiceService, currentPage, currentSize]);

  useEffect(() => {
    if (currentPage < 1 || currentPage > paging.totalPages) {
      searchParam.set("page", 1);
      setSearchParam(searchParam);
    }
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
          <div className="flex items-center py-2">
            <input
              className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12 "
              id="email"
              type="text"
              placeholder="Search..."
            />
            <img src={IconSearch} className="absolute ml-5" alt="Search Icon" />
            <button
              className="bg-orange text-white rounded-r-lg focus:outline-none focus:shadow-outline w-24 h-11 disabled:bg-opacity-70"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-orange bg-white border border-orange hover:bg-orange hover:text-white font-medium rounded-lg text-sm px-3 py-1 text-center mt-3"
              type="button"
            >
              Filter
              <ExpandMoreOutlinedIcon className="my-auto" />
            </button>
            <div className="flex space-x-7">
              <Link to={"/user/:id/invoice/add"}>
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
            className="z-20 hidden bg-white divide-y border border-orange divide-gray-100 rounded-lg shadow w-80"
          >
            <div className="">
              <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                Status
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="asc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Unpaid
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="dsc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Paid
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="dsc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Late
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="dsc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Disputed
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                Type
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="asc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Payable
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="dsc"
                      name="default-radio"
                      className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Receivable
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex space-x-5">
              <button className="bg-gray/20 hover:bg-gray/20 text-zinc-800 py-2 px-4 rounded">
                Cancel
              </button>
              <button className="bg-orange hover:bg-orange text-white py-2 px-4 rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto mx-4 sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right mb-2">
            <thead className="text-white text-[16px] font-[300] bg-orange ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Supplier
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
              {invoices?.length !== 0 &&
                invoices.map((i, idx) => {
                  return (
                    <tr key={idx} className="bg-white">
                      <th
                        scope="col-span-4"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        {i.recipientId}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                      >
                        {/* {i.recipientId} */}kkk
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
                        <Status variant="success">{i.status}</Status>
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
                })}
            </tbody>
          </table>
        </div>
        <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
          <p className="my-auto">Showing 1 to 10 of 50 entries</p>

          {invoices && invoices.length !== 0 && (
            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
                <li className={`page-item ${currentPage == 1 && "disabled"}`}>
                  <a
                    onClick={() => onPrevious(currentPage)}
                    className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                  >
                    <ChevronLeftOutlined />
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                {Array(paging.totalPages)
                  .fill(null)
                  .map((_, idx) => {
                    const page = ++idx;
                    return (
                      <li key={page}>
                        <Link
                          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange font-bold page-link ${
                            currentPage == page && "active"
                          }`}
                          to={`/user/:id/invoice?page=${page}&size=${currentSize}`}
                        ></Link>
                      </li>
                    );
                  })}
                {/* <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange font-bold"
                  >
                    1
                  </a>
                </li> */}

                <li
                  className={`page-item ${
                    currentPage >= paging.totalPages && "disabled"
                  }`}
                >
                  <a
                    onClick={() => onNext(currentPage)}
                    className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                  >
                    <ChevronRightOutlinedIcon />
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default ListInvoice;
