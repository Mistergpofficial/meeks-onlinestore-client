const express = require('express');
const serveStatic = require('serve-static');
var path = require('path');
const history = require('connect-history-api-fallback');


const app = express();

//app.use(express.static('static'));
//Serves all the request which includes /images in the url from Images folder


//const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

const staticFileMiddleware = express.static(__dirname + '/dist');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use('/images', express.static(__dirname + '/static/images'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);