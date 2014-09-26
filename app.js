/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('views', path.join(__dirname, 'views'));

app.get('/', require('./routes/index'));

// http://mlb.mlb.com/partnerxml/gen/news/rss/ana.xml
// http://mlb.mlb.com/partnerxml/gen/news/rss/bos.xml
app.get('/newsfeed', require('./routes/newsfeed'));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
