import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "6px",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Due: {task.due}</p>
      <div>
        {task.status === "todo" && (
          <button
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
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
