// src/components/TodoForm.tsx
import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}