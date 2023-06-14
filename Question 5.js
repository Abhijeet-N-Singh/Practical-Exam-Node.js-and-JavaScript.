// Question 5)  Create a Node.js file for deleting the existing file using the File
// System module.
// Answer- 
var fs = require('fs');

fs.unlink('newfile.txt', function (err) {
    if (err) throw err;
    console.log('file deleted');
});
//created a file named newfile.txt in the same directory.
