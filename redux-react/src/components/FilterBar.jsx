import React from "react";

export default function FilterBar({
  genre,
  rating,
  onGenreChange,
  onRatingChange,
}) {
  return (
    <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center space-x-3 border border-gray-700/50 shadow-lg">
          <span className="text-purple-400 font-semibold text-sm">
            🎬 Genre
          </span>
          <select
            className="px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 focus:outline-none cursor-pointer transition-all duration-200 hover:bg-gray-800"
            value={genre}
            onChange={onGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center space-x-3 border border-gray-700/50 shadow-lg">
          <span className="text-amber-400 font-semibold text-sm">
            ⭐ Rating
          </span>
          <select
            className="px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 focus:outline-none cursor-pointer transition-all duration-200 hover:bg-gray-800"
            value={rating}
            onChange={onRatingChange}
          >
            <option>All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
    </div>
  );
}
