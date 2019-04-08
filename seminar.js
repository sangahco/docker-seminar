// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(process.env.SERVER_PORT);

const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const logger = require('./logger');

app.use(express.static('static'))

server.listen('3000', '0.0.0.0', function(){
    logger.log('info', 'listening on 0.0.0.0:3000');
});