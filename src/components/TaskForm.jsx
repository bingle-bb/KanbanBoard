import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import '../styles/TaskForm.css'

const TaskForm = () => {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // new field
  const [status, setStatus] = useState("todo");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title,
        description,
        status,
        due: due || "No deadline",
      },
    });

    // reset form
    setTitle("");
    setDescription("");
    setStatus("todo");
    setDue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      {/* Title */}
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />

      {/* Description */}
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "300px",
          height: "80px",
        }}
      />

      {/* Workflow / Status */}
      <label>Workflow: </label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginBottom: "10px" }}
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      {/* Due date */}
      <br />
      <label>Due Date: </label>
      <input
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
