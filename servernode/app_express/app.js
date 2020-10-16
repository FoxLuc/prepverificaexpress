var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req,res) {
 res.sendFile(__dirname + '/index.html');
});

app.get('/api/products', function(req,res) {
 res.sendFile(__dirname + '/dati.json');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
