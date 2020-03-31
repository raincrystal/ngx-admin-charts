const express = require('express');
const router = express.Router();

const quality = require('./quality');

quality.init(router);

module.exports = router;
