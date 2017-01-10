/**
 * Created by Spencer on 1/10/2017.
 */
var http = require('http');

http.createServer(function(req, res) {
    //send the information back to the user
    res.writeHead(200, {'Content-Type': 'text-plain'});
    //saying hi to the user
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

//console output to let user know were listening for incoming requests
console.log("Server running at http://127.0.0.1:1337");