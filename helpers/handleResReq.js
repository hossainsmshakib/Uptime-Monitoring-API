//dependencies
const {StringDecoder} = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');


const handler = {};

//handle req response
handler.handleReqRes = (req, res) => {
    // req handeling
    //get the url and parse it
    const parseUrl = url.parse(req.url, true);

    const path = parseUrl.pathname;
    // remove / from path
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // get any method in lowercase
    const method = req.method.toLowerCase();

    // get the query string
    const queryStringObject = parseUrl.query;

     //headers of req
    const headerObject = parseUrl.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject,
    };

     //get the body of req data
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    
    chosenHandler(requestProperties, (statuscode, payload) => {
        statuscode = typeof(statuscode) === 'number' ? statuscode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        //return the final response
        res.writeHead(statuscode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    //end converting the data to string
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello from Node..');
    });  
};

module.exports = handler;