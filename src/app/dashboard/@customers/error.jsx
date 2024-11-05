"use client"

import { useState } from "react";

const Error = ({ error, reset }) => {
  useState(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col p-2 m-3 border border-gray-300 rounded-md">
      <h2 className="my-2 text-2xl">Something went wrong</h2>
      <h3 className="text-xl">Reason: {error?.message}</h3>
      <button
        className="p-1 m-auto text-white bg-black rounded-md"
        onClick={() => {
          reset();
        }}
      >Try Again</button>
    </div>
  );
};

export default Error;
