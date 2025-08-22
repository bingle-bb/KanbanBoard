import React from "react";
import { useTasks } from "../context/TaskContext";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskCard = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <small className="text-muted">
            Due: <span className="fw-bold">{task.due}</span>
          </small>
        </p>

        <div className="mt-auto d-flex gap-2">
          {task.status === "todo" && (
            <button
              className="btn "
              style={{ backgroundColor: "#164b82", color: "white" }}
              onClick={() =>
                dispatch({
                  type: "MOVE_TASK",
                  payload: { id: task.id, status: "inprogress" },
                })
              }
            >
              Start
            </button>
          )}
          {task.status === "inprogress" && (
            <button
              className="btn "
              style={{ backgroundColor: "#164b82", color: "white" }}
              onClick={() =>
                dispatch({
                  type: "MOVE_TASK",
                  payload: { id: task.id, status: "done" },
                })
              }
            >
              Finish
            </button>
          )}
          <button
            className="btn "
            style={{ color: "#164b82", border: "1px solid #164b82" }}
            onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
