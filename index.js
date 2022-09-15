// dependecies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');

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

//handle req response
app.handleReqRes = (req, res) => {
    // req handeling
    //get the url and parse it
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl);

    const path = parseUrl.pathname;
    console.log(path);
    // remove / from path
    const trimPath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimPath);

    // get any method in lowercase
    const method = req.method.toLowerCase();
    console.log(method);

    // get the query string
    const queryStringObject = parseUrl.query;
    console.log(queryStringObject);

     //headers of req
    const headerObject = parseUrl.headers;
    console.log(headerObject);

     //get the body of req data
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    //end converting the data to string
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello SD');
    });
    
};

//start server
app.createServer();
