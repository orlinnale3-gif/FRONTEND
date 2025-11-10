// src/components/ServiceCard.js
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-fixrblue">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}
