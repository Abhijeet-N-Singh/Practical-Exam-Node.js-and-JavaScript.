// Question 4)  Create a Node.js file that reads the HTML file, and return the
// content using the File System module.
// Answer - 

var http = require('http');
var fs = require('fs');
http.createServer(function (req,res)) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("Server is running at 8080 port number")
    return res.end();
});
}).listen(8080);
