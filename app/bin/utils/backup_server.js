
var debug = require('debug')('beta:server');
const http = require('http');
require('dotenv').config( { path : '.env'});
const Gateway = require('fast-gateway');
const app = require('../app');
// const io = require('./socket-io');

var port = normalizePort(process.env.SERVER_PORT || 3030);

const gateway = Gateway({
    routes: [
        {
           prefix: '/',
           target : 'http://localhost:3000'
        },
        {
            prefix: '/home',
            target : 'http://localhost:3002'
        },
        {
            prefix: '/chat',
            target : 'http://localhost:3003'
        }
    ]
});


const server = http.createServer(app);
// io.attach(httpServer);


gateway.start(3001).then(()=>{
    console.log('API gateway at port 3001');
    server.listen(port);
    server.on('error', onError)
    server.on('listening', onListening)
    server.on('uncaughtException', function (req, res, route, err) {
        log.info('******* Begin Error *******\n%s\n*******\n%s\n******* End Error *******', route, err.stack);
        if (!res.headersSent) {  return res.send(500, {  ok: false   });  }
        res.write('\n');
        res.end();
    });

});


// Normalize a port into a number, string, or false
function normalizePort(val) {

    var port = parseInt(val, 10);
     // named pipe
    if (isNaN(port)) { return val; }
    // port number
    if (port >= 0) { return port; }
    return false;
}

// Event listener for HTTP server "error" event
function onError(error) {

    if (error.syscall !== 'listen') {  throw error;  }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event
function onListening() {

    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('listening on ' + bind)
}


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });