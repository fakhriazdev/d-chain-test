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

export default function InvoiceDetail() {
  const dispatch = useDispatch();
  const { selectedInvoices } = useSelector((state) => state.invoice);
  const { invoiceService } = useContext(ServiceContext);
  const { id } = useParams();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const onGetCompanyById = () => {
      dispatch(
        selectInvoiceAction(async () => {
          const result = await invoiceService.getById(id);
          console.log(result);
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

  const rejectInvoice = (reason) => {
    if (confirm("Yakin mau reject?")) {
      dispatch(
        selectInvoiceAction(async () => {
          const result = await invoiceService.updateStatusInvoice({
            invNumber: id,
            processingType: "APPROVE_INVOICE",
            reasonType: reason.reasonType,
            reason: reason.reason,
          });
          alert(result.message);
          return result.data;
        })
      );
    }
  }

  return (
    <>
      {console.log(total)}
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

                  {selectedInvoices.processingStatus === "APPROVE_INVOICE" && (
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
            {selectedInvoices.processingStatus === "WAITING_STATUS" && (
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
                    <p>Proceed Payment</p>
                  </button>
                </div>
                <ModalReject rejectInvoice={rejectInvoice}/>
              </div>
            )}
          </div>
        </div>
      ) : (
        "kosong"
      )}
    </>
  );
}
