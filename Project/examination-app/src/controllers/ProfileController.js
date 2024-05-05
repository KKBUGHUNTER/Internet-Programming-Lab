// /src/controllers/ProfileController.js
const {getUser, DeleteUser} = require("../models/appmodle/ProfileModel");


exports.getUserDetails = async (req, res) => {
    let { userId } = req.query; // Use req.query to get parameters from the URL
    userId = parseInt(userId);
    console.log("getUserDetails END-POINT Hit:", userId);

    try {
        const user = await getUser(userId); // Call getUserDetails function with userId
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const data = {
            username: user.username,
            registerNumber: user._id,
            score: user.score,
            courseCount: user.solved.length, // Corrected to use array.length
            courseList: user.solved
        };
        console.log(data);
        return res.json(data);
    } catch (error) {
        console.log("Error retrieving user details:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


exports.deleteAccount = async (req, res) => {
    let { userId } = req.query; // Use req.query to get parameters from the URL
    userId = parseInt(userId);
    console.log("getUserDetails END-POINT Hit:", userId);
    // Call the function to delete the user account based on the userId
    const result = await DeleteUser(userId);
    
    if (result === "DeleteSuccess") {
        return res.json({ message: "DeleteSuccess" });
    } else {
        return res.status(500).json({ message: "Failed to delete user account" });
    }
};