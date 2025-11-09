import React from "react";

export default function JobCard({ job, onClick }) {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h2 className="text-fixrblue font-bold text-xl mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-2">{job.description}</p>
      <p className="text-gray-500 text-sm">{job.location}</p>
    </div>
  );
}

