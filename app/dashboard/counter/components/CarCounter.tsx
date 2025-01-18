"use client";

import React from "react";
import { useCarCounter } from "./useCarCounter";

export const CarCounter = () => {
  const { value, incremenetB, decrementB } = useCarCounter();
  return (
    <>
      <span className="text-9xl">{value}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={incremenetB}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={decrementB}
        >
          -1
        </button>
      </div>
    </>
  );
};