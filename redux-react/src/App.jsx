import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieGrid from "./components/MoviesGrid.jsx";
import Watchlist from "./components/Watchlist.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="my-12">
      <ul className="flex justify-center items-center gap-4 list-none p-0">
        <li>
          <Link
            to="/"
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              location.pathname === "/"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg"
            }`}
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/watchlist"
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              location.pathname === "/watchlist"
                ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg"
            }`}
          >
            <span>Watchlist</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex-grow">
          <Header />
          <Navigation />

          <Routes>
            <Route path="/" element={<MovieGrid movies={movies} />} />
            <Route path="/watchlist" element={<Watchlist movies={movies} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
