import React from 'react';
import TabFilter from "../../../../components/TabFilter.jsx";

const DetailFinancingPayable = () => {
    return (
        <div>
            <h1 className="text-title font-normal mb-10">Financing Detail - Payable</h1>
            <div className="max-w-8xl flex justify-between mx-auto px-10 mb-10">
                <div>
                    <h1 className="text-subtitle">Payment No.</h1>
                    <h2 className="text-[16px] text-darkgray">FI-C-36974019-6.23</h2>
                </div>
                <div>
                    <h1 className="text-subtitle">Created date</h1>
                    <h2 className="text-[16px] text-darkgray">26-12-2023</h2>
                </div>
            </div>
            <div className="max-w-5xl flex justify-between px-10 mb-10">
                <div className="text-darkgray">
                    <p className="mb-3">Supplier</p>
                    <p>Oreo Jaya</p>
                    <p>oreo123@gmail.com</p>
                    <p>Medan, Sumatera Utara</p>
                    <p>Batam, Kepulauan Riau</p>
                </div>
                <div>
                    <p className="mb-3">From</p>
                    <p>Goriorio Jaya</p>
                    <p>goriorio123@gmail.com</p>
                    <p>FI-C-36974019-6.23</p>
                    <p>+62821 4723 0984</p>
                </div>
            </div>
            <div className="max-w-8xl gap-20 flex justify-end px-10 mb-10">
                <div>
                    <p className="mb-3 text-[16px] font-bold">Total</p>
                </div>
                <div>
                    <p className="mb-3 text-[16px] font-bold">220.000.000</p>
                </div>
            </div>
            <div className="max-w-8xl gap-20 flex justify-end mb-10">
                <TabFilter filter1={"Ongoing"} filter2={"Completed"}/>
            </div>
            <div className="max-w-8xl px-10 border-2 border-lightgray rounded-lg mx-auto mb-10">
                <div className="grid grid-cols-4 gap-4 py-6">
                    <div>
                        <p>Due date</p>
                        <p className="text-[24px]">26-01-24</p>
                    </div>
                    <div>
                        <p>Amount</p>
                        <p className="text-[24px] text-orange font-bold">Rp 18.333.333</p>
                    </div>
                    <div>
                        <p>Status</p>
                        <p className="text-[24px]">On-going</p>
                    </div>
                    <div className="m-auto">
                        <button className="bg-orange text-white py-4 px-10 rounded-lg">Go to Payment</button>

                    </div>

                </div>
            </div>
            <div className="max-w-8xl px-10 border-2 border-lightgray rounded-lg mx-auto mb-10">
                <div className="grid grid-cols-4 gap-4 py-6">
                    <div>
                        <p>Due date</p>
                        <p className="text-[24px]">26-01-24</p>
                    </div>
                    <div>
                        <p>Amount</p>
                        <p className="text-[24px] text-orange font-bold">Rp 18.333.333</p>
                    </div>
                    <div>
                        <p>Status</p>
                        <p className="text-[24px]">Upcoming</p>
                    </div>
                    <div className="m-auto">
                        <button className="bg-orange text-white py-4 px-10 rounded-lg">Go to Payment</button>
                    </div>

                </div>
            </div>
        </div>


    )
        ;
};

export default DetailFinancingPayable;