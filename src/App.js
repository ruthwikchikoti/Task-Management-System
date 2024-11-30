import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./App.css";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Home onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
