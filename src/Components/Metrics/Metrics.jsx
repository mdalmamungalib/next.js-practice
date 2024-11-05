import React from "react";

const Metrics = ({ label, amount }) => {
  return (
    <div className="mt-10">
        <div className="flex flex-col p-2 border rounded-md border-l-yellow-50 w-[600px] ">
      <h2 className="my-2 text-xl font-semibold">{label}</h2>
      <p className="text-3xl">
        {new Intl.NumberFormat().format(amount)} USD
      </p>
    </div>
    </div>
  );
};

export default Metrics;
