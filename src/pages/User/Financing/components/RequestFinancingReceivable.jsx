import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
// import { Link } from "react-router-dom";

// import IconSearch from "../../../../assets/icons/Icon Search.svg";
import {
  formatIDRCurrency,
  formatDate,
  getFee,
} from "../../../../utils/utility";

import { ServiceContext } from "../../../../context/ServiceContext";

import { selectInvoiceAction } from "../../../../slices/invoiceSlice";
import { financingAction } from "../../../../slices/financingSlice";

export default function RequestFinancingReceivable() {
  const { invoiceService, financingService } = useContext(ServiceContext);
  const dispatch = useDispatch();

  const [invoices, setInvoices] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [limit, setLimit] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const schema = Yup.object().shape({
    request: Yup.array().of(
      Yup.object().shape({
        amount: Yup.number().required("Amount is required"),
        disbursment_date: Yup.date()
          .required("Disbursement date is required")
          .min(new Date(), "Disbursement date cannot be in the past"),
      })
    ),
    checkbox: Yup.boolean().oneOf([true]),
  });

  const {
    values: { request, checkbox },
    errors,
    dirty,
    isValid,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      request: [
        {
          invoice_number: "",
          maxAmount: 0,
          amount: 0,
          fee: 0,
          dueDate: "",
          disbursment_date: "",
          percentage: 0,
        },
      ],
      checkbox: false,
    },
    onSubmit: async (values) => {
      const requests = values.request.map(
        ({ invoice_number, amount, disbursment_date }) => ({
          invoice_number,
          amount,
          disbursment_date,
        })
      );

      dispatch(
        financingAction(async () => {
          const result = await financingService.requestFinancingReceivable(
            requests
          );
          console.log(result);
          if (result.statusCode === 200) {
            // navigate(`/user/invoice`);
            alert("berhasil wlek");
          }
          return null;
        })
      );
    },
    validationSchema: schema,
  });

  useEffect(() => {
    const getInvoice = async () => {
      try {
        const invoices = await invoiceService.fetchInvoices({
          page: 1,
          size: 100,
          direction: "asc",
          type: "receivable",
          status: null,
        });
        setInvoices(invoices.data);
        const { data } = await financingService.getLimit();
        setLimit(data.remaining_limit);
      } catch (error) {
        console.log(error);
      }
    };
    getInvoice();
  }, [financingService, invoiceService]);

  const handleAddItem = () => {
    setValues((prevValues) => ({
      ...prevValues,
      request: [
        ...prevValues.request,
        {
          invoice_number: "",
          maxAmount: 0,
          amount: 0,
          fee: 0,
          dueDate: "",
          disbursment_date: "",
          percentage: 0,
        },
      ],
    }));
  };

  const handleSelectInvoice = (id, idx) => {
    handleToggleModal();
    dispatch(
      selectInvoiceAction(async () => {
        const { data } = await invoiceService.getById(id);
        console.log(data);
        setFieldValue(`request[${idx}].invoice_number`, data.invoiceId);
        setFieldValue(`request[${idx}].maxAmount`, data.amount);
        setFieldValue(`request[${idx}].dueDate`, data.dueDate);
        return null;
      })
    );
  };

  const handleChangeDate = (e, idx) => {
    handleChange(e);

    const timestampValue = new Date(e.target.value).getTime();

    const newFee = getFee(
      request[idx].dueDate,
      timestampValue,
      request[idx].amount
    );
    setFieldValue(`request[${idx}].fee`, newFee);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAmountChange = (e, idx) => {
    handleChange(e);
    const newValue = (request[idx].maxAmount * e.target.value) / 100;
    setFieldValue(`request[${idx}].amount`, newValue);

    if (request[idx].disbursment_date !== "") {
      const timestampValue = new Date(request[idx].disbursment_date).getTime();
      const newFee = getFee(request[idx].dueDate, timestampValue, newValue);
      setFieldValue(`request[${idx}].fee`, newFee);
    }
  };

  useEffect(() => {
    const sum = request.reduce(
      (acc, item) => acc + (item.amount - item.fee),
      0
    );

    setTotalAmount(sum);
  }, [request]);

  return (
    <div>
      <h1 className="text-title">Request Financing - Receivable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <h1 className="text-subtitle ">Select Invoice</h1>
          <form onSubmit={handleSubmit}>
            {request.map((item, idx) => (
              <div className="mb-5" key={idx}>
                {/* {console.log(item.percentage)} */}
                <div className="flex items-center">
                  <div className="w-2/4 ">
                    <label className="text-lable">Invoice No.</label>
                    <h4>
                      {request[idx].invoice_number !== ""
                        ? request[idx].invoice_number
                        : "-"}
                    </h4>
                  </div>
                  <div className="w-1/4 ">
                    <label className="text-lable">Due Date</label>
                    <h4>
                      {request[idx].dueDate !== ""
                        ? formatDate(request[idx].dueDate)
                        : "-"}
                    </h4>
                  </div>
                  <div className="w-1/4 ">
                    <label className="text-lable">Invoice Amount</label>
                    <h4>
                      {request[idx].maxAmount !== 0
                        ? formatIDRCurrency(request[idx].maxAmount)
                        : "-"}
                    </h4>
                  </div>
                  <div className="w-1/4 text-end">
                    <button
                      type="button"
                      onClick={handleToggleModal}
                      className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                    >
                      Select Invoice
                    </button>
                    {isModalVisible && (
                      <div
                        id="fakhri"
                        role="dialog"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-darkgray/20"
                      >
                        {/* Modal Content */}
                        <div className="relative bg-white rounded-lg shadow p-8 max-w-4xl">
                          {/* Modal Header */}
                          <div className="flex items-center justify-between mb-5 border-gray-200">
                            <h3 className="text-[20px] text-black">
                              Select Invoice
                            </h3>
                            <button
                              type="button"
                              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                              onClick={handleToggleModal}
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
                              <span className="sr-only">Close modal</span>
                            </button>
                          </div>
                          {/* Modal Body */}
                          <div className="space-y-4 mb-10 w-full">
                            {/* Your modal content goes here */}
                            <div className="overflow-y-scroll h-[200px] p-2">
                              {invoices &&
                                invoices.length &&
                                invoices.map((invoice) => {
                                  return (
                                    <div key={idx}>
                                      <div
                                        onClick={() =>
                                          handleSelectInvoice(
                                            invoice.invNumber,
                                            idx
                                          )
                                        }
                                        disabled
                                        className="flex gap-8 justify-between bg-white border-lightgray border-2 p-4 rounded-xl mb-5 hover:border-orange cursor-pointer"
                                      >
                                        <div>{formatDate(invoice.dueDate)}</div>
                                        <div>{invoice.companyName}</div>
                                        <div>{invoice.invNumber}</div>
                                        <div>
                                          {formatIDRCurrency(invoice.amount)}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>

                          <div className="flex items-center justify-end mt-5 gap-2">
                            <button
                              type="button"
                              className="text-orange hover:text-orange/70 bg-white border-orange border-2 hover:border-orange/70 focus:ring-none rounded-lg border-gray-200 text-sm font-medium px-5 py-2.5"
                              onClick={handleToggleModal}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="text-white bg-orange hover:bg-orange/70 focus:ring-none focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
                              onClick={handleToggleModal}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <h1 className="text-subtitle mt-5">Financing Amount</h1>
                <div className="flex w-full gap-3">
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Disbursement Date
                    </label>
                    <input
                      required={true}
                      type="date"
                      name={`request[${idx}].disbursment_date`}
                      onChange={(e) => handleChangeDate(e, idx)}
                      className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Amount
                    </label>
                    <input
                      required={true}
                      type="number"
                      name={`request[${idx}].amount`}
                      onChange={handleChange}
                      className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                      // disabled
                      value={request[idx].amount}
                    />
                  </div>
                  <div className="w-1/3  relative inline-block group">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Percentage
                    </label>
                    <div className="range-container relative">
                      <input
                        type="range"
                        name={`request[${idx}].percentage`}
                        className="w-full py-3  bg-orange focus:outline-none focus:border-none"
                        min="0"
                        max="100"
                        step="1"
                        value={request[idx].percentage}
                        onChange={(e) => handleAmountChange(e, idx)}
                      />

                      <div
                        className={`bg-orange text-white text-sm px-2 py-1 rounded absolute left-[100%] bottom-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {request[idx].percentage + "%"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-16">
                  <div className="flex justify-between mb-5">
                    <p>Request Amount</p>
                    <p className="font-semibold text-[16px]">
                      {formatIDRCurrency(request[idx].amount)}
                    </p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p>Fee</p>

                    {/* {console.log(total)} */}
                    <p className="font-semibold text-[16px]">
                      {formatIDRCurrency(request[idx].fee)}
                    </p>
                  </div>
                  <div className="flex justify-between border-t-2 border-lightdark pt-5">
                    <p>Received Amount</p>
                    <p className="font-semibold text-[24px]">
                      {formatIDRCurrency(
                        request[idx].amount - request[idx].fee
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full">
              <button
                // required={true}
                type="button"
                name="companyEmail"
                autoComplete="email"
                onClick={handleAddItem}
                placeholder="Enter Company Email"
                className="block rounded-md py-3 text-orange shadow-sm w-full border-2 border-dotted mt-3 font-bold border-orange"
              >
                + Add Invoice
              </button>
            </div>
            <div className="mt-10 mb-16">
              <p className="text-[18px] mb-3 font-bold">Limit Detail</p>
              <div className="flex justify-between mb-5">
                <p>Current Payable Limit</p>
                <p className="font-semibold text-[16px]">
                  {formatIDRCurrency(limit)}
                </p>
              </div>
              <div className="flex justify-between mb-5">
                <p>Used Limit</p>

                {/* {console.log(total)} */}
                <p className="font-semibold text-[16px]">
                  {formatIDRCurrency(totalAmount)}
                </p>
              </div>
              <div className="flex justify-between border-t-2 border-lightdark pt-5">
                <p>Remaining Limit</p>
                <p
                  className={`font-semibold text-[24px] ${
                    limit - totalAmount < 0 ? "text-red" : "text-black"
                  }`}
                >
                  {formatIDRCurrency(limit - totalAmount)}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-10">
              <input
                type="checkbox"
                name="checkbox"
                checked={checkbox}
                onChange={handleChange}
                className="w-6 h-6 text-green bg-white rounded focus:none"
              />
              <p>
                I hereby declare that the information provided is true and
                correct.
              </p>
            </div>
            <div className="mb-10">
              <button
                className="w-full bg-orange border-2 py-5 rounded-lg text-white border-orange border-dashed text-[18px] font-medium"
                type="submit"
                disabled={!isValid || !dirty}
              >
                Apply Financing Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
