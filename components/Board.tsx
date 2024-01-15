"use client";

import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { useBoardStore } from "../store/BoardStore";
import Column from "./Column";

function Board() {
  const [getBoard, board, setBoardState] = useBoardStore((state) => [
    state.getBoard,
    state.board,
    state.setBoardState,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  // This function is triggered when a drag operation is completed
  const handleOnDragEnd = (results: DropResult) => {
    // Extract relevant information from the drag result
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

    // Extract the columns from the board
    const columns = Array.from(board.columns);

    // Identify the source and destination columns of the dragged item
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];

    console.log(startColIndex[0], startColIndex[1]);
    // Create objects representing the source and destination columns
    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const finishCol: Column = {
      id: finishColIndex[0],
      todos: finishColIndex[1].todos,
    };

    // If either the source or destination columns are missing, exit the function
    if (!startCol || !finishCol) return;

    // If the item is dropped in the same place, do nothing
    if (source.index === destination.index && startCol === finishCol) return;

    // Extract the todos array from the source column
    const newTodos = startCol.todos;

    // Remove the dragged item from the source column
    const [toDoMoved] = newTodos.splice(source.index, 1);

    // If the item is dropped within the same column
    if (startCol.id === finishCol.id) {
      // Insert the dragged item at the new position
      newTodos.splice(destination.index, 0, toDoMoved);
      const newCol: Column = {
        id: startCol.id,
        todos: newTodos,
      };

      // Update the columns map with the modified column
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      // Update the board state with the modified columns
      setBoardState({ ...board, columns: newColumns });
    } else {
      // If the item is dropped into a different column
      const finishTodos = Array.from(finishCol.todos);
      // Insert the dragged item at the new position in the destination column
      finishTodos.splice(destination.index, 0, toDoMoved);

      // Update the columns map with the modified source and destination columns
      const newColumns = new Map(board.columns);
      const newCol: Column = {
        id: startCol.id,
        todos: newTodos,
      };

      newColumns.set(startCol.id, newCol);
      newColumns.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });

      // Update the board state with the modified columns
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
