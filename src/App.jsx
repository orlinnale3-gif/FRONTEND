import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-baby">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-fixrblue mb-4"
        >
          FIXR is Live!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-lg mb-8 max-w-md"
        >
          Connecting you to trusted repair experts for all your home, tech, and auto needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="flex space-x-4"
        >
          <button className="bg-fixrblue text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-fixrblue transition-all duration-300">
            Get Started
          </button>
          <button className="bg-white text-fixrblue px-6 py-3 rounded-lg shadow-md hover:bg-fixrblue hover:text-white transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-baby">
        <Navbar user={user} setUser={setUser} />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
