const mariadb = require('mariadb'); 
const pool = mariadb.createPool({
    database:process.env.DBNAME,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD, 
    port:3307, 
}); 
module.exports =  pool; 