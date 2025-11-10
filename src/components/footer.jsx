import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-auto py-6 text-center">
      <p className="text-gray-700">&copy; {new Date().getFullYear()} FIXR. All rights reserved.</p>
    </footer>
  );
}
