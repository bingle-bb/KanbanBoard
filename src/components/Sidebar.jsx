import React from "react";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCenterFocusStrong } from "react-icons/md";
import { TbDashboardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <h3>Kanban Board</h3>
    <nav>
      <ul>
        <li>
          <NavLink to="/create-task">
            <button>+ Create Task</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <TbDashboardFilled />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo">
            <IoMdListBox /> To Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/inprogress">
            <MdCenterFocusStrong /> In Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/done">
            <AiOutlineFileDone /> Done
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
