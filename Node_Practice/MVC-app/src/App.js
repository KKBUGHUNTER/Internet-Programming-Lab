import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  const sendPOSTmethod = () => {
    var userName = document.getElementById('username').value;
    var Password = document.getElementById('password').value;
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: Password }), 
    })
      .then(res => res.json())
      .then(data => { setMessage(data.message);  console.log(data.message)})
    .catch(error => console.error('Error:', error));
  };

  const sendRegisterMethod = () => {
    var userName = document.getElementById('username').value;
    var Password = document.getElementById('password').value;
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: Password }), 
    })
      .then(res => res.json())
      .then(data => { setMessage(data.message);  console.log(data.message)})
    .catch(error => console.error('Error:', error));
};


  return (
    <div className="App" style={{padding:"100px"}}>
      <label > Username <input type="text" id='username' /></label>
      <br/>
      <label> Password <input type="text" id='password'/></label>
      <br/>
      <button onClick={sendPOSTmethod}>Login</button>
      <button onClick={sendRegisterMethod}>register</button>
      <p>{typeof message === 'object' ? JSON.stringify(message) : message}</p> {/* Render message as string */}
    </div>
  );
}

export default App;
