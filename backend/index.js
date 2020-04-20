const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const solutions = require('./routes/solutions');
//const tickets = require('./routes/tickets');

const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.use(
    '/api/v1/solutions', 
    solutions
);

// app.use(
//     '/api/v1/tickets', 
//     tickets
// );

const PORT = process.env.PORT || 8000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);