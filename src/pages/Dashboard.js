import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import TaskFilter from "../components/Tasks/TaskFilter";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get("http://localhost:5001/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data.tasks || []); 
      setFilteredTasks(data.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post("http://localhost:5001/api/tasks", task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => [...prevTasks, data.task]);
      setFilteredTasks((prevTasks) => [...prevTasks, data.task]);
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
      alert("Failed to add task. Please check your input and try again.");
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setFilteredTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const handleUpdateTask = async (task) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:5001/api/tasks/${task.id}`, task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
      setFilteredTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query.toLowerCase()) ||
            task.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredTasks(tasks);
    }
  };

  const handleFilterChange = (filter) => {
    let filtered = tasks;

    if (filter === "Pending" || filter === "Completed") {
      filtered = tasks.filter((task) => task.status === filter);
    } else if (["High", "Medium", "Low"].includes(filter)) {
      filtered = tasks.filter((task) => task.priority === filter);
    }

    setFilteredTasks(filtered);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          Loading your tasks...
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <TaskForm onAddTask={handleAddTask} />
          <TaskFilter onFilterChange={handleFilterChange} />
          {filteredTasks.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              No tasks found. Add a new task to get started!
            </div>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
