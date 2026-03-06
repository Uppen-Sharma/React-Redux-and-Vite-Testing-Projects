import React, { useState } from "react";
import MovieCard from "./MovieCard.jsx";
import FilterBar from "./FilterBar.jsx";
import { useSelector } from "react-redux";

export default function MovieGrid({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  const watchlist = useSelector((state) => state.watchlist.watchlistIds);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const matchesGenre = (movie, genre) =>
    genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
  const matchesSearchTerm = (movie, searchTerm) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case `All Ratings`:
        return true;
      case `Good`:
        return movie.rating >= 8;
      case `Ok`:
        return movie.rating >= 5 && movie.rating < 8;
      case `Bad`:
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = (movies || []).filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <div className="relative my-8 mx-2 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <span className="text-purple-400 text-xl">🔍</span>
          </div>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-4 text-lg rounded-full border-2 border-gray-700 bg-gray-800/50 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 shadow-xl"
            placeholder="Search for your favorite movies..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <FilterBar
        genre={genre}
        rating={rating}
        onGenreChange={handleGenreChange}
        onRatingChange={handleRatingChange}
      />

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              isWatchlisted={watchlist.includes(movie.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🎬</div>
          <p className="text-2xl text-gray-400 mb-2">No movies found</p>
          <p className="text-gray-500">
            Try adjusting your filters or search term
          </p>
        </div>
      )}
    </div>
  );
}
