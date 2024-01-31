import React, { FormEvent, useState } from "react";
import { NewTodoCard } from "./NewToDoCard";
import { useBoardStore } from "../store/BoardStore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  id: string;
  todos: Todo[];
};

export const NewToDoForm = ({ id, todos }: Props) => {
  const [createTodoState] = useBoardStore((state) => [state.createTodoState]);

  const [isNewTodo, setIsNewTodo] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const order =
    todos && todos.length > 0
      ? Math.round(todos[todos.length - 1].order * 2)
      : 0;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void createTodoState({ title: value, order }, id);
    setIsNewTodo(false);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        {isNewTodo && (
          <NewTodoCard
            value={value}
            setValue={setValue}
            setIsNewTodo={setIsNewTodo}
          />
        )}

        {isNewTodo && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded-md mt-4 mb-2 p-3 text-white flex w-full items-center gap-4 justify-center"
          >
            Add new card
            <PlusCircleIcon className="h-10 w-10" />
          </button>
        )}
      </form>

      {!isNewTodo && (
        <button
          type="submit"
          onClick={() => setIsNewTodo(true)}
          className="bg-gray-100 hover:bg-gray-200 rounded-md mt-4 mb-2 p-3 text-gray-500 flex w-full items-center gap-4 justify-center"
        >
          Add new card
          <PlusCircleIcon className="h-10 w-10" />
        </button>
      )}
    </>
  );
};
