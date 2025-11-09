import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-4 text-sm text-fixrblue shadow-inner mt-auto">
      © {new Date().getFullYear()} FIXR. All rights reserved.
    </footer>
  );
}
