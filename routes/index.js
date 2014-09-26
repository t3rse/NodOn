var fs = require('fs');
module.exports = function(req, res){
  fs.readFile('./public/index.html', function(err, data){
      if(err){
        return console.log(err);
      }
      res.removeHeader('Content-Type');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
}
