// src/controllers/LoginRegisterController.js
const { LoginUser } = require('../models/LoginModel');
const { RegisterUser } = require('../models/RegisterModel');

function generateToken(userId) {
  const newToken = userId + Math.random().toString(36).substring(2, 15);
  console.log("New Token Generated - ", newToken);
  return newToken;
}
exports.register = async (req, res) => {
  let { username, registerNumber, password } = req.body;
  registerNumber = parseInt(registerNumber);
  console.log("Register END-POINT Hit:", username, registerNumber, password);
  
  try {
    let user = await LoginUser(registerNumber, password); 
    if (user) {
      console.log("User already exists:", user.username, registerNumber);
      return res.json({ message: 'User already exists.', username: user.username, registerNumber: registerNumber });
    } else {
      user = await RegisterUser(username, registerNumber, password); 
      if (user) {
        console.log("Signup Success:", username, registerNumber);
        return res.json({ message: "Signup Success", username: username, registerNumber: registerNumber });
      } else {
        console.log("Signup Fail. Try again:", username);
        return res.json({ message: "Signup Fail. Try again.", username: username, registerNumber: -1 });
      }
    }
  } catch (error) {
    console.log('...Register ERROR...');
    res.status(500).json({ message: 'Signup Fail. Try again.' });
  }
};

exports.login = async (req, res) => {
  let { registerNumber, password } = req.body;
  registerNumber = parseInt(registerNumber);
  console.log("Login END-POINT Hit:", registerNumber, password);
  try {
    const user = await LoginUser(registerNumber); 
    if (user) {
      if (user.password === password) {
        console.log("User:", user._id, "Login Success at", new Date());
        const token = generateToken(user._id);
        res.cookie('token', token, { httpOnly: true });
        return res.json({ message: 'Login successful', username: user.username, registerNumber: user._id, token: token });
      } else {
        console.log("User:", user._id, "Incorrect Password ", new Date());
        return res.json({ message: 'Incorrect Username or *Password'});
      }
    } else {
      console.log("User:", user._id, "User Not Found ", new Date());
      return res.json({ message: 'Incorrect *Username or Password'});
    }
  } catch (error) {
    console.log("Login API-END POINT Error ", new Date());
    res.status(500).json({ message: 'Server Error.'});
  }
};
