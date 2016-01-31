var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : ' ',
   user     : 'root',
   password : 'M1r0o!',
   database : 'transcode'
 }); 
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });
 module.exports = connection;
