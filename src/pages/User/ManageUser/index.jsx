import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const User = () => {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default User;
