import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>Error Cuyyy...</>,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

export default setupRouter;
