const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const { clearLine } = require('readline');

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if(!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            //write data to the file and colse it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3) {
                            callback(false);
                        } else {
                            callback('Error closing in the new file');
                        }
                    })
                } else {
                    callback('Error writing in new file!');
                }
            })
        } else {
            callback(err);
        }
    })
}

module.exports = lib;