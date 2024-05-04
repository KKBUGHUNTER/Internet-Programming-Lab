// /src/routes/MainRoute.js

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/LoginRegisterController.js');


router.post('/login', mainController.login);
router.post('/register', mainController.register);

module.exports = router;

