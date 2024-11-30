import React from "react";

const TaskFilter = ({ onFilterChange }) => {
  const filterOptions = [
    { label: "All Tasks", value: "all" },
    { label: "Pending", value: "Pending" },
    { label: "Completed", value: "Completed" },
    { label: "High Priority", value: "High" },
    { label: "Medium Priority", value: "Medium" },
    { label: "Low Priority", value: "Low" },
  ];

  return (
    <div className="filter-bar">
      {filterOptions.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className="filter-button"
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
