import { useState } from 'react';
function App() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState()
    function updateUser(event) {
        setUser(event.target.value);
    }
    function updatePass(event) {
        setPassword(event.target.value);
    }
    function callLogin() {
        const postData = {
            username: user,
            password: password
        };
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMessage(data.message);
            })
            .catch(error => console.error('Error:', error));
    }
    function callSignup() {
        const postData = {
            username: user,
            password: password
        };
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Signup successful:', data);
                setMessage(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const formStyle = {
        padding: '50px',
        backgroundColor: 'red',
    }
    const AppStyle = {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "5%",
    }
    return (
        <div style={AppStyle}>
            <table style={formStyle} >
                <tr>
                    <th><label>UserName </label></th>
                    <th> <input type="text" placeholder="username" value={user}
                        onChange={updateUser}></input> </th>
                </tr>
                <tr>
                    <th><label>Password </label></th>
                    <th><input type="password" placeholder="password" value={password}
                        onChange={updatePass}></input></th>
                </tr>
                <tr>
                    <td><button onClick={callLogin}>Login</button></td>
                    <td><button onClick={callSignup}>Register New User</button></td>
                </tr>
                
            <p style={{color:'white'}}>{message}</p>
            </table>
        </div>
    );
}
export default App;
