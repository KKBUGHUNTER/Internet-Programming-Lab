// /src/modules/LoginModule.js

const MainModel = require('./MainModel.js');

async function LoginUser(registerNumber, password){
    const mainModule = new MainModel();
    await mainModule.connect();
    const userCollection = await mainModule.getUserCollection();
    
    try {
        // Find the user with the given registerNumber
        const user = await userCollection.findOne({ _id: registerNumber });
        return user;
        
    } catch (error) {
        console.error('Error finding user:', error);
        return "ERROR";
    }
    finally {
        await mainModule.close();
    }
}
module.exports = { LoginUser };

