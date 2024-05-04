# Examination Application Project 
- Make sure to replace 'your_secret_key' in MainController.js with a secure secret key for JWT token generation.
    `const token = jwt.sign({ username: user.username }, 'your_secret_key');`
```js

const crypto = require('crypto');

// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log(generateSecretKey());

```


```

examination-app/
├── src/
│   ├── models/
│   │   └── MainModel.js
│   ├── controllers/
│   │   └── MainController.js
│   ├── views/
|	|	├── pages/
|	|	│   ├── dashboard.js
|	|	│   ├── profile.js
|	|	│   ├── TestPage.js
|	|	│   └── ResultPage.js
│   │   ├── Signup.js
│   │   └── Login.js
│   ├── routes/
│   │   └── MainRoute.js
├── server.js
└── App.js


```