import React from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/TestCard.css";

const TaskCard = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <div className="task-card">
      <div className="card-div">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p>
          Due:
          <span className="due-date">{task.due}</span>
        </p>
      </div>

      <div className="btn-div">
        {task.status === "todo" && (
          <button
            onClick={() =>
              dispatch({
                type: "MOVE_TASK",
                payload: { id: task.id, status: "inprogress" },
              })
            }
            style={{ color: "white", backgroundColor: "#294c83" }}
          >
            Start
          </button>
        )}
        {task.status === "inprogress" && (
          <button
            onClick={() =>
              dispatch({
                type: "MOVE_TASK",
                payload: { id: task.id, status: "done" },
              })
            }
            style={{ color: "white", backgroundColor: "#294c83" }}
          >
            Finish
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
