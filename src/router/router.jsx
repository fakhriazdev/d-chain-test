import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import OtpPage from "../pages/Auth/OTP";
import LoginBackOffice from "../pages/Auth/Login/loginBackOffice";
import DashboardUser from "../pages/User/Dashboard";

import Company from "../pages/BackOffice/Company";
import ListCompany from "../pages/BackOffice/Company/components/ListCompany.jsx";
import FormCompany from "../pages/BackOffice/Company/components/FormCompany.jsx";
import EditCompany from "../pages/BackOffice/Company/components/EditCompany.jsx";
import ListPartnership from "../pages/BackOffice/Partnership/components/ListPartnership.jsx";
import Partnership from "../pages/BackOffice/Partnership/index.jsx";
// import Invoice from "../pages/Invoice";
import InvoiceDetail from "../pages/Invoice/components/InvoiceDetail.jsx";
import InvoiceProcessed from "../pages/Invoice/components/InvoiceProcessed.jsx";
import InvoiceReject from "../pages/Invoice/components/InvoiceReject.jsx";
import InvoiceRejected from "../pages/Invoice/components/InvoiceRejected.jsx";

import ForgetPassword from "../pages/Auth/ForgetPassword";
import SuccessSendMail from "../pages/Auth/ForgetPassword/SuccessSendMail";
import NewPassword from "../pages/Auth/NewPassword";
import Profile from "../pages/User/Profile";
import SuperUserProfile from "../pages/User/Profile/components/SuperUserProfile.jsx";
// import { element } from "prop-types";

