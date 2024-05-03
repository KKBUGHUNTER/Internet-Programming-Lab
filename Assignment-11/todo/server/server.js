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
const completedCollection = db.collection("completed");
console.log("Database Connected Successfuly....");


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

// DeleteTask END-POINT
async function DeleteTask(pos){
    try {
        const tasks = await ReadTask();
        if (pos >= 0 && pos < tasks.length) { 
            const taskToDelete = tasks[pos];
            await usersCollection.deleteOne({ task: taskToDelete });
        } else {
            console.log("Invalid position:", pos);
        }
    } catch(error){
        console.error('Error in deleting record in DB:', error);
    }
}

server_name.post('/deleteTask', (req, res)=>{
    try{
        const data = req.body;

        DeleteTask(data.index);

        res.status(200).send("success");
    }catch(error){
        res.status(402).send("Delete Error");
    }
})

// MoveTask END-POINT
async function MoveTask(pos) {
    try {
        const tasks = await ReadTask();
        if (pos >= 0 && pos < tasks.length) {
            const taskToMove = tasks[pos];
            const result = await completedCollection.insertOne({ task: taskToMove });
            console.log("Task moved to completed collection:", result.insertedId);
            await DeleteTask(pos);
        } else {
            console.log("Invalid position:", pos);
        }
    } catch (error) {
        console.error("Error moving task:", error);
    }
}

server_name.post('/moveTask', (req, res) =>{
    try {
        const data = req.body;
        const index = data.index; 

        MoveTask(index);

        res.status(200).send("success");
    } catch (error) {
        console.error("Move Error:", error);
        res.status(500).send("Move Error");
    }
})

// ReadCompletedTask END-POINT
async function ReadCompletedTask() {
    try {
        const cursor = completedCollection.find({});
        const tasks = await cursor.toArray();
        const result = tasks.map(task => task.task);
        return result;
    } catch (error) {
        console.error("Error reading completed tasks:", error);
        return [];
    }
}

server_name.get('/readCompletedTask', async (req, res) => {
    try {
        const completedTasks = await ReadCompletedTask();
        res.status(200).json({ completedTasks });
    } catch (error) {
        console.error("Error fetching completed tasks:", error);
        res.status(500).send("Internal server error");
    }
});


server_name.listen(4000, ()=>{
    console.log("Server Listening on http://localhost:4000");
})