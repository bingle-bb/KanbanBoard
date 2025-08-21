import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <div style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
    <h3>Kanban Board</h3>
    <nav>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink to="/create-task">
            <button>+ Create Task</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/todo">To Do</NavLink>
        </li>
        <li>
          <NavLink to="/inprogress">In Progress</NavLink>
        </li>
        <li>
          <NavLink to="/done">Done</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
