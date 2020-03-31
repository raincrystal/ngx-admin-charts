const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  console.log(`Mock Server request [${req.originalUrl}]`);
  next();
});

app.use(cors())

app.use('/service', router);

app.listen(8080);

console.log('Server started at: http://localhost:8080/');
