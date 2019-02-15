const express = require('express');
const serveStatic = require('serve-static');
var path = require('path');


const app = express();

app.use(express.static(__dirname + '/dist'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);