import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [ctaClicked, setCtaClicked] = useState(false);

  const handleGetStarted = () => {
    setCtaClicked(true);
    console.log("Get Started clicked!");
    // You can later integrate routing or modal here
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked!");
    // You can later integrate routing or modal here
  };

  return (
    <section className="bg-baby min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-fixrblue mb-4 drop-shadow-lg"
      >
        FIXR is Live!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl"
      >
        Connecting you to trusted repair experts for all your home, tech, and auto needs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={handleGetStarted}
          className="bg-fixrblue text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-fixrblue transition-all duration-300"
        >
          Get Started
        </button>
        <button
          onClick={handleLearnMore}
          className="bg-white text-fixrblue font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-fixrblue hover:text-white transition-all duration-300"
        >
          Learn More
        </button>
      </motion.div>

      {/* Optional CTA feedback */}
      {ctaClicked && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-fixrblue font-medium"
        >
          Thank you for getting started!
        </motion.p>
      )}
    </section>
  );
}