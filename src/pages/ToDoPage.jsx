import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const ToDoPage = () => {
  const { tasks } = useTasks();
  const todoTasks = tasks.filter((t) => t.status === "todo");

  return (
    <div className="todo">
      <h2>To Do</h2>

      <TaskList tasks={todoTasks} />
    </div>
  );
};

export default ToDoPage;
