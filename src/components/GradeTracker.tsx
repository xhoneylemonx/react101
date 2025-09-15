// src/components/GradeTracker.tsx
import { useState } from "react";

type Subject = {
  name: string;
  grade: string;
};

const gradePoints: Record<string, number> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
  W: 0.0, // ไม่คิดเกรด
};

function GradeTracker() {
  const [subjectName, setSubjectName] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const addSubject = () => {
    if (!subjectName || !grade) return;
    setSubjects([...subjects, { name: subjectName, grade }]);
    setSubjectName("");
    setGrade("");
  };

  const calculateGPA = () => {
    const validSubjects = subjects.filter((s) => s.grade !== "W");
    const totalPoints = validSubjects.reduce((sum, s) => {
      return sum + (gradePoints[s.grade] ?? 0);
    }, 0);
    const gpa = validSubjects.length > 0 ? totalPoints / validSubjects.length : 0;
    return gpa.toFixed(2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📘 ระบบบันทึกเกรด</h2>

      <input
        type="text"
        placeholder="ชื่อวิชา"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <select value={grade} onChange={(e) => setGrade(e.target.value)} style={{ marginLeft: "10px" }}>
        <option value="">เลือกเกรด</option>
        {Object.keys(gradePoints).map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <button onClick={addSubject} style={{ marginLeft: "10px" }}>เพิ่ม</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {subjects.map((s, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {s.name} - เกรด:{" "}
            <span style={{ color: s.grade === "F" ? "red" : "black" }}>
              {s.grade}
            </span>
          </li>
        ))}
      </ul>

      <h3>🎓 GPA: {calculateGPA()}</h3>
    </div>
  );
}

export default GradeTracker;