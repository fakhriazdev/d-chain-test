import IconReject from "../../../../assets/icons/Icon Reject.svg";
import IconProceedPayment from "../../../../assets/icons/Icon Proceed Payment.svg";
import WarningIcon from "@mui/icons-material/Warning";
import ModalChange from "./ModalChange";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useNavigate, useParams } from "react-router-dom";
import { selectPaymentAction } from "../../../../slices/paymentSlice";
import {
  formatIDRCurrency,
  toRoleAccess,
  toTitleCase,
} from "../../../../utils/utility";
import CheckIcon from "@mui/icons-material/Check";

const PaymentDetailFinancing = () => {
  const dispatch = useDispatch();
  const { selectedPayment } = useSelector((state) => state.payment);
  const { paymentService } = useContext(ServiceContext);
  const { id } = useParams();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  console.log(selectedPayment);

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

  const handleClick = () => {
    navigate(`success`);
  };

  return (
    <>
      {selectedPayment ? (
        <div>
          <h1 className="text-title">Payment Detail Financing</h1>

          <div className="flex justify-center flex-col items-center">
            <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
              <div className="flex flex-col">
                <div className="flex">
                  <h4 className="w-1/2 text-darkgray">Transaction No.</h4>
                  <h4 className="w-1/2 text-darkgray">Financing No.</h4>
                </div>
                <div className="flex mb-8">
                  <h4 className="w-1/2 text-subtitle">
                    {selectedPayment.transactionId}
                  </h4>
                  <h4 className="w-1/2 text-subtitle">
                    {selectedPayment.financingId}
                  </h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2 text-darkgray">Tenor</h4>
                  <h4 className="w-1/2 text-darkgray">Supplier</h4>
                </div>
                <div className="flex mb-8">
                  <h4 className="w-1/2 text-subtitle">
                    {selectedPayment.tenor}
                  </h4>
                  <h4 className="w-1/2 text-subtitle">
                    {selectedPayment.supplier}
                  </h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2 text-darkgray">Amount To Pay</h4>
                  <h4 className="w-1/2 text-darkgray">Payment Method</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2 text-subtitle text-orange font-semibold">
                    {formatIDRCurrency(selectedPayment.amount)}
                  </h4>
                  <h4 className="w-1/2 text-subtitle">
                    {
                      toTitleCase(selectedPayment.paymentMethod.replace(/_/g, " "))
                    }
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap w-full mt-7">
                <div className="w-full bg-amber-100 rounded-lg flex gap-1 justify-center text-yellow">
                  <WarningIcon className="" />
                  This Payment is currently set to auto-debit, to change payment
                  method
                  {/* <span
                    className="text-red cursor-pointer"
                    data-modal-target="modal-change"
                    data-modal-toggle="modal-change"
                  >
                    click here
                  </span> */}
                  <button type="button"
                    className="text-red cursor-pointer"
                    data-modal-target="modal-change"
                    data-modal-toggle="modal-change"
                  >
                    click here
                  </button>
                </div>
              </div>
              <ModalChange />

              {selectedPayment.paymentMethod === "BANK_TRANSFER" ? (
                <div className="w-full mt-7 mb-2">
                  <button
                    onClick={handleClick}
                    className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg  hover:opacity-80 hover:text-white"
                  >
                    <CheckIcon />
                    <p>Proceed Payment</p>
                  </button>
                </div>
              ) : (
                <div className="w-full mt-7 mb-2"> </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        "kosong"
      )}
    </>
  );
};

export default PaymentDetailFinancing;
