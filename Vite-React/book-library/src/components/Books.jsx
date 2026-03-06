import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useLocation } from "react-router-dom";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const books = useContext(BooksContext);
  const search = query.get("search") || "";

  const filterBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filterBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
