import { Outlet } from "react-router-dom";
import Content from "./components/Content";
import Sidebar from "../../../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar>
        <Content />
      </Sidebar>
    </>
  );
}
