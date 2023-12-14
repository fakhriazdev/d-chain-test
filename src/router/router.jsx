import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import OtpPage from "../pages/Auth/OTP";
import LoginBackOffice from "../pages/Auth/Login/loginBackOffice";
import OtpBackoffice from "../pages/Auth/OTP/otpBackoffice";

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
          path: "user/otppage",
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
          element: <OtpBackoffice />,
        },
      ],
    },
  ]);

export default setupRouter;
