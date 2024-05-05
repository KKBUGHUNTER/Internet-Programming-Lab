// /src/controllers/TestController.js
const { getQuestionSet } = require("../models/appmodel/testmodel/TestModel");

exports.testData = async (req, res) => {
    const data = req.query;
    console.log("Test Request: ", data.testName);
    try {
        const questionSet = await getQuestionSet(data.testName);
        // console.log(questionSet);
        if (questionSet) {
            return res.json({questionSet});
        } else {
            console.log("No question set found for test name: ${testName}");
            return res.json({message:`No question set found for test name: ${testName}`});
        }
        
    } catch (error) {
        console.error('Error retrieving question set:', error);
    }
}

