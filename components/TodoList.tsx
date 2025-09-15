// src/components/TodoList.tsx
import { useTodoStore } from "../store/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((task, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          {task}
          <button
            onClick={() => deleteTodo(index)}
            style={{ marginLeft: 10, color: "red" }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}