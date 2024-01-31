import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export const AddNewToDo = ({ setIsNewTodo, isNewTodo }) => (
  <div className="flex items-end justify-end">
    {isNewTodo ? (
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 rounded-md mt-3 p-3 text-white"
      >
        Add new card
      </button>
    ) : (
      <button
        onClick={() => setIsNewTodo(true)}
        className="text-green-500 hover:text-green-600 mt-3"
      >
        <PlusCircleIcon className="h-10 w-10" />
      </button>
    )}
  </div>
);
