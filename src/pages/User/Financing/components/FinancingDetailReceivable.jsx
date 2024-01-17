import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useParams } from "react-router-dom";
import { formatIDRCurrency, formatDate } from "../../../../utils/utility";
import { selectFinancingAction } from "../../../../slices/financingSlice";
import { useEffect } from "react";

export default function FinancingDetailReceivable() {
  const dispatch = useDispatch();
  const { selectedFinancing } = useSelector((state) => state.financing);
  const { financingService } = useContext(ServiceContext);
  const { id } = useParams();


  useEffect(() => {
    const getFinancing = () => {
      dispatch(
        selectFinancingAction(async () => {
          const result = await financingService.getReceivableById(id);
          return result.data;
        })
      );
    };
    getFinancing();
  }, [dispatch, financingService, id]);


  return (
    <>
      {selectedFinancing && (
        <div>
          <h1 className="text-title">Financing Detail - Receivable</h1>

          <div className="flex justify-center mt-5 flex-col items-center">
            <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
              <div className="flex">
                <div className="w-1/2">
                  <h1 className="text-subtitle ">Payment No.</h1>
                  <h4>{id}</h4>
                </div>
                <div className="w-1/2 text-end">
                  <h1 className="text-subtitle ">Created Date</h1>
                  <h4>{formatDate(selectedFinancing.created_date)}</h4>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex mt-10 font-semibold">
                  <h4 className="w-1/2">Supplier</h4>
                  <h4 className="w-1/2">From</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.company_name}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.company_name}
                  </h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">{selectedFinancing.sender.email}</h4>
                  <h4 className="w-1/2">{selectedFinancing.recipient.email}</h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.city},{" "}
                    {selectedFinancing.sender.province}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.city},{" "}
                    {selectedFinancing.sender.province}
                  </h4>
                </div>
                <div className="flex">
                  <h4 className="w-1/2">
                    {selectedFinancing.sender.phone_number}
                  </h4>
                  <h4 className="w-1/2">
                    {selectedFinancing.recipient.phone_number}
                  </h4>
                </div>

                <div className="flex mt-5 font-semibold">
                  <h4 className="w-2/3">Financing Detail</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <h4 className="">Request Amount</h4>
                    <h4 className="font-bold">
                      {formatIDRCurrency(selectedFinancing.amount)}
                    </h4>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="">Fee</h4>
                    <h4 className="font-bold">
                      {formatIDRCurrency(selectedFinancing.fee)}
                    </h4>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h4 className="">Receive Amount</h4>
                    <h4 className="text-subtitle font-bold">
                      {formatIDRCurrency(selectedFinancing.total)}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
