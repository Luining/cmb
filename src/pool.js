const mysql = require("mysql");
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'cmb',
    connectionLimit:10
});
module.exports(pool)
// var position = position;
// pool.query(
//     ' INSERT INTO saveposition SET ?', position, (err, result)=>{
//         if(err){
//             throw error
//         }
//         console.log(result)
//     }
// );