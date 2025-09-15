// src/components/CourseForm.tsx
import { useState } from "react";
import { useCourseStore } from "../store/courseStore";
import { v4 as uuidv4 } from "uuid";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [code, setCode] = useState("");
  const [nameTH, setNameTH] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [teacher, setTeacher] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("วิชาหลัก");
  const [grade, setGrade] = useState("A");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({
      id: uuidv4(),
      code,
      nameTH,
      nameEN,
      teacher,
      note,
      type,
      grade,
    });
    setCode(""); setNameTH(""); setNameEN(""); setTeacher("");
    setNote(""); setType("วิชาหลัก"); setGrade("A");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>📘 เพิ่มรายวิชา</h3>
      <input placeholder="รหัสวิชา" value={code} onChange={(e) => setCode(e.target.value)} />
      <input placeholder="ชื่อวิชา (TH)" value={nameTH} onChange={(e) => setNameTH(e.target.value)} />
      <input placeholder="ชื่อวิชา (EN)" value={nameEN} onChange={(e) => setNameEN(e.target.value)} />
      <input placeholder="อาจารย์ผู้สอน" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
      <input placeholder="หมายเหตุ" value={note} onChange={(e) => setNote(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="วิชาหลัก">วิชาหลัก</option>
        <option value="เลือกเสรี">เลือกเสรี</option>
        <option value="วิชาเฉพาะ">วิชาเฉพาะ</option>
      </select>
      <select value={grade} onChange={(e) => setGrade(e.target.value)} style={{ marginLeft: "10px" }}>
        {["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"].map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <button type="submit" style={{ marginLeft: "10px" }}>เพิ่ม</button>
    </form>
  );
}