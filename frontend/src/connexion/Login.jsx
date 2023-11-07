import React, { useState } from 'react';

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = async(event) => {
    event.preventDefault();
    // handleLogin(username, password);
    try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginFormSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
