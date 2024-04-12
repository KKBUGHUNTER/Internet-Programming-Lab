const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ipLab';

// Create a new MongoClient
const client = new MongoClient(uri);

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);

  // Example insert operation
  db.collection('credential').insertOne({ name: 'hacker', password:'1234567890' }, (insertErr, result) => {
    if (insertErr) {
      console.error('Error inserting document:', insertErr);
    } else {
      console.log('Document inserted with ID:', result.insertedId);
    }

    // Close the connection after insert operation completes
    client.close();
  });
});
