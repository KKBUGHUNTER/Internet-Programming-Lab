import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const style = {
    containerStyle:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    boxStyle : {
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    },
    inputStyle : {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      boxSizing: 'border-box'
    },
    buttonStyle : {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      width: '100%',
      marginTop: '10px'
    }
  };


  const handleLogin = (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={style.containerStyle}>
      <div style={style.boxStyle}>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button style={style.buttonStyle} onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>Register Number:</label>
            <input
              type="number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            <button type="submit" style={style.buttonStyle}>Sign Up</button>
            <small>Don't have an account? <a href="http://localhost:3000/signup" alt="sign up">Sign up</a></small>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;