import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import "bootstrap/dist/css/bootstrap.min.css";

const BoardPage = () => {
  const { tasks } = useTasks();

  const statuses = [
    { key: "todo", label: "To Do" },
    { key: "inprogress", label: "In Progress" },
    { key: "done", label: "Done" },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {statuses.map((status) => (
          <div className="col-md-4" key={status.key}>
            <h3 className="text-center mb-3">{status.label}</h3>
            <div className="row row-cols-1 row-cols-md-1 g-3">
              {tasks
                .filter((task) => task.status === status.key)
                .map((task) => (
                  <div className="col" key={task.id}>
                    <TaskCard task={task} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
