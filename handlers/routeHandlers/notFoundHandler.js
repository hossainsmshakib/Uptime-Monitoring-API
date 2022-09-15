//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('Not Found!');

    callback(404, {
        message: 'Requested url was not found.',
    });
};

module.exports = handler;