import React, { useContext, useEffect, useState } from "react";
import { ChevronLeftOutlined } from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import IconCalender from "../../../../assets/icons/Calendar.svg";
import IconDelete from "../../../../assets/icons/Icon Delete.svg";
import AddIcon from "@mui/icons-material/Add";
import IconUpload from "../../../../assets/icons/Icon Upload.svg";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useFormik } from "formik";
import { invoiceAction } from "../../../../slices/invoiceSlice";
import * as Yup from "yup";

const InvoiceGeneration = () => {
  const schema = Yup.object().shape({
    checkbox: Yup.boolean().oneOf([true]),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { invoiceService } = useContext(ServiceContext);
  const { id } = useParams();
  const [partnerships, setPartnerships] = useState([]);
  const companyId = sessionStorage.getItem("company_id");
  const currentDate = new Date().toISOString().split("T")[0];

  // const [searchParam, setSearchParam] = useSearchParams();

  // const currentPage = parseInt(searchParam.get("page") || 1);
  // const currentSize = parseInt(searchParam.get("size") || 1);

  const {
    values: { recipientId, dueDate, invDate, amount, itemList, checkbox },
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
      checkbox: false,
      recipientId: "",
      dueDate: "",
      amount: 0,
      itemList: [
        {
          itemsName: "",
          itemsQuantity: 0,
          unitPrice: 0,
        },
      ],
    },
    onSubmit: async (values) => {
      console.log(values);
      const resultAmount = values.itemList.map((item, idx) => {
        return item.itemsQuantity * item.unitPrice;
      });
      const totalAmount = resultAmount.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      const stringifyData = JSON.stringify(values.itemList);
      const dataInvoice = {
        recipientId: values.recipientId,
        dueDate: values.dueDate,
        amount: totalAmount,
        itemList: stringifyData,
      };
      dispatch(
        invoiceAction(async () => {
          const result = await invoiceService.saveInvoice(dataInvoice);
          console.log(result);
          if (result.statusCode === 201) {
            navigate(`/user/invoice`);
          }
          return null;
        })
      );
    },
    validationSchema: schema,
  });

  const handleAddItem = () => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        itemList: [
          ...prevValues.itemList,
          {
            itemsName: "",
            itemsQuantity: 0,
            unitPrice: 0,
          },
        ],
      };
    });
  };

  const handleRemoveItem = (idx) => {
    const updatedItems = [...itemList];
    updatedItems.splice(idx, 1);
    setValues({
      itemList: updatedItems,
    });
  };

  useEffect(() => {
    const getPartnerships = async () => {
      try {
        const data = await invoiceService.fetchPartnership(companyId, {
          page: 1,
          size: 1000,
        });
        setPartnerships(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPartnerships();
  }, []);

  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Invoice Generation</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="p-6"
          encType="multipart/form-data"
        >
          <h1 className="text-logo">Invoice Information</h1>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block mb-2 text-[18px] font-medium">
                Invoice Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="invNumber"
                  placeholder="FI-C-36974019-6.24"
                  className="block bg-slate-100 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block mb-2 text-[18px] font-medium">
                Due Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dueDate"
                  placeholder="Select Due Date"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={dueDate}
                  min={currentDate}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-[18px] font-medium leading-6">
                Billed To
              </label>
              <div className="mt-2">
                <select
                  name="recipientId"
                  className="rounded-md border-0 py-3 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  onChange={handleChange}
                >
                  <option selected>Choose Invoice Recipient</option>
                  {partnerships.data &&
                    partnerships.data.length &&
                    partnerships.data.map((partnership, idx) => {
                      return (
                        <option key={idx} value={partnership.partner.companyId}>
                          {partnership.partner.companyName}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 opacity-20">
            <hr />
          </div>

          <h1 className="text-logo mt-8">Items</h1>
          {itemList.map((item, idx) => (
            <div key={idx} className="flex mt-4 w-full gap-x-6 gap-y-8">
              <div className=" w-1/2">
                <label className="block text-[18px] font-medium leading-6">
                  Item Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name={`itemList.${idx}.itemsName`}
                    placeholder="Input Item Name"
                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={itemList[idx].itemsName}
                  />
                </div>
              </div>
              <div className="w-2/6">
                <label className="block text-[18px] font-medium leading-6">
                  Item Quantity
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name={`itemList.${idx}.itemsQuantity`}
                    placeholder="Input Item Quantity"
                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={itemList[idx].itemsQuantity}
                  />
                </div>
              </div>
              <div className="w-2/6 me-3">
                <label className="block text-[18px] font-medium leading-6">
                  Unit Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name={`itemList.${idx}.unitPrice`}
                    placeholder="Input Item Price"
                    className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={itemList[idx].unitPrice}
                  />
                </div>
              </div>
              <button
                type="button"
                className="mt-6 mr-2"
                onClick={() => handleRemoveItem(idx)}
              >
                <img src={IconDelete} alt="Icon Delete" width={30} />
              </button>
            </div>
          ))}

          <div className="mt-10 mb-10 text-orange flex justify-center text-[18px] text-center gap-2">
            <button type="button" onClick={() => handleAddItem()}>
              <AddIcon className="text-center" /> Add More Item
            </button>
          </div>

          <div className="">
            <input
              type="checkbox"
              name="checkbox"
              checked={checkbox}
              onChange={handleChange}
              onBlur={handleBlur}
              className="rounded-md checked:bg-lime-600 w-6 h-6"
            />
            <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
              I Acknowledge that the data inputed is true
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={!isValid || !dirty}
              className="text-[18px] py-3 lg:py-5 rounded-lg font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange flex justify-center gap-3"
            >
              <img src={IconUpload} alt="Icon Upload" />
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InvoiceGeneration;
