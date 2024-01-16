import IconReject from "../../../../assets/icons/Icon Reject.svg";
import IconProceedPayment from "../../../../assets/icons/Icon Proceed Payment.svg";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../../../../context/ServiceContext";
import { selectFinancingAction } from "../../../../slices/financingSlice";
import { formatDate, formatIDRCurrency } from "../../../../utils/utility";

const FinancingDetail = () => {
  const dispatch = useDispatch();
  const { selectedFinancing } = useSelector((state) => state.financing);
  const { financingService } = useContext(ServiceContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getFinancing = () => {
      dispatch(
        selectFinancingAction(async () => {
          const result = await financingService.getPayableById(id);
          console.log(result);
          return result.data;
        })
      );
    };
    getFinancing();
  }, [dispatch, financingService, id]);

  const approveFinancing = () => {
    if (confirm("Apakah anda yakin ingin approve?")) {
      dispatch(
        selectFinancingAction(async () => {
          const result = await financingService.saveFinancingAccept({
            financing_id: id,
            type: "payable",
          });
          // alert(result.message);
          navigate("/backoffice/financing");
        })
      );
    }
  };
  const rejectFinancing = () => {
    if (confirm("Apakah anda yakin ingin reject?")) {
      dispatch(
        selectFinancingAction(async () => {
          const result = await financingService.saveFinancingReject({
            financing_id: id,
            type: "payable",
          });
          // alert(result.message);
          navigate("/backoffice/financing");
        })
      );
    }
  };

  return (
    <>
      {selectedFinancing && (
        <div>
          <h1 className="text-title">Financing Detail - Payable</h1>

          <div className="flex justify-center mt-5 flex-col items-center">
            <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-subtitle ">Payment No.</h1>
                  <h4>{selectedFinancing.payment_id}</h4>
                </div>
                <div>
                  <h1 className="text-subtitle ">Created Date</h1>
                  <h4>{formatDate(selectedFinancing.created_date)}</h4>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex mt-10">
                  <h4 className="w-1/2">Supplier</h4>
                  <h4 className="w-1/2">From</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.company_name}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.company_name}
                  </h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">{selectedFinancing.recipient.email}</h4>
                  <h4 className="w-1/2">{selectedFinancing.sender.email}</h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.city},{" "}
                    {selectedFinancing.recipient.province}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.city},{" "}
                    {selectedFinancing.sender.province}
                  </h4>
                </div>{" "}
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.phone_number}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.phone_number}
                  </h4>
                </div>
                <div className="flex justify-end mt-3 mb-10">
                  <h4 className="font-bold w-1/4">Total</h4>
                  <h4 className="font-bold">
                    {formatIDRCurrency(selectedFinancing.total_amount)}
                  </h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">Tenuer</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2 text-subtitle">
                    {selectedFinancing.tenure === 12
                      ? "1 Year"
                      : selectedFinancing.tenure + " Month"}
                  </h4>
                </div>
              </div>

              {selectedFinancing.status === "PENDING" ? (
                <div className="flex flex-wrap w-full mt-7">
                  <div className="w-full md:w-1/2 md:pr-2 px-0">
                    <button
                      onClick={rejectFinancing}
                      type="button"
                      className="flex justify-center items-center gap-2 text-white font-bold w-full h-12 rounded-lg border-2 bg-red border-red  hover:opacity-80 hover:text-white"
                    >
                      <img src={IconReject} alt="" className="" />
                      <p>Reject Financing</p>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2 pl-0">
                    <button
                      onClick={approveFinancing}
                      className="flex justify-center items-center gap-2 text-white bg-green font-bold w-full h-12 rounded-lg border-2 border-green hover:opacity-80 hover:text-white"
                    >
                      <img src={IconProceedPayment} alt="" className="" />
                      <p>Accept Financing</p>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-1/2 md:pr-2 px-0"> </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinancingDetail;
