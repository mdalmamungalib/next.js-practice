import MetricList from "@/Components/MetricList/MetricList";
import Link from "next/link";
import React from "react";

const PrimeCustomerPage = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      value: 1000,
      tier: "Gold",
      loyaltyPoints: 12000,
      membershipStartDate: "2021-05-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      value: 2500,
      tier: "Platinum",
      loyaltyPoints: 18000,
      membershipStartDate: "2020-03-22",
    },
    {
      id: 3,
      name: "Alice Johnson",
      value: 2000,
      tier: "Gold",
      loyaltyPoints: 14000,
      membershipStartDate: "2019-11-01",
    },
    {
      id: 4,
      name: "Michael Brown",
      value: 1500,
      tier: "Silver",
      loyaltyPoints: 9000,
      membershipStartDate: "2022-07-19",
    },
    {
      id: 5,
      name: "Emily Davis",
      value: 3000,
      tier: "Platinum",
      loyaltyPoints: 22000,
      membershipStartDate: "2018-12-05",
    },
    {
      id: 6,
      name: "David Wilson",
      value: 1800,
      tier: "Gold",
      loyaltyPoints: 15000,
      membershipStartDate: "2021-06-10",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      value: 2700,
      tier: "Platinum",
      loyaltyPoints: 20000,
      membershipStartDate: "2020-01-30",
    },
  ];

  return (
    <div className="flex flex-col p-2 m-3 border border-gray-300">
      <h2 className="my-2 text-xl font-semibold">All Customers</h2>
      <Link className="underline" href={"/dashboard/prime"}>
        Prime Customer
      </Link>
      <MetricList data={customers} />
    </div>
  );
};

export default PrimeCustomerPage;
