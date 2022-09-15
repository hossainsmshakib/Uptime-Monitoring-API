const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data');
