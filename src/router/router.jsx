import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import OtpPage from "../pages/Auth/OTP";
import LoginBackOffice from "../pages/Auth/Login/loginBackOffice";
import Dashboard from "../pages/Dashboard";

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
import { element } from "prop-types";

import Invoice from "../pages/User/Invoice/index.jsx";
import ListInvoice from "../pages/User/Invoice/components/ListInvoice.jsx";
import InvoiceGeneration from "../pages/User/Invoice/components/InvoiceGeneration.jsx";
import FormPartnership from "../pages/BackOffice/Partnership/components/FormPartnership.jsx";
import PartnershipUser from "../pages/BackOffice/PartnershipUser/index.jsx";
import ListPartnershipUser from "../pages/BackOffice/PartnershipUser/components/ListPartnershipUser.jsx";
import FinancingList from "../pages/BackOffice/Financing/components/FinancingList.jsx";
import Financing from "../pages/BackOffice/Financing/index.jsx";
import FinancingDetail from "../pages/BackOffice/Financing/components/FinancingDetail.jsx";
import FinancingDetailReceivable from "../pages/BackOffice/Financing/components/FinancingDetailReceivable.jsx";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>Error Cuyyy....</>,
      children: [
        {
          path: "user",
          element: <Login />,
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
          path: "/user/invoice",
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
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "invoice",
          element: <Invoice />,
          children: [
            {
              path: "detail",
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
          element: <Financing />,
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
              element: <FinancingDetailReceivable />,
            },
          ],
        },
      ],
    },
  ]);

export default setupRouter;
