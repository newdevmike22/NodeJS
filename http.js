const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to the Terrordome!'); 
        return;   
    }
    if (req.url === '/about') {
        res.end('Here is our short history.'); 
        return;       
    }
    res.end(`
        <h1>Oops!</h1>
        <p>You made a wrong turn at Albuquerque.</p>
        <a href='/'>Back Home</a>
    `)
});

server.listen(5000);