import { ID, databases } from "../appwrite";

export const createTodo = async (todo: Partial<Todo>, columnId: string) => {
  await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_TODO_ID,
    ID.unique(),
    {
      title: todo.title,
      status: columnId,
      order: todo.order,
    }
  );
};
