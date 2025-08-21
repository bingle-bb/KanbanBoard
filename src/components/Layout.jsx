import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ flex: 1, padding: "20px" }}>
      <Outlet />
    </main>
  </div>
);

export default Layout;
