import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-gradient-to-t from-gray-950 to-gray-900 border-t border-gray-800 py-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            PiXar Movies
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} PiXar Movies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
