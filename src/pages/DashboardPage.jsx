import React from "react";
import { useTasks } from "../context/TaskContext";
import BoardPage from "./BoardPage";
import "../styles/dashBoard.css";

const DashboardPage = () => {
  const { tasks } = useTasks();

  const summary = {
    todo: tasks.filter((t) => t.status === "todo").length,
    inprogress: tasks.filter((t) => t.status === "inprogress").length,
    done: tasks.filter((t) => t.status === "done").length,
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Dashboard</h2>

      <div className="dashboard-summary-row">
        <div className="dashboard-summary-col">
          <h5>To Do</h5>
          <p>{summary.todo}</p>
        </div>
        <div className="dashboard-summary-col">
          <h5>In Progress</h5>
          <p>{summary.inprogress}</p>
        </div>
        <div className="dashboard-summary-col">
          <h5>Done</h5>
          <p>{summary.done}</p>
        </div>
      </div>

      <BoardPage />
    </div>
  );
};

export default DashboardPage;
