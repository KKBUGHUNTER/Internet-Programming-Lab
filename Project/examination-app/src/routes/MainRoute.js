// /src/routes/MainRoute.js

const express = require('express');
const router = express.Router();
const LoginRegisterController = require('../controllers/LoginRegisterController.js');
const dashboardController = require("../controllers/DashboardController.js");
const profileController = require("../controllers/ProfileController.js");
const testController = require("../controllers/TestContorller.js");

// stage 1
router.post('/login', LoginRegisterController.login);
router.post('/register', LoginRegisterController.register);

// stage 2
router.get('/userDetails', profileController.getUserDetails);
router.delete('/deleteUser', profileController.deleteAccount);
router.get('/test', dashboardController.getTestList);


// stage 3 
router.get("/taketest", testController.testData);
router.get('/updateUserData', profileController.updateUserScore);


module.exports = router;

