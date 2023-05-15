const mysql = require("mysql");
const con= mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Santraj@123',
    database:'details'
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
    else("conection dones")
});

module.exports =con;