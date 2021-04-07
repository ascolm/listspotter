// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');
const config = require('./config');

// SERVER CONFIG
const app = express();
const port = config.serverPort;
const host = config.serverHost;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

// CONNECTION TO DB & LISTENING TO PORT
app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}! 🐯`);
});