import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";
import DashboardPage from "../pages/DashboardPage";

const Layout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <main className="main-content">
      <DashboardPage />
    </main>
  </div>
);

export default Layout;
