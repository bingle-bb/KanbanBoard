import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const InProgressPage = () => {
  const { tasks } = useTasks();
  const inprogressTasks = tasks.filter((t) => t.status === "inprogress");

  return (
    <div>
      <h2>In Progress</h2>
      <TaskList tasks={inprogressTasks} />
    </div>
  );
};

export default InProgressPage;
