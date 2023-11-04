import React from "react";
import penIcon from "../assets/iconmonstr-pencil-square-lined.svg";
import trashIcon from "../assets/iconmonstr-trash-can-28.svg";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="ToDo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <img
          className="edit-icon"
          src={penIcon}
          alt="Edit"
          onClick={() => editTodo(task.id)}
        />
        <img
          className="delete-icon"
          src={trashIcon}
          alt="Delete"
          onClick={() => deleteToDo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
