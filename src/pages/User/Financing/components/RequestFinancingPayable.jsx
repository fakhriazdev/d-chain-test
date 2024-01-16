import React, { useEffect, useState } from "react";
import TabFilter from "../../../../components/TabFilter.jsx";
import ViewLogo from "../../../../assets/icons/View.svg?react";
import AddLogo from "../../../../assets/icons/Icon Add.svg?react";
import { useFetchPaymentOngoing } from "../../../../features/payment/useFetchPaymentOngoing.js";
import { useFormik } from "formik";
import { MonthlyInstallmentCount } from "../../../../utils/MonthlyInstallmentCount.js";
import { useFetchFinancingLimit } from "../../../../features/financing/useFetchFinancingLimit.js";
import * as Yup from "yup";
import { useCreateCompany } from "../../../../features/company/useCreateCompany.js";
import { useRequestFinancingPayable } from "../../../../features/financing/useRequestFinancingPayable.js";

const RequestFinancingPayable = () => {
  const { data: payments, isLoading } = useFetchPaymentOngoing();
  const { data: financingLimit, isLoadingFinancingLimit } =
    useFetchFinancingLimit();
  const monthsOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [totalInstallments, setTotalInstallments] = useState(0);
  const [remainingLimit, setRemainingLimit] = useState(0);

  const validationSchema = Yup.object().shape({
    payments: Yup.array().of(
      Yup.object().shape({
        payment_id: Yup.string().required("Payment is required"),
      })
    ),
    checkbox: Yup.boolean().oneOf(
      [true],
      "You must declare that the information is true and correct"
    ),
  });

  console.log(payments);

  const formik = useFormik({
    initialValues: [
      {
        id: 1,
        payment_id: "",
        amount: 0,
        tenure: 0,
        monthly_instalment: 0,
      },
    ],
    checkbox: false,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async () => {
      try {
        const arrayData = formik.values.map(
          ({ payment_id, amount, tenure, monthly_instalment }) => ({
            payment_id,
            amount,
            tenure: parseFloat(tenure),
            monthly_instalment,
          })
        );
        await mutate(arrayData);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const { mutate, isPending } = useRequestFinancingPayable({
    onSuccess: () => {},
  });
  const handleAddDatas = () => {
    if (
      formik.values[formik.values.length - 1].payment_id !== "" &&
      remainingLimit > 0
    ) {
      formik.setValues((prevValues) => [
        ...prevValues,
        {
          id: formik.values.length + 1,
          payment_id: "",
          amount: 0,
          tenure: 0,
          monthly_instalment: 0,
        },
      ]);
    } else {
    }
    
  };
  const handleRemoveById = (id) => {
    formik.setValues((prevValues) =>
      prevValues.filter((item) => item.id !== id)
    );
  };
  const handleChangeTenure = (event, index) => {
    const selectedTenure = event.target.value;
    const tenure = parseFloat(selectedTenure);
    const updatedValues = formik.values.map((value, i) =>
      i === index
        ? {
            ...value,
            tenure: tenure,
            monthly_instalment: parseFloat(
              MonthlyInstallmentCount(formik.values[index].amount, tenure)
            ),
          }
        : value
    );

    formik.setValues(updatedValues);
  };
  const handleChoosePayment = (transaction, amount, index) => {
    const updatedValues = formik.values.map((value, i) =>
      i === index
        ? {
            ...value,
            payment_id: transaction,
            amount,
          }
        : value
    );

    formik.setValues(updatedValues);
    setModalVisible(!isModalVisible);
  };
  const handleToggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleCheckBox = () => {
    formik.setFieldValue("checkbox", !formik.values.checkbox);
  };

  useEffect(() => {
    const newTotalInstallments = formik.values.reduce(
      (total, value) => total + value.amount,
      0
    );
    if (newTotalInstallments !== totalInstallments) {
      setTotalInstallments(newTotalInstallments);
      setRemainingLimit(newTotalInstallments - financingLimit?.remaining_limit);
    }
  }, [formik.values]);

  console.log(formik.values, "ajag");
  console.log(totalInstallments);
  console.log(payments)
  return (
    <>
      <div>
        <h1 className="text-[30px] md:text-title lg:text-title font-normal mb-5 md:mb-10 lg:mb-10">
          Request Financing - Payable
        </h1>
      </div>
      <div className="w-full rounded-lg shadow-md p-3 md:p-6 lg:p-6">
        <form onSubmit={formik.handleSubmit}>
          {formik.values.map((datas, i) => {
            return (
              <div
                className="border-b-2 border-lightgray mb-10"
                key={datas?.id}
              >
                <div className="mb-5 ">
                  {datas?.id === 1 ? (
                    <p className="text-[18px] mb-3">
                      Financing Payment {datas?.id}
                    </p>
                  ) : (
                    <div className="flex justify-between">
                      <p className="text-[18px] mb-3">
                        Financing Payment {datas?.id}
                      </p>
                      <p onClick={() => handleRemoveById(datas?.id)}>Hapus</p>
                    </div>
                  )}
                  <label className="text-[14px] text-darkgray">Payment</label>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">
                      {datas?.payment_id === "" ? "-" : datas?.payment_id}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p>
                        <ViewLogo />
                      </p>
                      <button
                        onClick={handleToggleModal}
                        className="bg-orange px-2 md:px-4 lg:px-4 py-2 md:py-4 lg:py-4 text-white rounded-lg"
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
                                Select Payment
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
                              <div className="overflow-y-scroll h-[500px] p-2">
                                {payments?.map((data) => {
                                  const formattedDate =
                                    data?.dueDate.split(" ")[0];
                                  return (
                                    <div
                                      onClick={() =>
                                        handleChoosePayment(
                                          data?.transactionId,
                                          data?.amount,
                                          i
                                        )
                                      }
                                      className="flex gap-8 justify-between bg-white border-lightgray border-2 p-4 rounded-xl mb-5 hover:border-orange cursor-pointer"
                                      key={data.transactionId}
                                    >
                                      <p>{formattedDate}</p>
                                      <p>{data?.recepient}</p>
                                      <p>{data?.transactionId}</p>
                                      <p className="text-orange">
                                        {`Rp. ${Number(
                                          data?.amount
                                        ).toLocaleString("id-ID")}`}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10">
                  <p className="text-[13px] text-darkgray">Amount</p>
                  <p className="text-[16px] font-medium mb-3">
                    Rp.{" "}
                    {datas?.amount === 0
                      ? "-"
                      : datas?.amount.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="flex flex-wrap justify-between mb-10">
                  <div className="flex gap-5">
                    <div className="relative w-[160px] md:w-[300px] lg:w-[300px] mb-5">
                      <label className="text-[16px] text-darkgray mb-2">
                        Tenure
                      </label>
                      <select
                        disabled={formik.values[i].payment_id === ""}
                        name="tenure"
                        placeholder="tenure"
                        value={formik.values[i]?.tenure}
                        onChange={(event) => handleChangeTenure(event, i)}
                        className="rounded-md border-0 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                      >
                        {monthsOptions.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative text-[16px]">
                      <label className="text-darkgray">No. Of Payment</label>
                      <p className="my-1.5 md:my-2 lg:my-2">{datas?.tenure}x</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="relative text-[16px]">
                      <label className="text-darkgray mb-2">
                        Monthly Installment
                      </label>
                      <p className="my-3">
                        {
                          datas.monthly_instalment === 0
                            ? "-"
                            : `${datas?.monthly_instalment.toLocaleString(
                                "id-ID"
                              )}/Mo` // Display formatted value with "IDR" and "/Mo"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between lg:justify-between mb-10">
                  <div className="flex gap-5 items-center">
                    <p className="my-auto">Payment Method</p>
                  </div>
                  <div className="flex gap-5">
                    <TabFilter
                      filter1="Auto-Debit"
                      filter2="Bank Transfer"
                      width="300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mb-5 mb-16">
            <p className="text-[18px] mb-3">Limit Detail</p>
            <div className="flex justify-between mb-5">
              <p>Current Payable Limit</p>
              <p className="font-semibold text-[16px]">
                {financingLimit?.remaining_limit.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex justify-between mb-5">
              <p>Used Limit</p>
              <p className="font-semibold text-[16px]">
                {totalInstallments.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="relative flex justify-between border-t-2 border-lightdark pt-5">
              <p>
                Remaining Limit{" "}
                {remainingLimit < 0 && (
                  <span className="text-red text-[14px] absolute top-4">
                    * Remaining Limit must be More than or Equal 0
                  </span>
                )}
              </p>

              <p
                className={`${
                  remainingLimit < 0
                    ? "font-semibold text-[24px] text-red"
                    : "font-semibold text-[24px]"
                }`}
              >
                {remainingLimit.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="mb-10">
            <button
              type="button"
              disabled={remainingLimit < 0 && !formik.isValid}
              onClick={handleAddDatas}
              className="w-full bg-white border-2 py-5 rounded-lg text-orange border-orange border-dashed text-[18px] font-medium"
            >
              <span className="mr-2 text-[20px] font-normal">+</span>Add Invoice
            </button>
          </div>
          <div className="mb-5 flex gap-2 mb-10">
            <input
              id="default-checkbox"
              type="checkbox"
              onClick={handleCheckBox}
              className="w-6 h-6 text-green bg-white rounded focus:none"
            />
            <p>
              I hereby declare that the information provided is true and
              correct.
            </p>
          </div>
          <div className="mb-10">
            <button
              type="submit"
              // disabled={remainingLimit < 0 && !formik.isValid}
              className="w-full bg-orange border-2 py-5 rounded-lg text-white border-orange border-dashed text-[18px] font-medium"
            >
              Apply Financing Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestFinancingPayable;
