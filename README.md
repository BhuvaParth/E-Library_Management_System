# E-Library Management System

## Description

The **E-Library Management System** is a fully responsive web application built using React and Tailwind CSS. This system allows users to manage a library of books, including adding, editing, viewing, and deleting books. Users can also search for books by title, author, and subject, and can borrow or return books. The project includes user authentication, allowing users to sign up, log in, and log out securely.

## Features

- **Responsive Design**: Built with Tailwind CSS for a responsive and modern user interface.
- **Book Management**:
  - Add new books with details such as title, author, subject, and ISBN.
  - Edit book details.
  - View book information.
  - Delete books from the library.
- **Search Functionality**:
  - Search for books by title, author, or subject.
- **Borrow/Return**: 
  - Borrow a book and mark it as borrowed.
  - Return a borrowed book and mark it as available.
- **User Authentication**:
  - Sign up for a new account.
  - Log in to an existing account.
  - Log out securely.
  
## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: JSON server (for book data and user authentication)
- **Authentication**: JSON server-based authentication

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node (v12 or above)
- npm (Node package manager)

### Installation

#### Please Check must be your localhost:3001 for frontend

```bash
     npm install
    npm run start
 ```

 ## Start Json Server

### Please Check must be your localhost:3000 for json server

```bash
  npx json-server --watch db.json --port 3000
```