// dependecies
const http = require('http');
const {handleReqRes} =require('./helpers/handleResReq');
const environment = require('./helpers/environments');
const data = require('./lib/data');
// app obj
const app = {};

// testing file system
data.create('test', 'newFile', {name: 'Bangladesh', language: 'Bangla'}, (err) => {
    console.log(`error was`, err);
});

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
