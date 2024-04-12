// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

// Connection URI
const uri = "mongodb://localhost:27017";
const dbName = "ipLab";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
async function connect() {
  try {
    // Create a new MongoClient instance
    const client = new MongoClient(uri);
    
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB server");

    // Access the database
    const db = client.db(dbName);

      const collectionName = "credential";
    // Define collection
    const usersCollection = db.collection(collectionName);
      
    console.log("Connected to MongoDB server\nDatabase: " + dbName + " Collection: " + collectionName);

    // Signup endpoint
    app.post('/signup', async (req, res) => {
      const { username, password } = req.body;

      try {
        // Check if the username already exists
        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
        }

        // Insert the new user into the collection
        const newUser = await usersCollection.insertOne({ username, password });

        res.status(201).json({ message: 'Signup successful'});
      } catch (err) {
        console.error("Error signing up:");
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    // Login endpoint
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;

      try {
        // Find user by username
        const user = await usersCollection.findOne({ username });

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Check password
        if (user.password !== password) {
          return res.status(401).json({ message: 'Invalid password' });
        }

        // Return a success message or token if needed
        res.json({ message: 'Login successful', user });
      } catch (err) {
        console.error("Error logging in:");
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Call the connect function
connect();
