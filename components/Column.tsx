import { Draggable, Droppable } from "@hello-pangea/dnd";

import { ToDoCard } from "./ToDoCard";

import { NewToDoForm } from "./NewToDoForm";
import { useBoardStore } from "../store/BoardStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

export const Column = ({ id, todos, index }: Props) => {
  const [searchString] = useBoardStore((state) => [state.searchString]);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2 mb-4">
                  {idToColumnText[id]}

                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {!searchString
                      ? todos.length
                      : todos.filter(({ title }) =>
                          title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>

                {todos.map((todo, index) => {
                  if (
                    searchString &&
                    !todo.title.toLowerCase().includes(searchString)
                  )
                    return null;

                  return (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(provided) => (
                        <ToDoCard
                          todo={todo}
                          innerRef={provided.innerRef}
                          dragHandleProps={provided.dragHandleProps}
                          draggableProps={provided.draggableProps}
                        />
                      )}
                    </Draggable>
                  );
                })}

                {provided.placeholder}

                <NewToDoForm id={id} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
