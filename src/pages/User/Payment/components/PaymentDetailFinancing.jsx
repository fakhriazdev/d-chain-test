import IconReject from "../../../../assets/icons/Icon Reject.svg";
import IconProceedPayment from "../../../../assets/icons/Icon Proceed Payment.svg";
import WarningIcon from "@mui/icons-material/Warning";
import ModalChange from "./ModalChange";

const PaymentDetailFinancing = () => {
  return (
    <>
      <h1 className="text-title">Payment Detail Financing</h1>

      <div className="flex justify-center flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <div className="flex flex-col">
            <div className="flex">
              <h4 className="w-1/2 text-darkgray">Transaction No.</h4>
              <h4 className="w-1/2 text-darkgray">Financing No.</h4>
            </div>
            <div className="flex mb-8">
              <h4 className="w-1/2 text-subtitle">FI-C-36974019-6.23</h4>
              <h4 className="w-1/2 text-subtitle">FI-C-36974019-6.23</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2 text-darkgray">Tenor</h4>
              <h4 className="w-1/2 text-darkgray">Supplier</h4>
            </div>
            <div className="flex mb-8">
              <h4 className="w-1/2 text-subtitle">1/6</h4>
              <h4 className="w-1/2 text-subtitle">Goriorio</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2 text-darkgray">Amount To Pay</h4>
              <h4 className="w-1/2 text-darkgray">Payment Method</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2 text-subtitle text-orange font-semibold">
                Rp. 10.000.000
              </h4>
              <h4 className="w-1/2 text-subtitle">Auto Debit</h4>
            </div>
          </div>

          <div className="flex flex-wrap w-full mt-7">
            <div className="w-full bg-amber-100 rounded-lg flex gap-1 justify-center text-yellow">
              <WarningIcon className="" />
              This Payment is currently set to auto-debit, to change payment
              method{" "}
              <p
                className="text-red"
                data-modal-target="modal-change"
                data-modal-toggle="modal-change"
              >
                click here
              </p>
            </div>
          </div>
          <ModalChange />
        </div>
      </div>
    </>
  );
};

export default PaymentDetailFinancing;
