// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

const uri = "mongodb://localhost:27017";
const dbName = "internship";

app.use(cors());
app.use(bodyParser.json());

async function connect() {
  try {
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log("Connected to MongoDB server");

    const db = client.db(dbName);

      const collectionName = "users";
    // Define collection
    const usersCollection = db.collection(collectionName);
      
    console.log("Connected to MongoDB server\nDatabase: " + dbName + " Collection: " + collectionName);

   
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;

      try {
        const user = await usersCollection.findOne({ username });

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
          return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful', user });
      } catch (err) {
        console.error("Error logging in:");
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connect();