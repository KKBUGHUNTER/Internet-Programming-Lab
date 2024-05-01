const express = require('express');
const bp = require("body-parser");
const cors = require('cors');
const { MongoClient } = require('mongodb');

const server_name = express();
server_name.use(cors());
server_name.use(bp.json());

// Database Config
const client = new MongoClient("mongodb://localhost:27017");
client.connect();
const db = client.db("learning");
const usersCollection = db.collection("todo");
console.log("Database: " + "learning" + " Collection: " + "todo");


// AddTask END POINT
async function AddTask(newTask){
    const result = await usersCollection.insertOne({ task: newTask });
    console.log("Task inserted successfully:", result.insertedId);
}
server_name.post('/addTask', (req, res)=>{
    const data = req.body;

    AddTask(data.task);

    res.status(200).send("success");
});

// ReadTask END-POINT
async function ReadTask(){
    console.log('read function is called');
    try {
        const cursor = usersCollection.find({});
        const tasks = await cursor.toArray();
        const result = [];
        for(var i=0; i<tasks.length; i++)
            result.push(tasks[i].task)
        
        return result;
    } catch (error) {
        console.error("Error reading tasks:", error);
        return []; 
    }
}
server_name.get('/readTask', async (req, res) => {
    try {
        const tasks = await ReadTask();
        console.log(tasks);
        res.status(200).json({task:tasks}); 
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})



server_name.listen(4000, ()=>{
    console.log("Server Listening on http://localhost:4000");
})