"use client";

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "@hello-pangea/dnd";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useBoardStore } from "../store/BoardStore";

type Props = {
  todo: Todo;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

export const ToDoCard = ({
  dragHandleProps,
  draggableProps,
  innerRef,
  todo,
}: Props) => {
  const [deleteTodoState] = useBoardStore((state) => [state.deleteTodoState]);

  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md mt-4"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button
          onClick={() => deleteTodoState(todo.$id)}
          className="text-red-500 hover:text-red-600"
        >
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>

      {/* {imageUrl && (
              
          )} */}
    </div>
  );
};
