import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function Invoice() {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}
