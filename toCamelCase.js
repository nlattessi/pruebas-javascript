#!/usr/bin/env node

str = process.argv[2];

if (str) {
    console.log(str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); })
    );
} else {
    var path = require('path');
    var filename = path.basename(__filename);
    console.log("Use: node " + filename + " <string>");
}