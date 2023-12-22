import React, { useContext } from "react";
import { ChevronLeftOutlined } from "@mui/icons-material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined.js";
import IconCalender from "../../../../assets/icons/Calendar.svg";
import IconDelete from "../../../../assets/icons/Icon Delete.svg";
import AddIcon from "@mui/icons-material/Add";
import IconUpload from "../../../../assets/icons/Icon Upload.svg";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useFormik } from "formik";
import { invoiceAction } from "../../../../slices/invoiceSlice";

const InvoiceGeneration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { invoiceService } = useContext(ServiceContext);
  const { id } = useParams();
  

  const {
    values: { recipientId, dueDate, invDate, amount, itemList },
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
      recipientId: "",
      dueDate: "",
      invDate: "",
      amount: "",
      itemList: "",
    },
    onSubmit: async (values) => {
      if (!isValid) return;

      if (!id) {
        dispatch(
          invoiceAction(async () => {
            const result = await invoiceService.saveInvoice(values);
            if (result.statusCode === 201) {
              navigate(`/user/${id}/invoice`);
            }
            return null;
          })
        );
        return;
      }

      // dispatch(
      //   invoiceAction(async () => {
      //     const result = await menuService.updateMenu(values);
      //     if (result.statusCode === 200) {
      //       navigate('/backoffice/menus');
      //     }
      //     return null;
      //   })
      // );
    },
  });

  // useEffect(() => {
  //   if (id) {
  //     const onGetTableById = async () => {
  //       const result = await dispatch(
  //         selectTableAction(() => tableService.fetchTableById(id))
  //       );

  //       if (result.payload) {
  //         const { tableId, tableName, status } = result.payload.data;
  //         setValues({
  //           id: tableId,
  //           name: tableName,
  //           status: status === 'AVAILABLE' ? true : false,
  //         });
  //       }
  //     };
  //     onGetTableById();
  //   }
  // }, [dispatch, setValues, id, tableService]);

  return (
    <>
      <div className="relative flex justify-between mb-6 mx-4">
        <h1 className="text-title my-auto">Invoice Generation</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <form className="p-6" encType="multipart/form-data">
          <h1 className="text-logo">Invoice Information</h1>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-[18px] font-medium">
                Invoice Number
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="companyEmail"
                  autoComplete="email"
                  placeholder="FI-C-36974019-6.24"
                  className="block bg-slate-100 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  multiple
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-[18px] font-medium">
                Invoice Date
              </label>
              <div className="mt-2 flex">
                <input
                  type="date"
                  name="companyEmail"
                  autoComplete="email"
                  placeholder="Select Invoice Date"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  multiple
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={invDate}
                />
                {/* <img src={IconCalender} alt="" className="absolute" /> */}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-[18px] font-medium">
                Due Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="companyEmail"
                  autoComplete="email"
                  placeholder="Select Due Date"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  multiple
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={dueDate}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-[18px] font-medium leading-6">
                Billed To
              </label>
              <div className="mt-2">
                <select
                  name="province"
                  placeholder="car"
                  className="rounded-md border-0 py-3 text-darkgray shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                >
                  <option selected>Choose Invoice Recipient</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 opacity-20">
            <hr />
          </div>

          <h1 className="text-logo mt-8">Items</h1>
          <div className="flex mt-4 w-full gap-x-6 gap-y-8">
            <div className=" w-1/2">
              <label className="block text-[18px] font-medium leading-6">
                Item Name
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="companyEmail"
                  autoComplete="email"
                  placeholder="Input Item Name"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  multiple
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={itemList}
                />
              </div>
            </div>
            <div className="w-2/6">
              <label className="block text-[18px] font-medium leading-6">
                Item Quantity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="Input Item Quantity"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                />
              </div>
            </div>
            <div className="w-2/6 me-3">
              <label className="block text-[18px] font-medium leading-6">
                Unit Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="Input Item Price"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                />
              </div>
            </div>
            <button className="mt-6 mr-2">
              <img src={IconDelete} alt="Icon Delete" width={30} />
            </button>
          </div>
          <div className="flex mt-4 w-full gap-x-6 gap-y-8">
            <div className=" w-1/2">
              <label className="block text-[18px] font-medium leading-6">
                Item Name
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="companyEmail"
                  autoComplete="email"
                  placeholder="Input Item Name"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                  multiple
                />
              </div>
            </div>
            <div className="w-2/6">
              <label className="block text-[18px] font-medium leading-6">
                Item Quantity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="Input Item Quantity"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                />
              </div>
            </div>
            <div className="w-2/6 me-3">
              <label className="block text-[18px] font-medium leading-6">
                Unit Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="Input Item Price"
                  className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                />
              </div>
            </div>
            <button className="mt-6 mr-2">
              <img src={IconDelete} alt="Icon Delete" width={30} />
            </button>
          </div>

          <div className="mt-10 mb-10 text-orange flex justify-center text-[18px] text-center gap-2">
            <AddIcon className="text-center" /> Add More Item
          </div>

          <div>
            <input
              type="checkbox"
              className="rounded-md checked:bg-lime-600 w-6 h-6"
            />
            <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
              I Acknowledge that the data inputed is true
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
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
