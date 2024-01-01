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

import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceContext } from "../../../context/ServiceContext";
import { formatIDRCurrency, formatDate } from "../../../utils/utility";
import { selectInvoiceAction } from "../../../slices/invoiceSlice";
import proceedPayment from "../../../assets/icons/Icon Proceed Payment.svg";
import rejectPayment from "../../../assets/icons/Icon Reject.svg";
import ModalReject from "./ModalReject";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function InvoiceDetail() {
  const dispatch = useDispatch();
  const { selectedInvoices } = useSelector((state) => state.invoice);
  const { invoiceService } = useContext(ServiceContext);
  const { id } = useParams();
  const [total, setTotal] = useState(0);
  const schema = Yup.object({
    // email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  const {
    values: { reason, reasonType },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      reason: "",
      reasonType: "",
    },
    onSubmit: async () => {
      console.log(reason);
      if (confirm("Yakin mau reject?")) {
        dispatch(
          selectInvoiceAction(async () => {
            const result = await invoiceService.updateStatusInvoice({
              invNumber: id,
              processingType: "REJECT_INVOICE",
              reasonType: reasonType,
              reason: reason,
            });
            alert(result.message);
            return result.data;
          })
        );
      }
    },
    validationSchema: schema,
  });

  useEffect(() => {
    const onGetCompanyById = () => {
      dispatch(
        selectInvoiceAction(async () => {
          const result = await invoiceService.getById(id);
          return result.data;
        })
      );
    };
    onGetCompanyById();
  }, [dispatch, id, invoiceService]);

  useEffect(() => {
    if (selectedInvoices !== null) {
      setTotal(
        selectedInvoices.itemList.reduce(
          (total, item) => total + item.itemsQuantity * item.unitPrice,
          0
        )
      );
    }
  });

  const approveInvoice = () => {
    if (confirm("Yakin mau aprove?")) {
      dispatch(
        selectInvoiceAction(async () => {
          const result = await invoiceService.updateStatusInvoice({
            invNumber: id,
            processingType: "APPROVE_INVOICE",
            reasonType: "",
            reason: "",
          });
          alert(result.message);
          return result.data;
        })
      );
    }
  };

  // const rejectInvoice = (reasonType, reason) => {
  //   if (confirm("Yakin mau reject?")) {
  //     dispatch(
  //       selectInvoiceAction(async () => {
  //         console.log(reason);
  //         const result = await invoiceService.updateStatusInvoice({
  //           invNumber: id,
  //           processingType: "REJECT_INVOICE",
  //           reasonType: reasonType,
  //           reason: reason,
  //         });
  //         alert(result.message);
  //         return result.data;
  //       })
  //     );
  //   }
  // };

  return (
    <>
      {selectedInvoices ? (
        <div>
          <h1 className="text-title">
            Invoicing Detail - {selectedInvoices.type}
          </h1>

          <div className="flex justify-center mt-5 flex-col items-center">
            <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
              <h1 className="text-subtitle ">Invoicing</h1>
              <h4>{selectedInvoices.invoiceId}</h4>
              <div className="flex mt-10">
                <h4 className="w-1/4">Invoice Date</h4>
                <h4 className="w-1/4">{formatDate(selectedInvoices.date)}</h4>
                <h4 className="w-2/4"></h4>
              </div>
              <div className="flex">
                <h4 className="w-1/4">Due Date</h4>
                <h4 className="w-2/4">
                  {formatDate(selectedInvoices.dueDate)}
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex mt-10">
                  <h4 className="w-1/2">Billed To</h4>
                  <h4 className="w-1/2">From</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedInvoices.companyRecipient.companyName}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedInvoices.companyFrom.companyName}
                  </h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedInvoices.companyRecipient.companyEmail}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedInvoices.companyFrom.companyEmail}
                  </h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedInvoices.companyRecipient.address}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedInvoices.companyFrom.address}
                  </h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedInvoices.companyRecipient.phoneNumber}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedInvoices.companyFrom.phoneNumber}
                  </h4>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <td scope="col" className="py-3">
                          Name
                        </td>
                        <td scope="col" className="py-3 text-center">
                          Quantity
                        </td>
                        <td scope="col" className=" py-3 text-end">
                          Price
                        </td>
                        <td scope="col" className=" py-3 text-end">
                          Amount
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoices.itemList.map((item, idx) => {
                        return (
                          <tr
                            key={idx}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {item.itemsName}
                            </th>
                            <td className="py-4 text-center">
                              {item.itemsQuantity}
                            </td>
                            <td className=" py-4 text-end">
                              {formatIDRCurrency(item.unitPrice)}
                            </td>
                            <td className=" py-4 text-end">
                              {formatIDRCurrency(
                                item.itemsQuantity * item.unitPrice
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      <tr className="bg-white font-bold">
                        <td></td>
                        <td></td>
                        <td className="py-4 text-end">Total</td>
                        <td className="text-end">{formatIDRCurrency(total)}</td>
                      </tr>
                    </tbody>
                  </table>

                  {selectedInvoices.processingStatus === "nye" && (
                    <>
                      <div className="w-full h-10 bg-blue bg-opacity-50 rounded-2xl flex my-auto mx-auto">
                        <InfoIcon className="text-blue flex my-auto ms-5" />{" "}
                        <span className="flex items-center ps-2">
                          This invoice is paid using 2 payments
                        </span>
                      </div>
                      <div className="flex w-full">
                        <div className="w-1/2">
                          <h4 className="text-[18px] mt-5">
                            Financing By Danamon
                          </h4>
                          <p className="flex mb-3 mt-3">
                            <span className="w-1/3">Amount</span>
                            <span className="w-1/3 text-orange font-bold">
                              Rp 120.000.000
                            </span>
                          </p>
                          <p className="flex">
                            <p className="w-1/3">Financing Number</p>
                            <p className="w-1/3 text-gray">
                              FI-C-36974019-6.23
                            </p>
                          </p>
                          <button
                            id="excludeButton"
                            className="border-2 border-orange w-36 rounded-lg text-orange hover:bg-orange hover:text-white h-10 mt-5"
                          >
                            Financing Detail
                          </button>
                        </div>
                        <div className="w-1/2">
                          <h4 className="text-[18px] mt-5">Self Payment</h4>
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
                            <p className="w-1/3 text-gray">
                              FI-C-36974019-6.23
                            </p>
                          </p>

                          <button
                            id="excludeButton"
                            className="border-2 border-orange w-36 rounded-lg text-orange hover:bg-orange hover:text-white h-10 mt-5"
                          >
                            Payment Detail
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {selectedInvoices.processingStatus === "WAITING_STATUS" &&
              selectedInvoices.type === "Payable" && (
                <div className="flex flex-wrap w-full mt-5 mb-3 gap-">
                  <div className="w-full md:w-1/2 md:pr-2 px-0 mb-2">
                    <button
                      data-modal-target="modal-reject"
                      data-modal-toggle="modal-reject"
                      type="button"
                      className="flex justify-center items-center gap-2 text-white font-bold w-full h-12 rounded-lg border-2 bg-red border-red  hover:opacity-80 hover:text-white"
                    >
                      <img src={rejectPayment} alt="" className="" />
                      <p>Reject Invoice</p>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2 pl-0 mb-2">
                    <button
                      className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg border-2 border-green hover:opacity-80 hover:text-white"
                      onClick={approveInvoice}
                    >
                      <img src={proceedPayment} alt="" className="" />
                      <p>Approve Invoice</p>
                    </button>
                  </div>
                </div>
              )}
            {selectedInvoices.processingStatus === "WAITING_STATUS" &&
              selectedInvoices.type === "Receivable" && (
                <button
                  data-modal-target="modal-reject"
                  data-modal-toggle="modal-reject"
                  type="button"
                  className="flex justify-center items-center gap-2 text-red mt-5 font-bold w-full h-12 rounded-lg border-2 hover:bg-red hover:opacity-90 hover:text-white"
                >
                  <img src={rejectPayment} alt="" className="" />
                  <p>Cancel Invoice</p>
                </button>
              )}

            {selectedInvoices.processingStatus === "REJECT_INVOICE" &&
              selectedInvoices.type === "Receivable" && (
                <div className="flex flex-wrap w-full mt-5 mb-3 gap-">
                  <div className="w-full md:w-1/2 md:pr-2 px-0 mb-2">
                    <button
                      data-modal-target="modal-reject"
                      data-modal-toggle="modal-reject"
                      type="button"
                      className="flex justify-center items-center gap-2 text-red font-bold w-full h-12 rounded-lg border-2 hover:bg-red hover:opacity-90 hover:text-white"
                    >
                      <img src={rejectPayment} alt="" className="" />
                      <p>Cancel Invoice</p>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2 pl-0 mb-2">
                    <button className="flex justify-center items-center gap-2 text-white font-bold w-full h-12 bg-red rounded-lg hover:opacity-90">
                      <img src={rejectPayment} alt="" className="" />
                      <p>Resolve Invoice</p>
                    </button>
                  </div>
                </div>
              )}

            {selectedInvoices.processingStatus === "APPROVE_INVOICE" &&
              selectedInvoices.type === "Payable" && (
                <>
                  <div className="w-full mt-5 mb-2">
                    <button
                      className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg  hover:opacity-80 hover:text-white"
                      // onClick={approveInvoice}
                    >
                      <img src={proceedPayment} alt="" className="" />
                      <p>Proceed Payment</p>
                    </button>
                  </div>
                </>
              )}
          </div>
        </div>
      ) : (
        "kosong"
      )}

      <div
        id="modal-reject"
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
            <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                  >
                    <option value="balbaalala" disabled selected hidden>
                      Why do you want to reject this invoice?
                    </option>
                    <option value="QUANTITY_DISCREPANCIES">
                      Quantity Discrepancies
                    </option>
                    <option value="PRICE_DISCREPANCIES">
                      Price Discrepancies
                    </option>
                    <option value="QUALITY_ISSUES">Quality Issues</option>
                    <option value="OTHER">Others</option>
                  </select>
                  <textarea
                    name="reason"
                    id="reason"
                    className="mt-2 w-full rounded-md h-40"
                    onChange={handleChange}
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
    </>
  );
}
