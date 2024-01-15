import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const FinancingBackoffice = () => {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default FinancingBackoffice;
