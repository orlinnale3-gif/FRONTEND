import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 mt-12 shadow-inner">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} FIXR. All rights reserved.
      </p>
    </footer>
  );
}
