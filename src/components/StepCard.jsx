// src/components/StepCard.js
import React from "react";
import { motion } from "framer-motion";

export default function StepCard({ step, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-fixrblue text-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="text-3xl font-bold mb-2">{step}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
