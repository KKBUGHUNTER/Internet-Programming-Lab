// /src/models/appmodel/testmodel/TestModel.js
const MainModel = require('../../MainModel.js');

async function getQuestionSet(testName) {
    const mainModule = new MainModel();
    await mainModule.connect();
    const client = await mainModule.getAppDataCollection();

    try {
        const result = await client.findOne({ "testName": testName });  
        if (result) {
            return result;  
        } else {
            console.log(`No question set found for test name: ${testName}`);
            return null;  
        }
    } catch (error) {
        console.error('Error retrieving question set:', error);
        return null;  
    }
}


module.exports = {getQuestionSet};