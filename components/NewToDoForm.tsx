import React, { FormEvent, useState } from "react";
import { AddNewToDo } from "./AddNewToDo";
import { NewTodo } from "./NewToDo";
import { useBoardStore } from "../store/BoardStore";

export const NewToDoForm = ({ id }) => {
  const [createTodoState] = useBoardStore((state) => [state.createTodoState]);

  const [isNewTodo, setIsNewTodo] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewTodo(false);
    void createTodoState({ title: value, order: 1 }, id);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {isNewTodo && (
        <NewTodo
          value={value}
          setValue={setValue}
          onClose={() => setIsNewTodo(false)}
        />
      )}

      <AddNewToDo setIsNewTodo={setIsNewTodo} isNewTodo={isNewTodo} />
    </form>
  );
};
