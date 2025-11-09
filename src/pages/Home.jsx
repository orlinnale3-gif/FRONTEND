import React, { useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard";
import Modal from "../components/Modal";

const jobsData = [
  { id: 1, title: "Plumber Needed", description: "Fix leaking pipe in kitchen.", location: "Cape Town" },
  { id: 2, title: "Electrician Required", description: "Repair faulty lights.", location: "Blouberg" },
  { id: 3, title: "Car Mechanic", description: "Engine service and repair.", location: "Milnerton" },
];

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="pt-20 px-4">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-fixrblue mb-4">FIXR is Live!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Connecting you to trusted repair experts for all your home, tech, and auto needs.
        </p>
      </motion.div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
        ))}
      </div>

      {/* Modal */}
      {selectedJob && <Modal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
}
