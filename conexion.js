var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laravel'
});

connection.connect();

connection.query('SELECT * FROM canales', function (error, results, fields) {
    if (error){ throw error;
    console.log('The solution is: ', results[0].solution);
    }else{
        for (var element of results) {
            console.log(element);
        }
    }
});

connection.end();
