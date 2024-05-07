// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

let users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log("New user: ", username, " Password: ", password);
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username,
    password
  };

  users.push(newUser);

  res.status(201).json({ message: 'Signup successful', user: newUser }); // Fixed typo here
  console.log(users);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
