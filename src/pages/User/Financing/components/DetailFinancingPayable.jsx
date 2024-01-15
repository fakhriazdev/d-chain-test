import React from 'react';
import TabFilter from "../../../../components/TabFilter.jsx";
import {useFetchDetailFinancingPayable} from "../../../../features/financing/useFetchDetailFinancingPayable.js";
import {useParams} from "react-router-dom";
import {FormatDate} from "../../../../utils/FormatDate.js";

const DetailFinancingPayable = () => {
    const params = useParams();
    const {data,isLoading} = useFetchDetailFinancingPayable(params.id)
    console.log(data)
    return (
        <div>
            <h1 className="text-title font-normal mb-10">Financing Detail - Payable</h1>
            <div className="max-w-8xl flex justify-between mx-auto px-10 mb-10">
                <div>
                    <h1 className="text-subtitle">Payment No.</h1>
                    <h2 className="text-[16px] text-darkgray">{data?.data?.invoice_number}</h2>
                </div>
                <div>
                    <h1 className="text-subtitle">Created date</h1>
                    <h2 className="text-[16px] text-darkgray">{FormatDate(data?.data?.created_date)}</h2>
                </div>
            </div>
            <div className="max-w-5xl flex justify-between px-10 mb-10">
                <div className="text-darkgray">
                    <p className="mb-3 text-black">Supplier</p>
                    <p>{data?.data?.recipient?.company_name}</p>
                    <p>{data?.data?.recipient?.email}</p>
                    <p>{data?.data?.recipient?.city}, {data?.data?.recipient?.province}</p>
                    <p>{data?.data?.recipient?.phone_number}</p>
                </div>
                <div className="text-darkgray">
                    <p className="mb-3 text-black">From</p>
                    <p>{data?.data?.sender?.company_name}</p>
                    <p>{data?.data?.sender?.email}</p>
                    <p>{data?.data?.sender?.city}, {data?.data?.recipient?.province}</p>
                    <p>{data?.data?.sender?.phone_number}</p>
                </div>
            </div>
            <div className="max-w-8xl gap-20 flex justify-end px-10 mb-10">
                <div>
                    <p className="mb-3 text-[16px] font-bold">Total</p>

                </div>
                <div>
                    <p className="mb-3 text-[16px] font-bold">{`Rp. ${Number(data?.data?.total_amount).toLocaleString("id-ID")}`}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 flex max-w-8xl px-10 rounded-lg mx-auto mb-10">
                <div>
                    <p className="mb-3 text-[16px] text-darkgray">Tenure</p>
                    <p className="mb-3 text-subtitle font-medium">{data?.data?.tenure !== 12 ? (`${data?.data?.tenure} Months`) : "1 Year"}</p>
                </div>
                <div>
                    <p className="mb-3 text-[16px] text-darkgray">No. of Installment</p>
                    <p className="mb-3 text-subtitle font-medium">{data?.data?.tenure}x payment</p>
                </div>
            </div>
            <div className="max-w-8xl gap-20 flex justify-end mb-10">
                <TabFilter
                    filter1="Ongoing"
                    filter2="Completed"
                />

            </div>
            {data?.data?.tenure_list_detail.map((tenures)=>{
                return (
                    <div className="max-w-8xl px-10 border-2 border-lightgray rounded-lg mx-auto mb-10">
                        <div className="grid grid-cols-4 gap-4 py-6">
                            <div>
                                <p>Due date</p>
                                <p className="text-[24px]">{FormatDate(tenures?.due_date)}</p>
                            </div>
                            <div>
                                <p>Amount</p>
                                <p className="text-[24px] text-orange font-bold">{`Rp. ${Number(tenures?.amount).toLocaleString("id-ID")}`}</p>
                            </div>
                            <div>
                                <p>Status</p>
                                <p className="text-[24px]">{tenures?.status}</p>
                            </div>
                            <div className="m-auto">
                                {tenures?.status === "ONGOING" ? (
                                    <button className="bg-orange text-white py-4 px-10 rounded-lg">Go to
                                        Payment</button>) : (
                                    <button className="bg-lightgray disabled text-white py-4 px-10 rounded-lg">Go to
                                        Payment</button>)}


                            </div>

                        </div>
                    </div>
                )
            })}
        </div>


    )
        ;
};

export default DetailFinancingPayable;