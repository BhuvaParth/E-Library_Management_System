import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        const updatedBooks = data.map((book) => ({
          ...book,
          isBorrowed: false,
        }));
        setBooks(updatedBooks);
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  const handleCardClick = (book) => {
    navigate("/about", { state: { book } });
  };

  const handleBorrowReturn = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isBorrowed: !book.isBorrowed } : book
      )
    );
  };

  const filteredBooks = books.filter((book) => {
    const title = book.title?.toLowerCase() || "";
    const author = book.author?.toLowerCase() || "";
    const subject = book.subject?.toLowerCase() || "";
    const ISBN = book.ISBN || "";

    return (
      title.includes(searchQuery.toLowerCase()) ||
      author.includes(searchQuery.toLowerCase()) ||
      subject.includes(searchQuery.toLowerCase()) ||
      ISBN.includes(searchQuery)
    );
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 cursor-pointer mb-10">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search by title, author or subject..."
            className="border-2 border-gray-800 my-12 rounded-md p-2 w-full max-w-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                onClick={() => handleCardClick(book)}
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
                  <p className="font-semibold">ISBN: {book.isbn}</p>
                </div>
                <div className="p-4">
                  <button
                    className={`w-full ${
                      book.isBorrowed ? "bg-red-500" : "bg-blue-500"
                    } text-white font-semibold py-2 rounded-md hover:bg-opacity-75`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBorrowReturn(book.id);
                    }}
                  >
                    {book.isBorrowed ? "Return" : "Borrow"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No books available</p>
          )}
        </div>
      </div>
    </>
  );
}
