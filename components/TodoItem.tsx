import useTodoStore from "../store/todoStore";

export default function TodoItem({ todo }) {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li>
      {todo.text}{" "}
      <button onClick={() => removeTodo(todo.id)}>ลบ</button>
    </li>
  );
}
