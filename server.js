const express = require('express');
const serveStatic = require('serve-static');
var path = require('path');
const history = require('connect-history-api-fallback');


const app = express();
app.use(serveStatic(path.join(__dirname + '/dist')));
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(express.static('static'));
//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);