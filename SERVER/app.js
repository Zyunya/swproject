var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var routes = require('./routes/applyRoute');
var port = process.env.PORT || 888;
var fs = require('fs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/sweetvel.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/sweetvel.com/privkey.pem')
};

https.createServer(options,app).listen(888);

// AND ENABLE LISTENING TO ANOTHER PORT IN ORDER  TO LISTEN TO HTTP(NOT ONLY HTTPS) so we can run server in development mode
app.listen(889, () => {console.log(`LISTENING TO 889`);})
