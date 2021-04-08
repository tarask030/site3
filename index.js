const http = require('http');
const url = require('url');
console.log('server-start port 3000');

http.createServer((request, response) => {
    console.log('server work');
    if (request.method == 'GET') {
         //GET -> получить обработать 
        let urlRequest = url.parse(request.url, true);
        console.log(urlRequest.query.test); // ! GET Params
        response.end('Node server is working' + urlRequest.query.test);
    }
}).listen(3000);
