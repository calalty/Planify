export const calculateTodoOrder = (todos: Todo[], initialOrder: number) => {
  const finalOrder = initialOrder === 0 ? todos.length * 10000 : initialOrder;

  return Math.round(finalOrder);
};
