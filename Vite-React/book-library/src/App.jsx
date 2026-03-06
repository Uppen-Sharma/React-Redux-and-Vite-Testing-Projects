import { BooksProvider } from "./BooksContext";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/"></Navigate>}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route
            path="/secret"
            element={
              <PrivateRoute
                Component={<SecretBooks></SecretBooks>}
              ></PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
