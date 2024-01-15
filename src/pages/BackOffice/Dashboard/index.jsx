import React from 'react';
import Sidebar from "../../../components/Sidebar.jsx";
import {Link, Outlet} from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined.js";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined.js";
import {Badge} from "@mui/material";

const data = [
    {
        id: 'AST008',
        name:"Astra International Tbk.",
        performing: 4000,
        limit:2000000000

    },
    {
        id: 'TOY010',
        name: "Toyota Motor Manufacturing",
        performing: 3500,
        limit:2000000000
    },
    {
        id: 'HON008',
        name: "Honda Prospect Motor",
        performing: 3000,
        limit:2000000000
    },
    {
        id: 'DAI008',
        name:"Daihatsu Astra Motor",
        performing: 2500,
        limit:2000000000
    },
    {
        id: 'WUL007',
        name: "Wuling Motors",
        performing: 2000,
        limit:2000000000
    },
];

const Dashbaord = () => {
    const dataWithOpacity = data.map((entry, index) => {
        const opacity = 1 - index * 0.1; // You can adjust the multiplier to control opacity
        return {
            ...entry,
            opacity: opacity,
        };
    });
    return (

        <Sidebar>
            <h1 className="text-title mb-5">dashboard backoffice</h1>
            <h2 className="text-subtitle mb-5">Company Summary</h2>
            <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        <div className="w-full bg-green px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">64</h1>
                            <p className="text-[16px] max-w-[68px]">Registered Company</p>
                        </div>
                        <div className="w-full bg-yellow px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">12</h1>
                            <p className="text-[16px] max-w-[68px]">Need Attention</p>
                        </div>
                        <div className="w-full bg-red px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">2</h1>
                            <p className="text-[16px] max-w-[68px]">Restricted Company</p>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-xl rounded-xl p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-[20px]">At-Risk Company</h1>
                            <button className="p-3 bg-orange text-white rounded-xl">See All</button>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right mb-2">
                            <thead className="text-white text-[16px] font-[300] bg-orange ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Limit Usage
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((entity, index) => {
                                return (
                                    <tr className="bg-white">
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                            {entity.name}
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                            {`Rp. ${entity.limit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                            <Badge>Cleared</Badge>
                                        </th>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-x-auto shadow-xl rounded-xl p-6">
                        <div className="flex justify-between mb-10">
                            <h1 className="text-subtitle">Top 5 Performing Company</h1>
                            <h1>Filter</h1>
                        </div>
                        <ResponsiveContainer width="100%" height={490}>
                            <BarChart width="100%" data={dataWithOpacity}>
                                <YAxis
                                    axisLine={false}
                                    tick={false}
                                    axisLine={{strokeWidth: 2, stroke: 'black'}}/>
                                <XAxis dataKey="id" axisLine={{strokeWidth: 2, stroke: 'black'}}/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="performing" fill="#f47321" barSize={80}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-10">
                    <div className="flex flex-row md:flex-col lg:flex-col justify-between">
                        <div className="bg-green px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">64</h1>
                            <p className="text-[16px] max-w-[100px]">Registered Company</p>
                        </div>
                        <div className="bg-yellow px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">12</h1>
                            <p className="text-[16px] max-w-[100px]">Need Attention</p>
                        </div>
                        <div className="bg-red px-8 py-6 text-white rounded-3xl shadow-md">
                            <h1 className="text-title font-bold">2</h1>
                            <p className="text-[16px] max-w-[100px]">Restricted Company</p>
                        </div>
                    </div>
                    <div className="w-full relative overflow-x-auto shadow-xl rounded-xl p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-[20px]">Recent Financing Activity</h1>
                            <button className="p-3 bg-orange text-white rounded-xl">See All</button>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right mb-2">
                            <thead className="text-white text-[16px] font-[300] bg-orange ">
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
                            {data.map((entity, index) => {
                                return (
                                    <tr className="bg-white">
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                            26-06-24
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-bold text-orange whitespace-nowrap text-[14px]">
                                            {entity.name}
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-4 font-normal text-graylight whitespace-nowrap text-[14px]">
                                            <Badge>Completed</Badge>
                                        </th>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
            </div>
        </Sidebar>

    );
};

export default Dashbaord;