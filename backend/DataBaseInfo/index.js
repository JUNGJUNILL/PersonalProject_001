const mariadb = require('mariadb'); 
const pool = mariadb.createPool({
    database:'mariadb',
    host:'captainryan.gonetis.com',
    user:'root',
    password:'6942', 
    port:3307, 
}); 
module.exports =  pool; 