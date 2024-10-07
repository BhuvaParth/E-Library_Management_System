import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return <p>No book data available.</p>;
  }

  const handleEdit = () => {
    navigate(`/edit-book/${book.id}`, { state: book });
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/books/${book.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Book deleted successfully.");
          navigate("/");
        } else {
          alert("Failed to delete the book. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting the book:", error);
        alert("An error occurred while deleting the book.");
      }
    }
  };

  return (
    <>
      <div className="w-full bg-white p-6">
        <div className="mb-4 flex justify-end gap-3">
          <button
            className="bg-blue-700 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-rose-600 text-white font-medium py-[6px] px-4 rounded-md shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img
              src={book.imageUrl || "https://via.placeholder.com/1200x500"}
              alt={book.title || "Sample Image"}
              className="max-h-[500px] object-cover rounded-lg mb-4"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mb-4">
            <h2 className="text-3xl font-bold mb-4">
              {book.title || "Page Title"}
            </h2>
            <div className="flex flex-col gap-5">
              <p className="mt-4">{book.description}</p>
              <p className="text-gray-600 mb-1">Author: {book.author}</p>
              <p className="text-gray-600 mb-1">Genre: {book.genre}</p>
              <p className="text-gray-600 mb-1">ISBN: {book.isbn}</p>
              <p className="text-gray-600 mb-1">
                Publication Date: {book.publicationDate}
              </p>
              <p className="font-semibold">Subject: {book.subject}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
