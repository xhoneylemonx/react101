// components/TodoList.tsx
import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📝 To-do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="พิมพ์งานที่ต้องทำ"
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>เพิ่ม</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: 10, color: "red" }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;