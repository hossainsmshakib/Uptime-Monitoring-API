// dependecies
const http = require('http');
const {handleReqRes} =require('./helpers/handleResReq');

// app obj
const app = {};

// config
app.config = {
    port: 7000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

//start server
app.createServer();
