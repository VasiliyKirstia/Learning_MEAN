'use strict';

const express = require('express');
const ModelsProvider = new (require("./models/ModelsProvider.js"))();

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

ModelsProvider.createModel("user", require("./models/User.js"));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
