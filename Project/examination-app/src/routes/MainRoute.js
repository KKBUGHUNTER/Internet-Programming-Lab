// /src/routes/MainRoute.js

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/LoginRegisterController.js');
const authenticate = require("../middleware/authenticate.js");
const dashboardController = require("../controllers/DashboardController.js");

router.post('/login', mainController.login);
router.post('/register', mainController.register);


module.exports = router;

