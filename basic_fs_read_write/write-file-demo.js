var fs = require('fs');

var dataObj = { name: "murtz"};

fs.writeFile('list.json', JSON.stringify(dataObj));
