type Board = {
  columns: Map<TypeColumn, Column>;
};

type TypedColumn = "todo" | "inprogress" | "done";

type Column = {
  id: TypedColumn;
  todos: Todo[];
};

type Todo = {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
  order?: number;
};

type Image = {
  bucketId: string;
  fileId: string;
};
