// src/store/todoStore.ts
import { create } from "zustand";

type TodoStore = {
  todos: string[];
  addTodo: (task: string) => void;
  deleteTodo: (index: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (task) =>
    set((state) => ({ todos: [...state.todos, task] })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
}));