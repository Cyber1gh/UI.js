// LoginScreen.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming React Router is used for navigation

const LoginScreen = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (name && email) {
      onLogin({ name, email });
      history.push('/home');
    } else {
      alert('Please enter name and email.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
