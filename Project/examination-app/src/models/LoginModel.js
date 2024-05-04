// /src/modules/LoginModule.js

const MainModel = require('./MainModel.js');

async function LoginUser(registerNumber){
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();
    
    try {
        // Find the user with the given registerNumber
        // console.log("Searching for user: ", registerNumber);
        const user = await userCollection.findOne({ _id: registerNumber });
        // console.log(user);
        return user;
        
    } catch (error) {
        // console.log('Error finding user');
        return "ERROR";
    }
    finally {
        await mainModule.close();
    }
}
module.exports = { LoginUser };

