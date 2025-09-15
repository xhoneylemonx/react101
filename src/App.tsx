// App.tsx
import { useState } from "react";
import "./index.css";
import GradeTracker from "./components/GradeTracker";

function App() {
  // 🎯 Counter, Name, Theme
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("Prathamesh");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // 🧠 Status สำหรับเปลี่ยนสีข้อความ
  const [status, setStatus] = useState<boolean>(false); // false = แดง, true = เขียว
  const statusClass = status ? "green-txt" : "red-txt";

  // 🔧 Event Handlers
  const incrementCounter = () => {
    setCounter(counter + 1);
    setStatus(true); // เปลี่ยนเป็นเขียวเมื่อคลิก
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    setStatus(false); // เปลี่ยนเป็นแดงเมื่อคลิก
  };

  const changeName = () => setName("Pound");
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 className={statusClass}>CSMJU</h1>
      <h2>สอบเสร็จแล้ว สบายใจจัง</h2>

      {/* 🎯 Counter Section */}
      <h3>Counter: {counter}</h3>
      <button onClick={incrementCounter}>เพิ่ม</button>
      <button onClick={decrementCounter} style={{ marginLeft: "10px" }}>ลด</button>

      {/* 🧑 Name Section */}
      <h3>Name: {name}</h3>
      <button onClick={changeName}>เปลี่ยนชื่อ</button>

      {/* 🎨 Theme Section */}
      <h3>Theme: {theme}</h3>
      <button onClick={changeTheme}>เปลี่ยนธีม</button>

      {/* 📘 Grade Tracker Component */}
      <div style={{ marginTop: "40px" }}>
        <h2>🌟 ระบบรวม</h2>
        <GradeTracker />
      </div>
    </div>
  );
}

export default App;