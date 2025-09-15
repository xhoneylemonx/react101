// store/courseStore.ts
import { create } from "zustand";

export type Course = {
  id: string;
  code: string;
  nameTH: string;
  nameEN: string;
  teacher: string;
  note?: string;
  type: string; // เช่น "วิชาหลัก", "เลือกเสรี"
  grade: string; // A, B+, F, W...
};

type CourseStore = {
  courses: Course[];
  selectedType: string;
  addCourse: (course: Course) => void;
  setType: (type: string) => void;
  getFilteredCourses: () => Course[];
  calculateGPA: () => number;
};

const gradePoints: Record<string, number> = {
  A: 4.0, "B+": 3.5, B: 3.0, "C+": 2.5, C: 2.0,
  "D+": 1.5, D: 1.0, F: 0.0, W: 0.0,
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  selectedType: "ทั้งหมด",
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  setType: (type) => set({ selectedType: type }),
  getFilteredCourses: () => {
    const { courses, selectedType } = get();
    return selectedType === "ทั้งหมด"
      ? courses
      : courses.filter((c) => c.type === selectedType);
  },
  calculateGPA: () => {
    const valid = get().courses.filter((c) => c.grade !== "W");
    const total = valid.reduce((sum, c) => sum + (gradePoints[c.grade] ?? 0), 0);
    return valid.length > 0 ? total / valid.length : 0;
  },
}));