import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

export default function RequestFinancingReceivable() {
  const {
    values: { request },
    errors,
    dirty,
    isValid,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik(
    {
      initialValues: {
        request: [
          {
            invoice_number: "",
            amount: 0,
            disbursment_date: "",
          },
        ],
      },
      // onSubmit: async (values) => {
      //   const resultAmount = values.itemList.map((item, idx) => {
      //     return item.itemsQuantity * item.unitPrice;
      //   });
      //   const totalAmount = resultAmount.reduce(
      //     (acc, currentValue) => acc + currentValue,
      //     0
      //   );
      //   const stringifyData = JSON.stringify(values.itemList);
      //   const dataInvoice = {
      //     recipientId: values.recipientId,
      //     dueDate: values.dueDate,
      //     invDate: values.invDate,
      //     amount: totalAmount,
      //     itemList: stringifyData,
      //   };
    }
    // validationSchema: schema,
    //   }
  );

  const handleAddItem = () => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        request: [
          ...prevValues.request,
          {
            invoice_number: "",
            amount: 0,
            disbursment_date: "",
          },
        ],
      };
    });
  };

  return (
    <div>
      <h1 className="text-title">Request Financing - Receivable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <h1 className="text-subtitle ">Select Invoice</h1>
          <form action="">
            {request.map((item, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <h4>FI-C-36974019-6.23</h4>
                  </div>
                  <div className="w-1/2 text-end">
                    <button className="mt-2 text-white bg-orange hover:text-orange border border-orange hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                      Select Invoice
                    </button>
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
                      name="companyEmail"
                      autoComplete="email"
                      placeholder="Enter Company Email"
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
                      name="companyEmail"
                      autoComplete="email"
                      placeholder="Enter Company Email"
                      className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-lable font-medium leading-6 text-darkgray">
                      Percentage
                    </label>
                    <input type="range" className="w-full py-3 [&::-webkit-slider-thumb]:bg-white " />
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full">
              <button
                required={true}
                type="date"
                name="companyEmail"
                autoComplete="email"
                onClick={handleAddItem}
                placeholder="Enter Company Email"
                className="block rounded-md py-3 text-orange shadow-sm w-full border-2 border-dotted mt-3 font-bold border-orange"
              >
                + Add Invoice
              </button>
            </div>
          </form>
        </div>
        <div className=" w-full rounded-2xl shadow-md min-h-fit mt-10 p-10"></div>
      </div>
    </div>
  );
}
