var http = require('http');
var fs = require('fs');

var newOffice = fs.readFileSync('./new-office.jpg');

http.createServer(function (req, resp) {
  resp.writeHead(200, {'Content-Type': 'image/jpeg'});
  resp.end(newOffice);
}).listen(3000);

console.log("listening on localhost:3000");
