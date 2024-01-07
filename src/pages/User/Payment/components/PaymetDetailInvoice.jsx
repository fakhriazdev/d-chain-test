import CheckIcon from "@mui/icons-material/Check";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { selectPaymentAction } from "../../../../slices/paymentSlice";

const PaymentDetailInvoice = () => {
  const dispatch = useDispatch();
  const { selectedPayment } = useSelector((state) => state.payment);
  const { paymentService } = useContext(ServiceContext);
  const { id } = useParams();
  const [total, setTotal] = useState(0);
  console.log(selectedPayment);

  const {
    values: { reason, reasonType },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      reason: "",
      reasonType: "",
    },
    onSubmit: async () => {
      console.log(reason);
    },
  });

  useEffect(() => {
    const onGetPaymentById = () => {
      dispatch(
        selectPaymentAction(async () => {
          const result = await paymentService.fetchById(id);
          console.log(result);
          return result.data;
        })
      );
    };
    onGetPaymentById();
  }, [dispatch, id, paymentService]);

  useEffect(() => {
    if (selectedPayment !== null) {
      setTotal(
        selectedPayment.itemList.reduce(
          (total, item) => total + item.itemsQuantity * item.unitPrice,
          0
        )
      );
    }
  });

  return (
    <>
      <h1 className="text-title">Payment Detail - Invoice</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <h1 className="text-subtitle ">Invoicing</h1>
          <h4>FI-C-45678765-5-78</h4>
          <div className="flex mt-10">
            <h4 className="w-1/4">Invoice Date</h4>
            <h4 className="w-1/4">25-05-23</h4>
            {/* <h4 className="w-2/4"></h4> */}
          </div>

          <div className="flex">
            <h4 className="w-1/4">Due Date</h4>
            <h4 className="w-2/4">25-05-23</h4>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex mt-10">
              <h4 className="w-1/2">Billed To</h4>
              <h4 className="w-1/2">From</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">
                Oreo Jaya
                {/* {selectedInvoices.companyRecipient.companyName} */}
              </h4>
              <h4 className="w-1/2">
                goriorio ajadah
                {/* {selectedInvoices.companyFrom.companyName} */}
              </h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">
                oreo@gmail.com
                {/* {selectedInvoices.companyRecipient.companyEmail} */}
              </h4>
              <h4 className="w-1/2">
                gorio@gmail.com
                {/* {selectedInvoices.companyFrom.companyEmail} */}
              </h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">
                medan, sumut
                {/* {selectedInvoices.companyRecipient.address} */}
              </h4>
              <h4 className="w-1/2">
                batam, kepri
                {/* {selectedInvoices.companyFrom.address} */}
              </h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">
                +456789765
                {/* {selectedInvoices.companyRecipient.phoneNumber} */}
              </h4>
              <h4 className="w-1/2">
                +456787654
                {/* {selectedInvoices.companyFrom.phoneNumber} */}
              </h4>
            </div>
            <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs border-b border-zinc-300 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr className="bg-white border-b border-zinc-300 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Rem Depan Mobil Model X{/* {item.itemsName} */}
                    </th>
                    <td className="py-4 text-center">
                      100
                      {/* {item.itemsQuantity} */}
                    </td>
                    <td className=" py-4 text-end">
                      500.000
                      {/* {formatIDRCurrency(item.unitPrice)} */}
                    </td>
                    <td className=" py-4 text-end">
                      50.000.000
                      {/* {formatIDRCurrency(
                              item.itemsQuantity * item.unitPrice
                            )} */}
                    </td>
                  </tr>

                  <tr className="bg-white border-b border-zinc-300 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Rem Depan Mobil Model X{/* {item.itemsName} */}
                    </th>
                    <td className="py-4 text-center">
                      100
                      {/* {item.itemsQuantity} */}
                    </td>
                    <td className=" py-4 text-end">
                      500.000
                      {/* {formatIDRCurrency(item.unitPrice)} */}
                    </td>
                    <td className=" py-4 text-end">
                      50.000.000
                      {/* {formatIDRCurrency(
                              item.itemsQuantity * item.unitPrice
                            )} */}
                    </td>
                  </tr>

                  <tr className="font-bold">
                    <td className="py-4">Total</td>
                    <td></td>
                    <td></td>
                    <td className="text-end text-logo">50.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full mt-7 mb-2">
          <button className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg  hover:opacity-80 hover:text-white">
            <CheckIcon />
            <p>Proceed Payment</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentDetailInvoice;
