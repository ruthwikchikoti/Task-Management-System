import React, { useState } from "react";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editableTask, setEditableTask] = useState({});

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditableTask(task);
  };

  const handleSaveClick = async () => {
    await onUpdate(editableTask);
    setEditingTaskId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          {editingTaskId === task.id ? (
            <div>
              <input
                type="text"
                name="title"
                value={editableTask.title}
                onChange={handleChange}
              />
              <textarea
                name="description"
                value={editableTask.description}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dueDate"
                value={editableTask.dueDate || ""}
                onChange={handleChange}
              />
              <select
                name="priority"
                value={editableTask.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setEditingTaskId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Priority: <span className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</span></p>
              <p>Status: <span className={`status-badge status-${task.status.toLowerCase()}`}>{task.status}</span></p>
              <button
                onClick={() => onUpdate({
                  ...task,
                  status: task.status === 'Completed' ? 'Pending' : 'Completed'
                })}
                className="mark-complete-btn"
              >
                {task.status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
              </button>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
