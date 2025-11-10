import React from "react";
import { Link } from "react-router-dom";
import { Wrench } from "lucide-react"; // <-- added icon import

export default function Navbar({ user, setUser }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-fixrblue font-bold text-2xl">
          <Wrench className="w-6 h-6 text-fixrblue transform transition-transform duration-300 hover:rotate-45" />
          <span>FIXR</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <Link className="text-gray-700 hover:text-fixrblue font-semibold" to="/">
            Home
          </Link>

          {!user && (
            <Link className="text-gray-700 hover:text-fixrblue font-semibold" to="/login">
              Login
            </Link>
          )}

          {!user && (
            <Link className="text-gray-700 hover:text-fixrblue font-semibold" to="/register">
              Register
            </Link>
          )}

          {user && (
            <button
              onClick={() => setUser(null)}
              className="bg-fixrblue text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
