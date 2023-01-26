const debug = require('debug')('beta:server');
const http = require('http');
require('dotenv').config({ path: '.env' });
const Gateway = require('fast-gateway');
const app = require('../app');
const logWithColor = require('./lib/lib.js');

// Routing configuration
const routes = [
    { prefix: '/', target: 'http://localhost:3000' },
    { prefix: '/home', target: 'http://localhost:3002' },
    { prefix: '/chat', target: 'http://localhost:3003' }
];

// Server configuration
const PORT = normalizePort(process.env.SERVER_PORT || 3030);
const gateway = Gateway({ routes });
const server = http.createServer(app);

// Start the server
gateway.start(3001)
    .then(() => {
        logWithColor('API gateway at port 3001', 'notice');
    })
    .catch((error) => {
        logWithColor(`Error starting gateway: ${error}. Running server with limited functionality`, 'medium');
    });

server.listen(PORT);
// Event listeners
server.on('error', handleServerError);
server.on('listening', handleServerListening);

// Normalize a port into a number, string, or false
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) { return val; }
    if (port >= 0) { return port; }
    return false;
}


// Handle server error
function handleServerError(error) {
    if (error.syscall !== 'listen') { throw error; }

    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

    switch (error.code) {
        case 'EACCES':
            logWithColor(`${bind} requires elevated privileges`,'high');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logWithColor(`${bind} is already in use`, 'high');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Handle server listening event
function handleServerListening() {
    const address = server.address();
    const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
    debug(`Listening on ${bind}`);
    logWithColor(`Server listening on ${bind}`, 'success');
}