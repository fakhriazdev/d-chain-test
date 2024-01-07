import Sidebar from "../../../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}
