const http = require ('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res ) => {
 res.statusCode = 200;
 res.setHeader('content-Type', 'text/plain');  
 res.end('Hello Word of JavaScript from zero to hero ')  
});

server.listen(port, host, () => {
    console.log('Server running at ${host}:${port}');
});

