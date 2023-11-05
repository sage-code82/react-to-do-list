import React, { useState } from "react";
import ToDo from "./ToDo.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoFormInput from "./TodoFormInput.jsx";
import EmojiConfetti from "./EmojiConfetti.jsx";
import { v4 as uuidv4 } from "uuid";

const ToDoFrame = () => {
  const [todos, setTodos] = useState([]);
  const [showEmojiConfetti, setShowEmojiConfetti] = useState(false);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const toggleEmojiConfetti = () => {
    setShowEmojiConfetti(true);
    setTimeout(() => setShowEmojiConfetti(false), 2000);
  };

  return (
    <div className="ToDoFrame">
      <h1>💩 Get Shit Done! 💩</h1>
      <button onClick={toggleEmojiConfetti}>Show Emoji Confetti</button>
      {showEmojiConfetti && <EmojiConfetti />}
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoFormInput editTodo={editTask} task={todo} />
        ) : (
          <ToDo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default ToDoFrame;
