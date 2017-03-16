var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var pool = new Pool(config);
var crypto = require('crypto');
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));

    
});

function hash (input, salt) {
//How do we create a hash?

var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
return hashed.toString('hex');
    
}


app.get('/hash/:input', function(req, res)
{
   var hashedString = hash(req,params,input, ' this is some random string');
req.send(hashedString); 
}); 




app.get('/test-db',function(req,res){
    res.sendFile(path.join(_dirname,'ui','index.html'))});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
