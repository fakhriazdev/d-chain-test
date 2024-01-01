import React from "react";

export default function FinancingDetailPayable() {
  return (
    <div>
      <h1 className="text-title">Financing Detail - Payable</h1>

      <div className="flex justify-center mt-5 flex-col items-center">
        <div className=" w-full rounded-2xl shadow-md min-h-fit p-10">
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-subtitle ">Payment No.</h1>
              <h4>FI-C-36974019-6.23</h4>
            </div>
            <div className="w-1/2 text-end">
              <h1 className="text-subtitle ">Created Date</h1>
              <h4>23-11-2023</h4>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex mt-10">
              <h4 className="w-1/2">Supplier</h4>
              <h4 className="w-1/2">From</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">OREO</h4>
              <h4 className="w-1/2">SIPP</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">oreo@gmail.com</h4>
              <h4 className="w-1/2">Sipp@gmail.com</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">Jawa</h4>
              <h4 className="w-1/2">Bali</h4>
            </div>
            <div className="flex">
              <h4 className="w-1/2">01918918</h4>
              <h4 className="w-1/2">23456788</h4>
            </div>

            <div className="flex text-end font-bold">
              <h4 className="w-2/3">Total</h4>
              <h4 className="w-1/3">Rp 200.000.000,00</h4>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex mt-10">
                <h4 className="w-1/2">Tenure</h4>
                <h4 className="w-1/2">No. of Installment</h4>
              </div>
              <div className="flex font-semibold text-[20px]">
                <h4 className="w-1/2">1 Year</h4>
                <h4 className="w-1/2">12x Payment</h4>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full rounded-2xl shadow-md min-h-fit mt-10 p-10">
        </div>
      </div>
    </div>
  );
}
