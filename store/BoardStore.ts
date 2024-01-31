import { create } from "zustand";
import { getTodosGroupedByColumn } from "../lib/getTodosGroupedByColumn";
import { updateTodo } from "../lib/updateTodos";
import { createTodo } from "../lib/createTodo";
import { deleteTodo } from "../lib/deleteTodo";

type BoardState = {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoState: (todo: Todo, columnId: string) => Promise<void>;
  createTodoState: (todo: Partial<Todo>, columnId: string) => Promise<void>;
  deleteTodoState: (id: string) => Promise<void>;
};

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  updateTodoState: async (todo, columnId) => await updateTodo(todo, columnId),
  createTodoState: async (todo, columnId) => await createTodo(todo, columnId),
  deleteTodoState: async (id) => await deleteTodo(id),
}));
