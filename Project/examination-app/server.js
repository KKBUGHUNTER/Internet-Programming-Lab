const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mainRoute = require('./src/routes/MainRoute');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 7020;

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Serve static files from the React build directory
// app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/', mainRoute);

// Serve index.html for all other routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.listen(PORT, () => {
  console.log(`SERVER Listening http://localhost:${PORT}`);
});
