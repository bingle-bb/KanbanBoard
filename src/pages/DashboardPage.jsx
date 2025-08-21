import React from "react";
import { useTasks } from "../context/TaskContext";

const DashboardPage = () => {
  const { tasks } = useTasks();

  const summary = {
    todo: tasks.filter((t) => t.status === "todo").length,
    inprogress: tasks.filter((t) => t.status === "inprogress").length,
    done: tasks.filter((t) => t.status === "done").length,
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>To Do: {summary.todo}</p>
      <p>In Progress: {summary.inprogress}</p>
      <p>Done: {summary.done}</p>
    </div>
  );
};

export default DashboardPage;
