import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="What we doin?!"
      />
      <button type="submit" className="todo-butt">
        Add Task
      </button>
    </form>
  );
};
