// src/components/Login.js
import React from 'react';
import '../App.css'; // Import CSS file

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
