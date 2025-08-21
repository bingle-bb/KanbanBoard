import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const DonePage = () => {
  const { tasks } = useTasks();
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div>
      <h2>Done</h2>
      <TaskList tasks={doneTasks} />
    </div>
  );
};

export default DonePage;
