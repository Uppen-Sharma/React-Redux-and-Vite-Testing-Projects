import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleWatchlist } from "../watchlistSlice.jsx";

export default function MovieCard({ movie, isWatchlisted }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleError = (e) => {
    e.target.src = "images/default.jpg";
    e.target.className =
      "w-full h-[320px] object-contain block p-8 bg-gray-900";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8)
      return "text-emerald-400 border-emerald-400 shadow-emerald-500/50";
    if (rating >= 5 && rating < 8)
      return "text-amber-400 border-amber-400 shadow-amber-500/50";
    return "text-rose-400 border-rose-400 shadow-rose-500/50";
  };

  const handleToggle = () => {
    dispatch(toggleWatchlist(movie.id));
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent z-10 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

      <div className="relative overflow-hidden">
        <img
          src={`images/${movie.image}`}
          alt={movie.title}
          onError={handleError}
          className="w-full h-[320px] object-cover block transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        <div
          className={`absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full border-2 backdrop-blur-md bg-gray-900/80 font-bold text-sm shadow-lg ${getRatingClass(
            movie.rating
          )} transform group-hover:scale-110 transition-transform duration-300`}
        >
          ⭐ {movie.rating}
        </div>

        {isWatchlisted && (
          <div className="absolute top-3 left-3 z-20 px-2 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg animate-pulse">
            WATCHLIST
          </div>
        )}
      </div>

      <div className="relative p-4 flex flex-col space-y-3 z-20">
        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex items-center justify-center">
          <span className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs font-medium text-purple-300 border border-purple-500/30">
            {movie.genre}
          </span>
        </div>

        <button
          onClick={handleToggle}
          className={`relative w-full py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-300 overflow-hidden group/btn ${
            isWatchlisted
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70"
              : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
          }`}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>

          <span className="relative flex items-center justify-center gap-1.5">
            {isWatchlisted ? (
              <>
                <span>✓</span>
                <span>WATCHLIST</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>ADD</span>
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
