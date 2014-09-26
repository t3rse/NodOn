var fs = require('fs');
module.exports = function(req, res){
  var team = req.query.team || "";
  if(team == "ana"){
    fs.readFile('./public/ana.xml', function(err, data){
      if(err){
        return console.log(err);
      }
      res.removeHeader('Content-Type');
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(data);
    });
  }
  else{
    res.redirect(
      "http://mlb.mlb.com/partnerxml/gen/news/rss/{team}.xml".replace('{team}', team)
    );
  }
}
