# Practical-Exam-Node.js-and-JavaScript.
practical exam took on 14th of june 2023, five questions and their answers !

Question 1) what is Node.js ?
Answer - Node.js is an open source server //         enviornment.
Node.js runs on various platforms (windows, Linux, Unix, Mac OperatingSystem X, etc.).
Node.js is free and Node.js uses JavaScript on the server.
Node.js uses asynchronous programming, that leads to run multiple tasks without waiting one for to finish !

Question 2) What is Module in Node.js ?
Answer - Modules can be a set of functions we want // to include in our application.
Consider modules to be the same as JavaScript or Python libraries.
Node.js has a set of built-in modules which we can // use without any further installation.

Question 3) Create a Web Server that listens to erver ports and gives
response back to the client using HTTP module.
Answer - 

var http = require('http');
// creating a server object:
http.createServer(function (require, response){
    res.write('Hello Sir, I am your Web server responding you!!!');//response to the client
    res.end(); //response ended
    console.log('Web server is running at 8080 port number')
}).listen(8080);

Question 4)  Create a Node.js file that reads the HTML file, and return the content using the File System module.
Answer - 

var http = require('http');
var fs = require('fs');
http.createServer(function (req,res)) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("Server is running at 8080 port number")
    return res.end();
 });
}).listen(8080);

// demofile1.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv= "X-UA-Compatible" content= "IE=edge">
    <meta name="viewport" content= "IE=edge">
    <title>Node.js File System</title>    </meta>    </meta></meta>
</head>
<body>
    <h1>Reading HTML Files</h1>
    <p>Node.js file that reads the HTML file and return the content</p>
</body>    
</html>

Question 5)  Create a Node.js file for deleting the existing file using the File System module.
 Answer- 
var fs = require('fs');

fs.unlink('newfile.txt', function (err) {
    if (err) throw err;
    console.log('file deleted');
});
//created a file named newfile.txt in the same directory.
