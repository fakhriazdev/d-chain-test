import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const Financing = () => {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Financing;
