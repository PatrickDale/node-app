const express = require('express');
const winston = require('winston');
const app = express();

app.get('/',function(req,res) {
  winston.info('received request');
  res.send("Hello World");
});

app.listen(4000);
