let mysql = require('mysql');


let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fc"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;