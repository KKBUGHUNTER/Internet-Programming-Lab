const { generateTestList } = require("../models/appmodel/MainDashboardModel");

exports.getTestList = async (req, res) => {
    try {
        const data = await generateTestList();
        const formattedData = [];

        for (let i = 0; i < data.length; i++) {
            const { testName, testDescription, totalNoOfQuestion } = data[i];
            formattedData.push({
                testName: testName,
                testDesc: testDescription,
                totalNoOfQues: totalNoOfQuestion
            });
        }
        // console.log(formattedData);
        return res.json(formattedData);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
