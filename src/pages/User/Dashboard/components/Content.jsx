import React, { PureComponent } from "react";
import { useState } from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import Status from "../../../../components/Status";
import { useEffect } from "react";
import { useContext } from "react";
import { useFormik } from "formik";
import { ServiceContext } from "../../../../context/ServiceContext";
import { formatIDRCurrency } from "../../../../utils/utility";

const data = [
  { name: "Segment 1", value: 50, color: "#96D9FF" },
  { name: "Segment 2", value: 50, color: "#FF6347" },
  { name: "Segment 3", value: 50, color: "#98FB98" },
  { name: "Segment 4", value: 50, color: "#9370DB" },
];
const COLORS = ["#FFB84E", "#FF6C6C", "#97AEFF", "#96D9FF"];

export default function Content() {
  const { dashboardUserServise } = useContext(ServiceContext);
  const [isChecked, setIsChecked] = useState(false);
  const [limit, setLimit] = useState({});

  const formik = useFormik({
    initialValues: {
      type: "",
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    let checked = "";
    if (!isChecked) {
      //   formik.setValues({
      //     type: "Receivable",
      //   });
      checked = "Receivable";
    } else {
      //   formik.setValues({
      //     type: "Payable",
      //   });
      checked = "Payable";
    }
    console.log(checked);

    // dispatch(
    //   invoiceAction(async () => {
    //     const result = await invoiceService.fetchInvoices({
    //       page: 1,
    //       size: 10,
    //       direction: "asc",
    //       type: checked,
    //       status: null,
    //     });
    //     console.log(result);
    //     return result;
    //   })
    // );
  };

  useEffect(() => {
    const getLimit = async () => {
      try {
        const { data } = await dashboardUserServise.getLimit();
        setLimit(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLimit();
  }, [dashboardUserServise]);

  
  const percentage = Math.floor((limit.limitUsed/limit.limit)*100)
  console.log(percentage);

  return (
    <>
      <h1 className="text-title mb-5">Dashboard</h1>
      <div className="flex w-full gap-3">
        <div className="flex flex-col w-2/5 d h-[450px] gap-3">
          <div className="flex flex-col justify-between w-full h-1/3 bg-white rounded-2xl p-5 shadow-md">
            <p>Limit</p>
            <h1 className="text-title text-orange font-bold">
              {formatIDRCurrency(limit.limit)}
            </h1>
            <p>
              Limit Used:{" "}
              <span className="font-bold">
                {formatIDRCurrency(limit.limitUsed)}
              </span>
            </p>

            <div className="w-full mt-3 bg-lightgray/50 rounded-full h-2.5 dark:bg-gray">
              <div
                className={`bg-orange h-2.5 rounded-full w-[0%]`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-1/3 bg-white rounded-2xl p-5 shadow-md">
            <p>Income</p>
            <h1 className="text-title text-orange font-bold">
              {formatIDRCurrency(limit.income)}
            </h1>
            <p>
              Last Month:{" "}
              <span className="font-bold">
                {formatIDRCurrency(limit.incomeLastMonth)}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between w-full h-1/3 bg-white rounded-2xl p-5 shadow-md">
            <p>Expense</p>
            <h1 className="text-title text-orange font-bold">
              {formatIDRCurrency(limit.expense)}
            </h1>
            <p>
              Last Month:{" "}
              <span className="font-bold">
                {" "}
                {formatIDRCurrency(limit.expenseLastMonth)}
              </span>
            </p>
          </div>
        </div>
        <div className="w-3/5 h-[450px] rounded-2xl p-3 shadow-md">
          <div className="relative flex justify-between mb-6 mx-4">
            <h1 className="text-subtitle my-auto">Cash Cycle</h1>
            <div>
              <label className="themeSwitcherTwo shadow-card border border-[#D5D5D7] relative inline-flex cursor-pointer select-none items-center justify-center rounded-xl bg-[#F3F4F6] p-1">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                    !isChecked ? "text-white bg-orange" : "text-orange"
                  }`}
                >
                  Account Payable
                </span>
                <span
                  className={`flex items-center space-x-[6px] rounded-xl py-2 px-3 text-sm font-medium ${
                    isChecked ? "text-white bg-orange" : "text-orange"
                  }`}
                >
                  Account Receivable
                </span>
              </label>
            </div>
          </div>
          <div className="h-72  flex">
            <div>
              <PieChart width={400} height={770}>
                <Pie
                  data={data}
                  cx={200}
                  cy={150}
                  innerRadius={80}
                  outerRadius={125}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <Label
                    value="Cash Cycle"
                    position="center"
                    className="font-bold"
                  />
                  <Legend
                    align="right"
                    verticalAlign="middle"
                    layout="vertical"
                  />
                </Pie>
              </PieChart>
            </div>
            <div className="w-1/2 flex flex-col gap-3 justify-center">
              <div className="flex gap-3">
                <span className=" bg-[#96D9FF] w-5 h-5 rounded-md mt-1" />
                Paid Invoice
              </div>
              <div className="flex gap-3">
                <span className=" bg-[#FFB84E] w-5 h-5 rounded-md mt-1" />
                Unpaid Invoice
              </div>
              <div className="flex gap-3">
                <span className=" bg-[#FF6C6C] w-5 h-5 rounded-md mt-1" />
                Paid Financing
              </div>
              <div className="flex gap-3">
                <span className=" bg-[#97AEFF] w-5 h-5 rounded-md mt-1" />
                Unpaid Financing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-3 mt-3">
        <div className="w-1/2 h-96 shadow-md p-3 mt-3">
          <div className="relative flex justify-between mb-6 mx-4">
            <h1 className="text-subtitle my-auto">Financing Summary</h1>
            <div>
              <button className="bg-orange text-white w-20 h-10 rounded-lg">
                See All
              </button>
            </div>
          </div>
          <div className="bg-red mx-4">
            <table className="w-full text-sm text-left rtl:text-right mb-2">
              <thead className="text-white text-[16px] font-[300] bg-orange rounded">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Supplier
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="success">Completed</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="pending">Pending</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="approve">Approved</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="approve">On-Going</Status>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2 h-96 shadow-md p-3 mt-3">
          <div className="relative flex justify-between mb-6 mx-4">
            <h1 className="text-subtitle my-auto">Invoicing Summary</h1>
            <div>
              <button className="bg-orange text-white w-20 h-10 rounded-lg">
                See All
              </button>
            </div>
          </div>
          <div className="bg-red mx-4">
            <table className="w-full text-sm text-left rtl:text-right mb-2">
              <thead className="text-white text-[16px] font-[300] bg-orange rounded">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Supplier
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="pending">Unpaid</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="rejected">Disputed</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="success">Paid</Status>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="col-span-4"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    23-11-2023
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    Oreo
                  </td>

                  <td
                    scope="col"
                    className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]"
                  >
                    <Status variant="rejected">Late</Status>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
