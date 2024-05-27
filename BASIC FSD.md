**Project Structure**

    .
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
import { useRef, useState } from 'react';
import './App.css';

const SERVER = "http://localhost:5000";


function App() {
  const [forData, setForData] = useState([]);

  const input1 = useRef('');
  const input2 = useRef('');
  const input3 = useRef('');
  const input4 = useRef('');

  function InsertData(){
    const reg = input1.current.value;
    const name = input2.current.value;
    const age = input3.current.value;
    const city = input4.current.value;

    console.log(reg, name, age, city);
    fetch(SERVER+"/insert", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({reg, name, age, city})
    })
    .then(res => res.json())
    .then(data => {console.log(data.message)})
    .catch(error => console.log(error))
  }
  function UpdatetData(){
    const reg = input1.current.value;
    const name = input2.current.value;
    const age = input3.current.value;
    const city = input4.current.value;

    console.log(reg, name, age, city);
    fetch(SERVER+"/update", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({reg, name, age, city})
    })
    .then(res => res.json())
    .then(data => {console.log(data.message)})
    .catch(error => console.log(error))
  }
 
  function DeletetData(){
    const reg = input1.current.value;

    fetch(SERVER+"/delete", {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({reg})
    })
    .then(res => res.json())
    .then(data => {console.log(data.message)})
    .catch(error => console.log(error))
  }

  function ReadData(){
    fetch(SERVER+"/read")
    .then(res => res.json())
    .then(data => {setForData(data.data);console.log(forData)})
    .catch(error => console.log(error))
  }



  return (
    <div className="App">
      Register No: <input type='text' ref={input1}/> <br />
      Name: <input type='text' ref={input2}/> <br />
      Age: <input type='text' ref={input3}/> <br />
      City: <input type='text' ref={input4}/> <br />
      <button type="submit" onClick={InsertData}>Insert</button>
      <button type="submit" onClick={UpdatetData}>Update</button> <br/>
      <button type="submit" onClick={DeletetData}>Delete</button>
      <button type="submit" onClick={ReadData}>Read</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
        {forData.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
       

      </table>
    </div>
  );
}

export default App;
```
server.js
```js
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db('college');
const connection = db.collection('students');

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/insert', InserUser);
app.post('/update', UpdateUser);
app.delete('/delete', DeleteUser);
app.get('/read', ReadData);

app.listen(PORT, ()=>{console.log('Server Listening on http://localhost:'+PORT)})

function InserUser(req, res){
    const data = req.body;
    console.log(data);
    connection.insertOne({_id:data.reg, name:data.name, age:data.age, city:data.city});
    res.send({message:"insert success"});
}

function UpdateUser(req, res){
    const data = req.body;
    console.log(data);
    connection.updateOne({_id:data.reg}, {$set:{name:data.name, age:data.age, city:data.city}});
    res.send({message:"update success"});
}

function DeleteUser(req, res){
    const data = req.body;
    console.log(data);
    connection.deleteOne({_id:data.reg});
    res.send({message:"delete success"});
}

function ReadData(req, res) {
   
    connection.find({}).toArray()
    .then(data => {
        console.log(data);
        res.send({ message: "Read success", data: data });
    })
}

```

# Run The App
- run the UI
```bash
npm install
npm start
```
- run the server
```bash
node server.js
```



