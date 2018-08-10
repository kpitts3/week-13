var http = require("http");

var portOne = 7000;
var portTwo = 7500;

function handleRequestOne(request, response) {
  response.end("You're the greatest");
}

function handleRequestTwo(request, response) {
  response.end("You kind of suck");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function() {

  console.log("Server listening on: http://localhost:" + portOne);
});

serverTwo.listen(portTwo, function() {

  console.log("Server listening on: http://localhost:" + portTwo);
});