var fs = require('fs');

fs.readdir('../../projects', function(err, data){
  console.log(data);
});
