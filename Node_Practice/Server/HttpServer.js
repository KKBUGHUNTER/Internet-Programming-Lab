var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(8081,()=>{
  console.log("Server Listening on http://localhost:8081")
});