**Project Structure**

    .
    ├── controller
    │   └── HomeController.js
    ├── model
    │   └── MainModel.js
    ├── package.json
    ├── package-lock.json
    ├── public/
    ├── server.js
    └── src
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js


App.js
```js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUser = () => {
    console.log("Start addUser");
    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, age })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Data: ", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    console.log("End addUser");
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <div className="App">
      <label>Name: <input type="text" value={name} onChange={handleNameChange} /></label> <br />
      <label>Age: <input type="text" value={age} onChange={handleAgeChange} /></label><br />
      <button type="button" onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
```
server.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { AddUser } = require('./controller/HomeController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/addUser", AddUser);

app.listen(5000, () => {
    console.log("Server Listening on http://localhost:5000/");
});
```


HomeController.js
```js
const { insertUser } = require("../model/MainModel");

async function AddUser(request, response) {
    console.log("Start AddUser");
    const bodyData = request.body;
    console.log(bodyData);
    try {
        await insertUser(bodyData); // { name: 'karthikeyan', age: '20' }
        response.send("User Added Successfully...");
    } catch (error) {
        console.error("Error adding user:", error);
        response.status(500).send("Error adding user");
    }
    console.log("End AddUser");
}


module.exports = { AddUser };
```
MainModel.js
```js
const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
client.connect();
const db = client.db('test');
const collectionClient = db.collection('users');

async function insertUser(data) {
    try {
        await collectionClient.insertOne(data);
    } catch (error) {
        throw error;
    }
}

module.exports = {insertUser};
```



