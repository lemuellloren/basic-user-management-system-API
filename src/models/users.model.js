'use strict'

let dbConn = require('./../../config/db.config');

// * Users object create 
let Users = function (users) {
    this.first_name = users.first_name;
    this.last_name = users.last_name;
    this.address = users.address;
    this.postcode = users.postcode;
    this.contact_number = users.contact_number;
    this.email = users.email;
    this.user_name = users.user_name;
    this.password = users.password;
};

// * Create/Add 
Users.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// * Search by id 
Users.findById = function (id, result) {
    dbConn.query("Select * from users where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

// * Search All
Users.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

// * Update 
Users.update = function (id, users, result) {
    dbConn.query("UPDATE users SET first_name=?,last_name=?,address=?,postcode=?,contact_number=?,email=?,user_name=?,password=? WHERE id = ?", [users.first_name, users.last_name, users.address, users.postcode, users.contact_number, users.email, users.user_name, users.password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// * Delete 
Users.delete = function (id, result) {
    dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Users;