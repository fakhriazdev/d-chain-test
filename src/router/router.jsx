import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import OtpPage from "../pages/Auth/NewPassword";

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
          path: "forget",
          element: <ForgetPassword />,
        },{
          path: "otppage",
          element: <OtpPage />,
        },
      ],
    },
  ]);

export default setupRouter;
