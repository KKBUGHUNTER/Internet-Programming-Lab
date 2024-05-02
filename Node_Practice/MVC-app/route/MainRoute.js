// MainRoute.js
const { generateMessage, insertUser } = require('../controller/MainController');

const express = require('express');
const router = express.Router();

router.post("/login", async function (req, res) { 
    const { username, password } = req.body; 
    try {
        const data = await generateMessage(username, password); 
        console.log("DEBUG ", data);
        res.json({ message: data });
    } catch (error) {
        console.error("Error generating message:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post("/register", async function (req, res) { 
    const { username, password } = req.body; 
    try {
        const data = await insertUser(username, password);
        console.log("DEBUG ", data);
        res.json({ message: data });
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
