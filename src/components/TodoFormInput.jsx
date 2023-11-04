import React, { useState } from "react";

const ToDoFormInput = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-butt">
        Add Task
      </button>
    </form>
  );
};

export default ToDoFormInput;
