import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import OtpPage from "../pages/Auth/OTP";
import LoginBackOffice from "../pages/Auth/Login/loginBackOffice";
import Dashboard from "../pages/Dashboard";

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
          path: "verifyOtp",
          element: <OtpPage />,
        },
        {
          path: "user/forget",
          element: <ForgetPassword />,
        },
        {
          path: "backoffice",
          element: <LoginBackOffice />,
        },
        {
          path: "backoffice/otppage",
          element: <OtpPage />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

export default setupRouter;
