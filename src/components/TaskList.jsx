import React from "react";
import TaskCard from "../components/TaskCard";

const TaskList = ({ tasks }) => (
  <div>
    {tasks.length === 0 ? (
      <p>No tasks here</p>
    ) : (
      tasks.map((task) => <TaskCard key={task.id} task={task} />)
    )}
  </div>
);

export default TaskList;
