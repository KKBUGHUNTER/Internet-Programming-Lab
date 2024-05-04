import './App.css';
import {useRef} from 'react';

function App() {
  const username = useRef();
  const password = useRef();

  const handleLogin = () => {
    fetch("http://localhost:5000/login", {
      method:"GET",
      headder:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({username:username.current.value, password:password.current.value})
    })
    .then(response => {response.json()})
    .then(data=> {console.log(data.message)})
    .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleLogin}>
          <label>UserName
            <input 
              type="text"
              require
              ref={username}
            />
          </label>
          <br />
          <label>Password
            <input
              type="password"
              require
              ref={password}
            />
          </label>
          <br />
          <button type="submit"> Submit </button>
        </form>
      </header>
    </div>
  );
}

export default App;