import Invoice from "../pages/User/Invoice/index.jsx";
import ListInvoice from "../pages/User/Invoice/components/ListInvoice.jsx";
import InvoiceGeneration from "../pages/User/Invoice/components/InvoiceGeneration.jsx";
import FormPartnership from "../pages/BackOffice/Partnership/components/FormPartnership.jsx";
import PartnershipUser from "../pages/BackOffice/PartnershipUser/index.jsx";
import ListPartnershipUser from "../pages/BackOffice/PartnershipUser/components/ListPartnershipUser.jsx";
import Financing from "../pages/User/Financing/index.jsx";
import FinancingDetailPayable from "../pages/User/Financing/components/FinancingDetailReceivable.jsx";
import RequestFinancingReceivable from "../pages/User/Financing/components/RequestFinancingReceivable.jsx";
import Payment from "../pages/User/Payment/index.jsx";
import PaymentListOngoing from "../pages/User/Payment/components/PaymentListOngoing.jsx";
import PaymentListHistory from "../pages/User/Payment/components/PaymentListHistory.jsx";
import FinancingDetailReceivable from "../pages/User/Financing/components/FinancingDetailReceivable.jsx";
import Management from "../pages/User/Management/index.jsx";
import FinancingList from "../pages/BackOffice/Financing/components/FinancingList.jsx";
import FinancingDetail from "../pages/BackOffice/Financing/components/FinancingDetail.jsx";
import PaymentDetailInvoice from "../pages/User/Payment/components/PaymetDetailInvoice.jsx";
import PaymentDetailFinancing from "../pages/User/Payment/components/PaymentDetailFinancing.jsx";
import PaymentSuccessfully from "../pages/User/Payment/components/PaymentSuccesfully.jsx";
import UserList from "../pages/User/ManageUser/components/UserList.jsx";
import User from "../pages/User/ManageUser/index.jsx";
import UserListBackoffice from "../pages/BackOffice/ManageUser/components/UserListBackoffice.jsx";
import UserBackoffice from "../pages/BackOffice/ManageUser/index.jsx";
import FinancingDetailReceivableBo from "../pages/BackOffice/Financing/components/FinancingDetailReceivable.jsx";
import FinancingBackoffice from "../pages/BackOffice/Financing/index.jsx";
import ListFinancing from "../pages/User/Financing/components/ListFinancing.jsx";
import DetailFinancingPayable from "../pages/User/Financing/components/DetailFinancingPayable.jsx";
import RequestFinancingPayable from "../pages/User/Financing/components/RequestFinancingPayable.jsx";
import Dashbaord from "../pages/BackOffice/Dashboard/index.jsx";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>Error Cuyyy....</>,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <DashboardUser/>,
        },  
        {
          path: "/dashboard/partnership",
          element: <PartnershipUser />,
          children: [
            {
              index: true,
              element: <ListPartnershipUser />,
            },
          ],
        },
        {
          path: "/dashboard/invoice",
          element: <Invoice />,
          children: [
            {
              index: true,
              element: <ListInvoice />,
            },
            {
              path: "add",
              element: <InvoiceGeneration />,
            },
            {
              path: "detail/:id",
              element: <InvoiceDetail />,
            },
            {
              path: "processed",
              element: <InvoiceProcessed />,
            },
            {
              path: "reject",
              element: <InvoiceReject />,
            },
            {
              path: "rejected",
              element: <InvoiceRejected />,
            },

          ],
        },
        {
          path: "/dashboard/financing",
          element: <PartnershipUser />,
          children: [
            {
              index: true,
              element: <ListFinancing />,
            },
            {
              path: ":id/detail-payable",
              element: <DetailFinancingPayable />,
            },
            {
              path: "request-financing-payable",
              element: <RequestFinancingPayable />,
            },
            {
              path: "payable",
              element: <FinancingDetailPayable />,
            },
            {
              path: "request-financing-receivable",
              element: <RequestFinancingReceivable />,
            },
            {
              path: "receivable/:id",
              element: <FinancingDetailReceivable />,
            },
            {
              path: "rejected",
              element: <InvoiceRejected />,
            },
          ],
        },
        {
          path: "/dashboard/payment",
          element: <Payment />,
          children: [
            {
              index: true,
              element: <PaymentListOngoing />,
            },
            {
              path: "history",
              element: <PaymentListHistory />,
            },
            {
              path: "detail/:id",
              element: <PaymentDetailInvoice />,
            },
            {
              path: "detail/financing/:id",
              element: <PaymentDetailFinancing />,
            },
            {
              path: "detail/:id/success",
              element: <PaymentSuccessfully />,
            },
          ],
        },
        {
          path: "/dashboard/user",
          element: <User />,
          children: [
            {
              index: true,
              element: <UserList />,
            },
            {
              path: "management",
              element: <Management/>,
              children:[
                {
                  path:":id",
                  element: <Management/>
                }
              ]
            }
          ],
        },
       
        









        {
          path: "/backoffice/company",
          element: <Company />,
          children: [
            {
              index: true,
              element: <ListCompany />,
            },
            {
              path: "add",
              element: <FormCompany />,
            },
            {
              path: ":id/edit",
              element: <EditCompany />,
            },
          ],
        },
        {
          path: "/backoffice/:id/partnership",
          element: <Partnership />,
          children: [
            {
              index: true,
              element: <ListPartnership />,
            },
            {
              path: "add",
              element: <FormPartnership />,
            },
          ],
        },
        
        {
          path: "verifyOtp",
          element: <OtpPage />,
        },
        {
          path: "user/forget",
          element: <ForgetPassword />,
        },
        {
          path: "/forget/success",
          element: <SuccessSendMail />,
        },
        {
          path: "/user/forget/:id",
          element: <NewPassword />,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "superuser/:companyId",
              element: <SuperUserProfile />,
            },
          ],
        },
        {
          path: "backoffice",
          element: <LoginBackOffice />,
        },
        {
          path: "backoffice/dashboard",
          element: <Dashbaord />,
        },
        // {
        //   path: "dashboard",
        //   element: <Dashboard />,
        // },
        
        {
          path: "financing",
          element: <Financing />,
          children: [
            
          ],
        },




        {
          path: "/backoffice/partnership",
          element: <PartnershipUser />,
          children: [
            {
              index: true,
              element: <ListPartnershipUser />,
            },
          ],
        },
        {
          path: "/backoffice/financing",
          element: <FinancingBackoffice />,
          children: [
            {
              index: true,
              element: <FinancingList />,
            },
            {
              path: "detail/:id",
              element: <FinancingDetail />,
            },
            {
              path: "detail/receivable/:id",
              element: <FinancingDetailReceivableBo />,
            },
          ],
        },

        
       
        {
          path: "backoffice",
          element: <UserBackoffice />,
          children: [
            {
              path: "manageuser",
              element: <UserListBackoffice />,
            },
          ],
        },
        
      ],
    },
  ]);

export default setupRouter;
