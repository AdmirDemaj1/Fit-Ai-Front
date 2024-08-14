// File: src/components/Login.js
import React, { useState } from 'react';
import { login } from '../services/api';
import styles from './Login.module.css'; // Import the CSS module

const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password }, navigate);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Welcome Back!</h2>
          <p>Log in to continue your fitness journey</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            className={styles.inputField}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
