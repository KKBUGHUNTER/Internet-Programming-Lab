// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(cors()); // Enable CORS
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Dummy user data (Replace this with data from your database)
let users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  // Find user by username
  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check password
  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Return a success message or token if needed
  res.json({ message: 'Login successful' });
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log("New user: ", username, " Passored: ", password);
  // Check if the username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Create a new user object
  const newUser = {
    id: users.length + 1,
    username,
    password
  };

  // Add the new user to the users array (this would typically be stored in a database)
  users.push(newUser);

    res.sta
tus(201).json({ message: 'Signup successful', user: newUser });
    console.log(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
