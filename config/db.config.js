'use strict';

const mysql = require('mysql');

// * My local mysql database connection 
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log('Database Connected!');
});

module.exports = dbConn;