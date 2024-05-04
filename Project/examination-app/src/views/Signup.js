import React, { useState } from 'react';
const SERVER_NAME = "http://localhost:7020";

function Signup(){
  const [username, setUsername] = useState('');
  const [regno, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SERVER_NAME+'/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, registerNumber: regno, password:password })
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = '/';
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred, please try again later');
    }
};


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

  

    return(
        <div style={style.containerStyle}>
      <div style={style.boxStyle}>
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>

            <label>Username:</label>
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
            <button type="submit" style={style.buttonStyle}><big><b>Sign Up</b></big></button>
            <small>Already have an account <a href="http://localhost:3000/" alt="login"><b>Log in</b></a></small>
          </form>
      
      </div>
    </div>
    );
}
export default Signup;