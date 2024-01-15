import SuccessIcon from "../../../../assets/icons/Success Icon.svg";

const PaymentSuccessfully = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="shadow-md rounded-3xl w-2/4">
          <div className="text-center mt-5">
            <img src={SuccessIcon} alt="" className="ml-[340px] mb-5"/>
            <h1 className="text-subtitle mb-3">Payment Success</h1>
            <h1 className="text-[40px] font-bold">IDR 10.000.000</h1>
          </div>
          <div className="w-11/12 mx-auto">
          <div className="border opacity-10 mt-10 w-2/3 mx-auto"></div>
            <div className="flex mt-10">
              <h4 className="w-1/2 text-[21px] text-gray">Transaction No.</h4>
              <h4 className="w-1/2 text-[21px] text-end">FI-C-56786545-6.23</h4>
            </div>
            <div className="flex mt-4">
              <h4 className="w-1/2 text-[21px] text-gray">Payment Time</h4>
              <h4 className="w-1/2 text-[21px] text-end">
                25-02-2023, 13:22:16
              </h4>
            </div>
            <div className="flex mt-4">
              <h4 className="w-1/2 text-[21px] text-gray">Payment Method</h4>
              <h4 className="w-1/2 text-[21px] text-end">Bank Transfer</h4>
            </div>{" "}
            <div className="flex mt-4">
              <h4 className="w-1/2 text-[21px] text-gray">Sender Name</h4>
              <h4 className="w-1/2 text-[21px] text-end">Asta Teknologi</h4>
            </div>{" "}
            <div className="flex mt-4">
              <h4 className="w-1/2 text-[21px] text-gray">Recipient Name</h4>
              <h4 className="w-1/2 text-[21px] text-end">Bank Danamon</h4>
            </div>
            <div className="border-dashed border-t-2 w-2/3 opacity-10 mt-5 mb-5 mx-auto"></div>
            <div className="flex mt-4">
              <h4 className="w-1/2 text-[21px] text-gray">Amount</h4>
              <h4 className="w-1/2 text-[21px] text-end">IDR 10.000.000</h4>
            </div>
            <div className="flex mt-4 mb-5">
              <h4 className="w-1/2 text-[21px] text-gray">Admin Fee</h4>
              <h4 className="w-1/2 text-[21px] text-end">IDR 193.00</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessfully;
