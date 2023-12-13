import React from 'react';
import Sidebar from "../../../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const Partnership = () => {
    return (
        <div>
            <Sidebar>
                <Outlet/>
            </Sidebar>
        </div>
    );
};

export default Partnership;