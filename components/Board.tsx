"use client";

import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { useBoardStore } from "../store/BoardStore";
import Column from "./Column";
import { calculateRelativeTodoOrder } from "../utils/calculate-relative-todo-order";
import { calculateTodoOrder } from "../utils/calculate-todo-order";

function Board() {
  const [getBoard, board, setBoardState, updateTodoState] = useBoardStore(
    (state) => [
      state.getBoard,
      state.board,
      state.setBoardState,
      state.updateTodoState,
    ]
  );

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (results: DropResult) => {
    const { destination, source, type } = results;

    // If there's no valid destination, exit the function
    if (!destination) return;

    // If the dragged item is a column, rearrange the columns
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({ ...board, columns: rearrangedColumns });
    }

    const columns = Array.from(board.columns);

    // Identify the source and destination columns of the dragged item
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];

    // Create objects representing the source and destination columns
    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const finishCol: Column = {
      id: finishColIndex[0],
      todos: finishColIndex[1].todos,
    };

    const finishTodos = Array.from(finishCol.todos);

    // If either the source or destination columns are missing, exit the function
    if (!startCol || !finishCol) return;

    // If the item is dropped in the same place, do nothing
    if (source.index === destination.index && startCol === finishCol) return;

    const newTodos = startCol.todos;

    const [toDoMoved] = newTodos.splice(source.index, 1);

    const newCol: Column = {
      id: startCol.id,
      todos: newTodos,
    };

    const newColumns = new Map(board.columns);

    if (startCol.id === finishCol.id) {
      newTodos.splice(destination.index, 0, toDoMoved);

      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns });

      const indexOfTodoMoved = newTodos.indexOf(toDoMoved);

      const finalOrder = calculateTodoOrder(
        newTodos,
        calculateRelativeTodoOrder(newTodos, indexOfTodoMoved)
      );

      updateTodoState({ ...toDoMoved, order: finalOrder }, startCol.id);
    } else {
      finishTodos.splice(destination.index, 0, toDoMoved);

      newColumns.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });

      const indexOfTodoMoved = finishTodos.indexOf(toDoMoved);

      const finalOrder = calculateTodoOrder(
        finishTodos,
        calculateRelativeTodoOrder(finishTodos, indexOfTodoMoved)
      );

      updateTodoState({ ...toDoMoved, order: finalOrder }, finishCol.id);

      setBoardState({ ...board, columns: newColumns });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
