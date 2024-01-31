export const calculateRelativeTodoOrder = (
  todos: Todo[],
  indexOfTodoMoved: number
) => {
  if (indexOfTodoMoved > 0 && indexOfTodoMoved < todos.length - 1) {
    return Math.round(
      (todos[indexOfTodoMoved - 1].order + todos[indexOfTodoMoved + 1].order) /
        2
    );
  } else if (indexOfTodoMoved === 0 && todos.length > 1) {
    return Math.round(todos[indexOfTodoMoved + 1].order / 2);
  } else if (indexOfTodoMoved === 0) {
    return indexOfTodoMoved;
  } else {
    return Math.round(todos[indexOfTodoMoved - 1].order * 2);
  }
};
