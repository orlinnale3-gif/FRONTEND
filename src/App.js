import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Wrench className="w-10 h-10 text-blue-500 mr-2" />
          <h1 className="text-4xl font-bold text-gray-800">FIXR</h1>
        </div>

        <p className="text-gray-600 text-lg mb-6">
          Reliable home and business maintenance services — done right.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
