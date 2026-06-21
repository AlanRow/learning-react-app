import { useState } from "react";
import "./TodoCard.css";

export default function TodoCard({ title, description }) {
  const [done, setDone] = useState(false);

  return (
    <div className={`todo-card ${done ? "done" : ""}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={() => setDone((prev) => !prev)}>
        {done ? "Undo" : "Done"}
      </button>
    </div>
  );
}