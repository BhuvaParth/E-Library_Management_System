import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <Router>
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <Signup onSignup={handleLogin} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isAuthenticated ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-book"
            element={isAuthenticated ? <AddBook /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit-book/:id"
            element={isAuthenticated ? <EditBook /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
