const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');

const connectMongo = require('./config/mongo_config');
const connectMySQL = require('./config/mysql_config');

const solutions = require('./routes/solutions');
const tickets = require('./routes/tickets');

dotenv.config({ path: './config/config.env' });

connectMongo();
connectMySQL();

const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    '/api/v1/solutions', 
    solutions
);

app.use(
    '/api/v1/tickets', 
    tickets
);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);