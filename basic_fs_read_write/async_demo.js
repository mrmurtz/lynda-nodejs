var fs = require('fs');

function hollaBackWhenYouDone(err, data){
  console.log('data:', data);
}

fs.readdir('../lynda_node_up_running', hollaBackWhenYouDone);

console.log('All done');
