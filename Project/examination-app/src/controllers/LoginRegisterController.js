// src/controllers/LoginRegisterController.js
const { LoginUser } = require('../models/LoginModel');
const { RegisterUser } = require('../models/RegisterModel');

exports.login = async (req, res) => {
  let { registerNumber, password } = req.body;
  registerNumber = parseInt(registerNumber);
  
try {
  const user = await LoginUser(registerNumber, password); 
  if (user) {
      if (user.password === password) {
          console.log("success");
          return res.json({ message: 'Login successful', username: user.username, registerNumber:registerNumber });
      } else {
          return res.json({ message: 'Incorrect Username or Password', username: "" });
      }
  } else {
      return res.json({ message: 'Incorrect Username or Password', username: "" });
  }
} catch (error) {
  console.log('...LOGIN ERROR...');
  res.status(500).json({ message: 'Server Error.' });
}
};

exports.register = async (req, res) => {
  let { username, registerNumber, password } = req.body;
  registerNumber = parseInt(registerNumber);
  console.log(username, registerNumber, password);
  
  try {
    let user = await LoginUser(registerNumber, password); 
    if (user) {
      return res.json({ message: 'User already exists.', username: user.username, registerNumber: registerNumber });
    } else {
      user = await RegisterUser(username, registerNumber, password); 
      if (user)
        return res.json({ message: "Signup Success", username: username, registerNumber: registerNumber });
      else
        return res.json({ message: "Signup Fail. Try again.", username: username, registerNumber: -1 });
    }
  } catch (error) {
    console.log('...Register ERROR...');
    res.status(500).json({ message: 'Signup Fail. Try again.' });
  }
};
