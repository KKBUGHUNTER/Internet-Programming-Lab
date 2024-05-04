const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainRoute = require("./route/MainRoute");

const app = express();
PORT = 7020;

app.use(bodyParser.json());
app.use(cors());

app.use('/', mainRoute);

app.listen(PORT, ()=>{

    console.log('SERVER Listening http://localhost:'+PORT);
})
