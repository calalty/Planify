import { databases } from "../appwrite";

export const deleteTodo = async (id) => {
  await databases.deleteDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_TODO_ID,
    id
  );
};
