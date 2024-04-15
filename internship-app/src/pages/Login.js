import { useState } from 'react';
import './Login.css';


function Login() {
    
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setmessage] = useState("");

    function appLogin() {
        const data = {
            username:user,
            password: password
        };

      fetch('http://localhost:5000/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(data)
        },
      )
        .then(res => res.json())
        .then(d => setmessage(d.message))
        .catch(e => { setmessage("Some thing went woring"); console.log(e); }
      );
    }

  const userNameState = (event) => {
    setUser(event.target.value)
  }

  const passwordState = (event) => {
    setPassword(event.target.value)
  }
  const appSty={
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: "white",
      width: "460px",
      height: "425px",
      borderRadius: "15px",
  }
    return (
    <div style={appSty}>
      <div className='app-head'>
        <img src='https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg' height={"100px"}/>
      </div>
      <section className='app-body'>
        <input type="text" placeholder="Username" id="username" onChange={userNameState} /> 
        <br />
        <input type="password" placeholder='Password' id="password" onChange={passwordState}/>
      </section>
      <section className='app-footer'>
        <small>{ message }</small> <br/>
        <button onClick={appLogin}>Login</button>
            </section>
            <a href="/register" ><span>Sign in as a new user</span></a>
        </div>
    );
  
  
}

export default Login;