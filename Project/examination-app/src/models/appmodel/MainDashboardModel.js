const MainModel = require('../MainModel.js');

async function generateTestList(){
    const mainModule = new MainModel();
    
    await mainModule.connect();

    const client = await mainModule.getAppDataCollection();

    try {
        const cursor = client.find({});

        const data = await cursor.toArray();
            
        return data;
    } catch (error) {
        console.log("Error finding user details:", error);
        return null;
    }
}

module.exports = { generateTestList };
