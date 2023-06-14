// Question 3) Create a Web Server that listens to 
//  server ports and gives
// response back to the client using HTTP module.
// Answer - 

var http = require('http');
// creating a server object:
http.createServer(function (require, response){
    res.write('Hello Sir/Client, I am your Web server responding you!!!');//response to the client
    res.end(); //response ended
    console.log('Web server is running at 8080 port number')
}).listen(8080);
