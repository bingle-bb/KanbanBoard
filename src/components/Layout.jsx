import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const Layout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <main className="main-content">
      <Outlet />
    </main>
  </div>
);

export default Layout;
