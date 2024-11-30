import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter all required fields.");
      return;
    }
    onAddTask({ title, description, dueDate, priority });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };
  

  return (
    <div className="container">
      <h2>Add a New Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
