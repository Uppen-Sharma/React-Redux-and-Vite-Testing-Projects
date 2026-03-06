import React from "react";

export default function Header() {
  return (
    <header className="mt-8 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl -z-10 animate-pulse"></div>

      <div className="relative">
        <h2 className="mt-8 mb-6 text-1xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          PiXar Movies
        </h2>

        <h2 className="mt-8 mb-6 text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Let's Grab Feelings
        </h2>
      </div>
    </header>
  );
}
