import { create } from "zustand";
import { getTodosGroupedByColumn } from "../lib/getTodosGroupedByColumn";
import { updateTodo } from "../lib/updateTodos";

type BoardState = {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoState: (todo: Todo, columnId: string) => Promise<void>;
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
}));
