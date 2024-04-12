// server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');


const app = express();
app.use(cors());

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'internship'; 
const collectionName = 'cse';
const client = new MongoClient(url);

app.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello, world!\n');
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Rename the file
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = req.file.path;
  res.send('File uploaded successfully.');

  
  connect(filePath);
});


async function connect(filePath) {
  try {
    await client.connect();
    console.log("Connected to MongoDB server");
    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    console.log('Reading Excel file...');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; 
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log('Inserting data into MongoDB...');
    const result = await collection.insertMany(data);

    client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } 
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

