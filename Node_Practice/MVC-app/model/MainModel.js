// MainModule.js
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "ipLab";

// Function to connect to MongoDB
async function connect() {
  try {
    // Create a new MongoClient instance
    const client = new MongoClient(uri);
    
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB server");

    // Access the database
    const db = client.db(dbName);
    console.log('out');
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log('out with error');
    throw error;
  }
  
}

module.exports = { connect };
