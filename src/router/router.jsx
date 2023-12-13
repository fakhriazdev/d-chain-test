import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import OtpPage from "../pages/Auth/OTP";
import LoginBackOffice from "../pages/Auth/Login/loginBackOffice";
import Dashboard from "../pages/Dashboard";

import Company from "../pages/BackOffice/Company";
import ListCompany from "../pages/BackOffice/Company/components/ListCompany.jsx";
import FormCompany from "../pages/BackOffice/Company/components/FormCompany.jsx";
import EditCompany from "../pages/BackOffice/Company/components/EditCompany.jsx";
import ListPartnership from "../pages/BackOffice/Partnership/components/ListPartnership.jsx";
import Partnership from "../pages/BackOffice/Partnership/index.jsx";

import ForgetPassword from "../pages/Auth/ForgetPassword";


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
          ],
        },
        {
          path: "verifyOtp",
          element: <OtpPage />,
        },
        {
          path: "forget",
          element: <ForgetPassword />,
        },
      ],
    },
  ]);

export default setupRouter;
