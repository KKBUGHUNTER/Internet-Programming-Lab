import React, { useState } from 'react';

function Signup(){
  const [username, setUsername] = useState('');
  const [regno, setRegNo] = useState('');
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
    return(
        <div style={style.containerStyle}>
      <div style={style.boxStyle}>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button style={style.buttonStyle} onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Sign Up</h2>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={style.inputStyle}
            />

            <label>Register No:</label>
            <input
              type="number"
              value={regno}
              onChange={(e) => setRegNo(e.target.value)}
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
            <button type="submit" style={style.buttonStyle}>Login</button>
            <small>Already have an account <a href="http://localhost:3000/" alt="sign up">Log in</a></small>
          </form>
        )}
      </div>
    </div>
    );
}
export default Signup;