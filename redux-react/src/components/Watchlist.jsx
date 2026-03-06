import React from "react";
import MovieCard from "./MovieCard.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Watchlist({ movies }) {
  const watchlist = useSelector((state) => state.watchlist.watchlistIds);

  const watchlistedMovies = (movies || []).filter((movie) =>
    watchlist.includes(movie.id)
  );

  return (
    <div>
      <div className="text-center my-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 blur-3xl -z-10"></div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-3">
          Watchlisted Movies
        </h1>
        <p className="text-gray-400 text-lg">
          {watchlistedMovies.length > 0
            ? `${watchlistedMovies.length} ${
                watchlistedMovies.length === 1 ? "movie" : "movies"
              } saved`
            : "No movies added "}
        </p>
        <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
      </div>

      {watchlistedMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {watchlistedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isWatchlisted={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4">
          <div className="text-6xl mb-6 animate-bounce">📽️</div>
          <h2 className="text-3xl text-gray-300 mb-4 font-semibold">
            Watchlist is Empty.
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Start adding movies you want to watchlist!
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg transition duration-200 hover:from-purple-700 hover:to-blue-700 hover:scale-105 active:scale-95"
          >
            Browse movies to get started
          </Link>
        </div>
      )}
    </div>
  );
}
