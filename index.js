//require the http module from Node
const http = require('http');

//server object that send headers and sends body responses
const server = http.createServer((req, res) => {
    console.log('Received ' + req.method + ' request for: ' + req.url);

    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World');
});

//required port
const PORT = process.env.PORT || 8080;

//listener so that your server will have a way to handle incoming connections
server.listen(PORT, (req, res) => console.log(`Server is listening on localhost:${PORT}`));