// /src/routes/MainRoute.js

const express = require('express');
const router = express.Router();
const LoginRegisterController = require('../controllers/LoginRegisterController.js');
const dashboardController = require("../controllers/DashboardController.js");
const profileController = require("../controllers/ProfileController.js");

router.post('/login', LoginRegisterController.login);
router.post('/register', LoginRegisterController.register);
router.get('/userDetails', profileController.getUserDetails);
router.delete('/deleteUser', profileController.deleteAccount);

module.exports = router;

