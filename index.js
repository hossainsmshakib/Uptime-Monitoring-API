// dependecies
const http = require('http');
const {handleReqRes} =require('./helpers/handleResReq');
const environment = require('./helpers/environments')
// app obj
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

//handle req response
app.handleReqRes = handleReqRes;
//start server
app.createServer();
