import React, { useState } from 'react';
import styles from './Register.module.css';

import { register } from '../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ username, password });
  };

  return (
    <div className={styles.registerPage}>
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        <p>Join us and start your fitness journey today!</p>
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
        <button type="submit" className={styles.registerButton}>Register</button>
      </form>
    </div>
  </div>
  )
};

export default Register;
