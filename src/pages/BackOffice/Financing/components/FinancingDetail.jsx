import IconReject from "../../../../assets/icons/Icon Reject.svg";
import IconProceedPayment from "../../../../assets/icons/Icon Proceed Payment.svg";

const FinancingDetail = () => {
  return (
    <>
      <h1 className="text-title">Financing Detail - Payable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-subtitle ">Payment No.</h1>
              <h4>FI-C-36974019-6.23</h4>
            </div>
            <div>
              <h1 className="text-subtitle ">Cretaed Date</h1>
              <h4>26-12-2023</h4>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex mt-10">
              <h4 className="w-1/2">Supplier</h4>
              <h4 className="w-1/2">From</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">Oreo Jaya</h4>
              <h4 className="w-1/2">Goriorio Jaya</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">oreo123@gmail.com</h4>
              <h4 className="w-1/2">goriorio123@gmail.com</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">Medan, Sumatera Utara</h4>
              <h4 className="w-1/2">Batam, Kepulauan Riau</h4>
            </div>{" "}
            <div className="flex">
              <h4 className="w-1/2">+6252828282929</h4>
              <h4 className="w-1/2">+6293983983938</h4>
            </div>
            <div className="relative overflow-x-auto">
                
            </div>
          </div>

          <div className="flex flex-wrap w-full mt-7">
            <div className="w-full md:w-1/2 md:pr-2 px-0">
              <button
                data-modal-target="modal-reject"
                data-modal-toggle="modal-reject"
                type="button"
                className="flex justify-center items-center gap-2 text-white font-bold w-full h-12 rounded-lg border-2 bg-red border-red  hover:opacity-80 hover:text-white"
              >
                <img src={IconReject} alt="" className="" />
                <p>Reject Financing</p>
              </button>
            </div>
            <div className="w-full md:w-1/2 md:pl-2 pl-0">
              <button className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg border-2 border-green hover:opacity-80 hover:text-white">
                <img src={IconProceedPayment} alt="" className="" />
                <p>Accept Financing</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancingDetail;
