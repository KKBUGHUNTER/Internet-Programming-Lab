// /src/models/ProfileModel.js

const MainModel = require('../MainModel.js');

async function getUser(userId){
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();

    try {
        
        const user = await userCollection.findOne({ _id: userId });
        // console.log("model" , user);
        return user;
    } catch (error) {
        console.log("Error finding user details:", error);
        return null;
    }
}
async function DeleteUser(userId){
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();

    try {
        // Delete the user document from the collection based on the userId
        const result = await userCollection.deleteOne({ _id: userId });
        
        if (result.deletedCount === 1) {
            return "DeleteSuccess"; 
        } else {
            return "DeleteFailed";
        }
    } catch (error) {
        console.log("Error deleting user:", error);
        return null;
    }
}

async function updateUserScore(userId, newScore, testName) {
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();
    console.log(userId, newScore, testName);
    try {
        await userCollection.updateOne(
            { _id: userId },
            { $set: { score: newScore }, $addToSet: { solved: testName } } // Update score and add testName to solved array
        );
    } catch (error) {
        console.log("Error updating user score:", error);
        throw error;
    }
}

module.exports = {getUser, DeleteUser, updateUserScore};