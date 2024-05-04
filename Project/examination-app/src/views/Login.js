import React, { useState } from 'react';
const SERVER_NAME = "http://localhost:7020";
function Login() {

  const [regno, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const style = {
    containerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    boxStyle: {
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    },
    inputStyle: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      boxSizing: 'border-box'
    },
    buttonStyle: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      width: '100%',
      marginTop: '10px'
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SERVER_NAME+'/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ registerNumber:regno, password:password })
      });

      if (response.ok) {
        // Redirect to the dashboard or perform any other action
        setMessage('Login successful');
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred, please try again later');
    }
  };



  return (
    <div style={style.containerStyle}>
      <div style={style.boxStyle}>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>Register Number:</label>
            <input
              type="number"
              value={regno}
              onChange={(e) => setRegNo(e.target.value)}
              required
              pattern="[0-9]*"
              style={style.inputStyle}
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={style.inputStyle}
            />
            <p style={{color:"red"}}>{message}</p>
            <button type="submit" style={style.buttonStyle}>Login</button>
            <small>Don't have an account? <a href="http://localhost:3000/signup" alt="sign up">Sign up</a></small>
          </form>
      </div>
    </div>
  );
}

export default Login;