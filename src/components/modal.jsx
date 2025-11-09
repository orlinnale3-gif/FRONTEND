import React from "react";

export default function Modal({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-fixrblue font-bold text-2xl mb-4">{job.title}</h2>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <p className="text-gray-500 mb-4">{job.location}</p>
        <button
          onClick={onClose}
          className="bg-fixrblue text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
