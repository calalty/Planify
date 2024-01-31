"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  setIsNewTodo: (value: SetStateAction<boolean>) => void;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
};

export const NewTodoCard = ({ setIsNewTodo, setValue, value }: Props) => {
  return (
    <div className="bg-white rounded-md drop-shadow-md flex justify-center items-center mt-4">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="text"
        value={value}
        className="w-full p-5 rounded-md"
        placeholder="Enter a title for this card"
        required
      ></input>

      <button className="p-5">
        <XMarkIcon onClick={() => setIsNewTodo(false)} className="h-6 w-6" />
      </button>
    </div>
  );
};
