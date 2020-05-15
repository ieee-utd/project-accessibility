'user strict';

var mysql = require('../config/config');

const connectMySQL = async () => {
    try {
        mysql.connect();

        console.log(`MySQL Connected`.cyan.underline.bold);
    } catch(err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectMySQL;;