import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
    author: "",
    genre: "",
    isbn: "",
    bookType: "",
    publicationDate: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.imageUrl) formErrors.imageUrl = "Image URL is required";
    if (!formData.title) formErrors.title = "Title is required";
    if (!formData.description)
      formErrors.description = "Description is required";
    if (!formData.author) formErrors.author = "Author name is required";
    if (!formData.genre) formErrors.genre = "Genre is required";
    if (!formData.isbn) formErrors.isbn = "ISBN is required";
    if (!formData.bookType) formErrors.bookType = "Book type is required";
    if (!formData.publicationDate)
      formErrors.publicationDate = "Publication date is required";
    if (!formData.subject) formErrors.subject = "Subject is required"; 
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newBook = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9), 
      status: "borrow", 
    };

    try {
      await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      navigate("/home");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg mt-10 rounded-lg mb-16">
        <h1 className="text-2xl font-bold mb-6">Add Book</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm">{errors.imageUrl}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Book title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter book description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Author name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              placeholder="Book genre"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="isbn"
              className="block text-sm font-medium text-gray-700"
            >
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleInputChange}
              placeholder="ISBN"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.isbn && (
              <p className="text-red-500 text-sm">{errors.isbn}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="bookType"
              className="block text-sm font-medium text-gray-700"
            >
              Book Type
            </label>
            <select
              id="bookType"
              name="bookType"
              value={formData.bookType}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Book type</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="knowledgeable">Knowledgeable</option>
            </select>
            {errors.bookType && (
              <p className="text-red-500 text-sm">{errors.bookType}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="publicationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              value={formData.publicationDate}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.publicationDate && (
              <p className="text-red-500 text-sm">{errors.publicationDate}</p>
            )}
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
