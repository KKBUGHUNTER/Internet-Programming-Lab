const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "ipLab";

// Create a new MongoClient
const client = new MongoClient(uri);

async function connect() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB server");

    // Select the database
    const db = client.db(dbName);

    // Get the collection
    const collection = db.collection("product");

    // Find all documents in the collection and convert cursor to array
    const documents = await collection.find().toArray();

    // Print each document
    documents.forEach(doc => {
      console.log(doc);
    });

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection closed");
  }
}

// Call the connect function
connect();