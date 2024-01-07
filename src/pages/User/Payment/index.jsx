import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const Payment = () => {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Payment;