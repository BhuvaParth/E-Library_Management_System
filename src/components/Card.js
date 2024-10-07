import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cardData") 
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search by title, location, date, or type..."
            className="border-2 border-gray-800 my-12 rounded-md p-2 w-full max-w-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-1">Author: {book.author}</p>
                <p className="text-gray-600 mb-1">Genre: {book.genre}</p>
                <p className="text-gray-600 mb-1">
                  Publication Date: {book.publicationDate}
                </p>
                <p className="font-semibold">Subject: {book.subject}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
