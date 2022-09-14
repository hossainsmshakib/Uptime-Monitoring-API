// dependecies
const http = require('http');

// app obj
const app = {};

// config
app.config = {
    port: 7000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

//handle req response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello Node');
};

//start server
app.createServer();
