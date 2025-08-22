import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import "../styles/boardPage.css";

const BoardPage = () => {
  const { tasks } = useTasks();

  const statuses = [
    { key: "todo", label: "To Do" },
    { key: "inprogress", label: "In Progress" },
    { key: "done", label: "Done" },
  ];

  return (
    <div className="board-container">
      {statuses.map((status) => (
        <div className="board-column" key={status.key}>
          <h3>{status.label}</h3>
          <div className="b-div">
            {tasks
              .filter((task) => task.status === status.key)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardPage;
