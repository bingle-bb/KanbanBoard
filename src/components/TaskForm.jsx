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
    <div className="taskform_container mx-auto ms-2">
        <div className="taskform_control ">
          <h2 className="taskform_title ">Create project</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        {/* Title */}
        <div className="title_input_control">
          <label htmlFor="title">Title</label>
          <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
        </div>

        {/* Description */}
        <div className="description_input_control">
          <label htmlFor="description">Description</label>
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
        </div>

        {/* Workflow / Status */}
        <div className="work_flow_control">
          <label>Workflow </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginBottom: "10px" , display:"block" }}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        </div>

        {/* Due date */}
        
        <div className="date_select_control">
          <label>Due Date </label>
        <input
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
              style={{ marginBottom: "10px", display:"block" }}
        />
        <br />
        </div>

        <button type="submit">Create</button>
      </form>
        </div>
    </div>
  );
};

export default TaskForm;
