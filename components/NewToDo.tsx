"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent } from "react";

export const NewTodo = ({ onClose, setValue, value }) => {
  return (
    <div className="bg-white rounded-md drop-shadow-md flex justify-center items-center">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="text"
        value={value}
        className="w-full p-5"
        placeholder="Enter a title for this card"
        required
      ></input>

      <button className="p-5">
        <XMarkIcon onClick={onClose} className="h-6 w-6" />
      </button>
    </div>
  );
};
