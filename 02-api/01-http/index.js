const http = require('http');
const pkg = require('./package.json');

const server = http.createServer((request, response) => {
    console.log('Mi primer servidor');
    console.log(request.url);

    if (request.url === '/dashboard') {
        response.end('Hola desde dashboard');
    }

    if (request.url === '/package') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(pkg));
    }

    response.end('Hola! ' + pkg.name);
});

server.listen(1234);

console.log(`El servidor está corriendo en http://localhost:1234`);