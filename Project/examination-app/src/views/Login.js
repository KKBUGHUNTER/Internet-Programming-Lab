// /src/views/Login.js
import React, { useState } from 'react';
import Cookies from 'js-cookie';

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

      fetch(SERVER_NAME+'/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ registerNumber:regno, password:password })
      })
      .then(res => res.json())
      .then(data=>{
        // setMessage(data.message)
        if(data.username != undefined){
          Cookies.set('token', data.token, { expires: 1 }); // Expires in 1 day
          window.location.href = '/dashboard';
        }
        else{
          setMessage("Incorrect Username or Password.");
        }
      })
      .catch(error => setMessage(error));

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
            <button type="submit" style={style.buttonStyle}><big><b>Login</b></big></button>
            <small>Don't have an account? <a href="http://localhost:3000/signup" alt="sign up"><b>Sign up</b></a></small>
          </form>
      </div>
    </div>
  );
}

export default Login;