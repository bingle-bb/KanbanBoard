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
    <div className="container board-container">
      <div className="row">
        {statuses.map((status) => (
          <div className="col board-column" key={status.key}>
            <h3>{status.label}</h3>
            <div>
              {tasks
                .filter((task) => task.status === status.key)
                .map((task) => (
                  <TaskCard key={task.id} task={task} className="task-card" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
