import { databases } from "../appwrite";

export const updateTodo = async (todo: Todo, columnId: string) => {
  await databases.updateDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_TODO_ID,
    todo.$id,
    {
      title: todo.title,
      status: columnId,
      order: todo.order,
    }
  );
};
