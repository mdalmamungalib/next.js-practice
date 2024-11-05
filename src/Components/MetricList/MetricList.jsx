import React from "react";

const MetricList = ({ data }) => {
  return (
    <ul className="flex flex-col m-3">
      {data.map((metric) => (
        <li key={metric.id} className="flex items-center gap-3">
          <div className="text-sm text-gray-600">{metric.name}</div>
          <div className="text-lg text-gray-800">
            {new Intl.NumberFormat().format(metric?.value)} USD
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MetricList;
