import React from "react";
import { useTasks } from "../context/TaskContext";
import BoardPage from "./BoardPage";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <h2 className="text-center mb-4">Dashboard</h2>

      <div className="row mb-4">
        <div className="badgeCard col-md-4 mb-3">
          <div className="card text-center border-primary">
            <div className="card-body ">
              <h5 className="card-title">To Do</h5>
              <p className="card-text display-1">{summary.todo}</p>
            </div>
          </div>
        </div>

        <div className="badgeCard col-md-4 mb-3">
          <div className="card text-center border-warning">
            <div className="card-body">
              <h5 className="card-title">In Progress</h5>
              <p className="card-text display-1">{summary.inprogress}</p>
            </div>
          </div>
        </div>

        <div className="badgeCard col-md-4 mb-3">
          <div className="card text-center border-success">
            <div className="card-body">
              <h5 className="card-title">Done</h5>
              <p className="card-text display-1">{summary.done}</p>
            </div>
          </div>
        </div>
      </div>

      <BoardPage />
    </div>
  );
};

export default DashboardPage;
