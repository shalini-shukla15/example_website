/**
 * http://usejsdoc.org/
 */

const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'ashu',
	password: 'ashutosh',
	database: 'newschema'
});

