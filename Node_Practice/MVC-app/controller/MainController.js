// MainController.js
const { connect } = require('../model/MainModel');

async function generateMessage(username, password) {
    console.log("I am generateMessage Function...");
    console.log("Username:", username);
    console.log("Password:", password);

    try {
        // Connect to MongoDB
        const db = await connect();
        console.log("DEBUG DB... 1");
        // Define collection
        const usersCollection = db.collection('credential');
        console.log("DEBUG DB... 2");
        // Find user by username
        const user = await usersCollection.findOne({ username });
        console.log("DEBUG DB... 3");
        if (!user) {
            return 'incorrect username or password'; // Return empty strings if user not found
        }
        console.log("DEBUG DB... 4");
        // Check password
        if (user.password !== password) {
            return 'incorrect username or password'; // Return empty strings if password is incorrect
        }
        console.log("Success. ", user.username + " " + user.password);
        return user.username;
    } catch (error) {
        console.log("Error logging in:", error);
        throw error;
    }
}

async function insertUser(username, password) {
    console.log("Inserting new user...");
    console.log("Username:", username);
    console.log("Password:", password);

    try {
        const db = await connect();
        const usersCollection = db.collection('credential');

        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return 'Username already exists'; 
        }

        const newUser = {
            username: username,
            password: password
        };
        await usersCollection.insertOne(newUser);
        
        console.log("User inserted successfully.");
        return 'User Register successfully';
    } catch (error) {
        console.log("Error inserting user:", error);
        throw error;
    }
}

module.exports = { generateMessage, insertUser };
