// dependecies
const http = require('http');

// app obj
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
};

//handle req response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World!');
};

