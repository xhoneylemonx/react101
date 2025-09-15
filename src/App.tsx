// App.tsx
import { useState } from "react";
import "./index.css";
import GradeTracker from "./components/GradeTracker";
import CourseForm from "./components/CourseForm";

function App() {
  // 🎯 Counter, Name, Theme
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("Prathamesh");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // 🧠 Status สำหรับเปลี่ยนสีข้อความ
  const [status, setStatus] = useState<boolean>(false);
  const statusClass = status ? "green-txt" : "red-txt";

  // 🔧 Event Handlers
  const incrementCounter = () => {
    setCounter(counter + 1);
    setStatus(true);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    setStatus(false);
  };

  const changeName = () => setName("Pound");
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 className={statusClass}>CSMJU Dashboard</h1>
      <h2>สอบเสร็จแล้ว สบายใจจัง</h2>

      {/* 🎯 Counter Section */}
      <section style={{ marginTop: "20px" }}>
        <h3>Counter: {counter}</h3>
        <button onClick={incrementCounter}>เพิ่ม</button>
        <button onClick={decrementCounter} style={{ marginLeft: "10px" }}>ลด</button>
      </section>

      {/* 🧑 Name Section */}
      <section style={{ marginTop: "20px" }}>
        <h3>Name: {name}</h3>
        <button onClick={changeName}>เปลี่ยนชื่อ</button>
      </section>

      {/* 🎨 Theme Section */}
      <section style={{ marginTop: "20px" }}>
        <h3>Theme: {theme}</h3>
        <button onClick={changeTheme}>เปลี่ยนธีม</button>
      </section>

      {/* 📘 Grade Tracker System */}
      <section style={{ marginTop: "40px" }}>
        <h2>🌞 ระบบรวม</h2>
        <CourseForm />
        <GradeTracker />
      </section>
    </div>
  );
}

export default App;