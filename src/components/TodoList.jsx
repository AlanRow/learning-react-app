import { useState } from "react";
import TodoCard from "./TodoCard";
import "./TodoList.css";

export default function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos ?? []);

  const moveUp = (index) => {
    if (index === 0) return;

    setTodos((prev) => {
      const updated = [...prev];
      [updated[index - 1], updated[index]] = [
        updated[index],
        updated[index - 1]
      ];
      return updated;
    });
  };

  const moveDown = (index) => {
    if (index === todos.length - 1) return;

    setTodos((prev) => {
      const updated = [...prev];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index]
      ];
      return updated;
    });
  };

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>Todo List</h2>
      </div>

      {todos.map((todo, index) => (
        <div key={todo.title} className="todo-list-item">
          <TodoCard
            title={todo.title}
            description={todo.description}
          />

          <div className="todo-actions">
            <button onClick={() => moveUp(index)}>↑</button>
            <button onClick={() => moveDown(index)}>↓</button>
          </div>
        </div>
      ))}
    </div>
  );
}