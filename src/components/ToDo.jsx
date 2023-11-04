import React from "react";
// import fonts to go here
// import icons pen to go here
// import icons trash to go here

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="ToDo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        {/* icons will go here
      icons will go here */}
      </div>
    </div>
  );
};
