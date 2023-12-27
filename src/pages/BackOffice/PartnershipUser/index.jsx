
import React from 'react';
import Sidebar from "../../../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const PartnershipUser = () => {
    return (
        <div>
            <Sidebar>
                <Outlet/>
            </Sidebar>
        </div>
    );
};

export default PartnershipUser;