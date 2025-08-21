import React, { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Collecting data for project",
      des: "dododo",
      status: "todo",
      due: "2025-11-05",
    },
    {
      id: 2,
      title: "Learning MySQL",
      description: "blublu",
      status: "inprogress",
      due: "2025-08-21",
    },
    {
      id: 3,
      title: "Styling landing page",
      description: "cluclu",
      status: "done",
      due: "2025-08-20",
    },
  ],
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case "MOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, status: action.payload.status }
            : t
        ),
      };
    default:
      return state;
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
