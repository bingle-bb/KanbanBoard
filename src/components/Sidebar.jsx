import React from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCenterFocusStrong } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <h3>Kanban Board</h3>
    
    <div className="create_button_control">
      
          <NavLink to="/create-task">
            <button>+ Create Task</button>
          </NavLink>
        
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <LuLayoutDashboard />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo">
            <RiCalendarTodoLine /> To Do
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
