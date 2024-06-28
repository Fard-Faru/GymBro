const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });


const mssql = require('mssql');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true
    }
}

const connection = mssql.connect(dbConfig)
    .then(pool => {
        console.log("Connected to Azure DB Successfully");
        return pool
    })
    .catch(err => {
        console.error('DB Connection Failed! Error: ', err);
        throw err;
    })

module.exports = connection;