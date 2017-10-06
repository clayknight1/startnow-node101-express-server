
var express = require('express');
var app = express();
var data = require('./data.json');
var morgan = require('morgan');
const fs = require('fs');

app.use(express.static(__dirname + '/../../startnow-web101-san-diego-top-spots'));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.get('/', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        let sdData = JSON.parse(data);
        res.send(JSON.stringify(sdData))
    });
});

app.get('/data', (req, res) => {
    res.json(data);
});


module.exports = app;












// app.get('/', function(req, res){
//     fs.readFile('data'), function(err, data){
//         res.writeHead(200);
//         res.end(data);
//     };});







