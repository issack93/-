const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  var myObj = {
  	name: 'Anna',
  	surnam: 'vag',
  	age: 22
  	
  };
  res.end(JSON.stringify(myObj));


});

server.listen(9000, 'localhost');
  
 