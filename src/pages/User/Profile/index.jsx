import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

export default function Profile() {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}
