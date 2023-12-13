import React from 'react';
import Sidebar from '../../../components/Sidebar.jsx'
import ListCompany from '../../../pages/BackOffice/Company/components/ListCompany.jsx'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Outlet } from 'react-router-dom';
const Company = () => {
    return (

        <div>
            <Sidebar>
                    <Outlet/>
            </Sidebar>
        </div>
    );
};

export default Company;