import MetricList from "@/Components/MetricList/MetricList";
import Link from "next/link";
import React from "react";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      value: 100,
    },
    {
      id: 2,
      name: "Jane Smith",
      value: 200,
    },
    {
      id: 3,
      name: "Alice Johnson",
      value: 150,
    },
    {
      id: 4,
      name: "Michael Brown",
      value: 180,
    },
    {
      id: 5,
      name: "Emily Davis",
      value: 250,
    },
    {
      id: 6,
      name: "David Wilson",
      value: 300,
    },
    {
      id: 7,
      name: "Sophia Martinez",
      value: 220,
    },
  ];

  return <div className="flex flex-col p-2 m-3 border border-gray-300">
    <h2 className="my-2 text-xl font-semibold">All Customers</h2>
    <Link className="underline" href={"/dashboard/prime"}>Prime Customer</Link>
    <MetricList data={customers}/>
  </div>;
};

export default Customers;
