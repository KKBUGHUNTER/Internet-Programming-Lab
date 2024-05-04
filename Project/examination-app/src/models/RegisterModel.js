// /src/modules/RegisterModel.js

const MainModel = require('./MainModel.js');

async function RegisterUser(username, registerNumber, password){
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();
    
    try {
        // Insert the user with the given 
        const user = {
            _id: registerNumber,
            username: username ,
            password: password,
            solved: [],
            rank: 0
        };

        // Insert the user into the user collection
        await userCollection.insertOne(user);

        return user;
        
    } catch (error) {
        console.error('Error finding user:', error);
        return "ERROR";
    }
    finally {
        await mainModule.close();
    }
}
module.exports = { RegisterUser };

