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
