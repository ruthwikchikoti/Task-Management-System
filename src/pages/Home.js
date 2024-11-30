import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const Home = ({ onLogin }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <h1>Welcome to the Task Management System</h1>
      <div className="container">
        {!showRegister ? (
          <>
            <Login onLogin={onLogin} />
            <div className="register-prompt">
              <p>Don't have an account?</p>
              <button 
                onClick={() => setShowRegister(true)}
                className="toggle-register"
              >
                Register Now
              </button>
            </div>
          </>
        ) : (
          <>
            <Register />
            <div className="register-prompt">
              <p>Already have an account?</p>
              <button 
                onClick={() => setShowRegister(false)}
                className="toggle-register"
              >
                Back to Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
