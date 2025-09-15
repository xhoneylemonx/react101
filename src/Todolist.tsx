import { useState } from "react";



type Task = {

    title: string;
    type: string;
    dueDate: string;

}; function TodoApp() {

    const [title, setTitle] = useState<string>("");       // งานที่ต้องทำ 
    const [type, setType] = useState<string>("");         // ประเภทงาน 
    const [dueDate, setDueDate] = useState<string>("");   // วันที่ต้องส่ง 
    const [tasks, setTasks] = useState<Task[]>([]);       // รายการงานทั้งหมด 



    const addTask = () => {

        if (title.trim() === "") return;   // กัน input ว่าง 
        const newTask: Task = { title, type, dueDate };
        setTasks([...tasks, newTask]);     // เพิ่ม task ลงใน array 
        setTitle("");                      // เคลียร์ค่า input 
        setType("");
        setDueDate("");

    };



    return (

        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>My To-do List</h1>

            {/* ช่องกรอกงาน */}

            <input

                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="พิมพ์งานที่ต้องทำ..."
                style={{ marginRight: "5px" }}

            />

            {/* ช่องเลือกประเภทงาน */}

            <select

                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{ marginRight: "5px" }}

            >
                <option value="">เลือกประเภทงาน</option>
                <option value="เรียน">เรียน</option>
                <option value="ทำงาน">ทำงาน</option>
                <option value="บ้าน">งานบ้าน</option>
                <option value="อื่นๆ">อื่นๆ</option>

            </select>

            {/* ช่องเลือกวันที่ */}

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{ marginRight: "5px" }}
            />



            <button onClick={addTask}>Add</button>



            {/* แสดงรายการงาน */}

            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {tasks.map((t, index) => (
                    <li key={index} style={{ margin: "10px 0" }}>
                        <strong>{t.title}</strong>
                        {t.type && <> | ประเภท: {t.type}</>}
                        {t.dueDate && <> | ส่งภายใน: {t.dueDate}</>}
            
                    </li>

                ))}

            </ul>

        </div>

    );

}



export default TodoApp; 