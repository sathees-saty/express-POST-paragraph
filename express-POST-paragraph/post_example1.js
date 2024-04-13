var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
    var first_name = req.body.first_name;  
    var last_name = req.body.last_name;
    res.send('<body style="background-color:powderblue;"><p style="font-size:160%;">Username: ' + first_name +'</p><p style="font-size:160%;">Lastname: '+last_name+'</p></body>');  

})  

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  