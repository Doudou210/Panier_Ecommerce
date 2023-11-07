import React, { useState } from 'react';

function RegisterPage({ handleRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterFormSubmit = async (event) => {
    event.preventDefault();
    // handleRegister(username, password);
    try {
        const response = await fetch('http://localhost:3000/register', {
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
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegisterFormSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
