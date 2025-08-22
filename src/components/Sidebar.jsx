import React from "react";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCenterFocusStrong } from "react-icons/md";
import { TbDashboardFilled } from "react-icons/tb";
import { Gauge, ClipboardList, BarChart3, CheckCircle } from "lucide-react";

import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <h3>Kanban Board</h3>
    <nav>
      <ul>
        <li>
          <NavLink to="/create-task">
            <button>
              +<span> Create Task</span>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <Gauge size={21} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo">
            <ClipboardList size={21} />
            <span>To Do</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/inprogress">
            <BarChart3 size={21} />
            <span>In Progress</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/done">
            <CheckCircle size={21} />
            <span>Done</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
