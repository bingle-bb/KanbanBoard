import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ToDoPage from "./pages/ToDoPage";
import InProgressPage from "./pages/InProgressPage";
import DonePage from "./pages/DonePage";
import TaskForm from "./components/TaskForm";
import BoardPage from "./pages/BoardPage";

const App = () => (
  <TaskProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="todo" element={<ToDoPage />} />
          <Route path="inprogress" element={<InProgressPage />} />
          <Route path="done" element={<DonePage />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TaskProvider>
);

export default App;
