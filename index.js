const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
require("./config/db");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/api/v1',routes );

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})