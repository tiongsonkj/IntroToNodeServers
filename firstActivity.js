// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

var http = require("http");

// listenting to port 7000
var PORTONE = 7000;

// listening to port 7500
var PORTTWO = 7500;

var phrases = ["I know what I'm doing.", "I really do not know what I am doing.", "I suck", "I'm great!"];

var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

// function positiveRequest(request, response) {
// 	response.end("I know what I'm doing. This is the path: " + request.url);
// }

// function negativeRequest(request, response) {
// 	response.end("I really do not know what I am doing. This is the path: " + request.url);
// }

function randomRequest(request, response) {
	response.end(randomPhrase + "This is the path: " + request.url);
}

// var serverOne = http.createServer(positiveRequest);

var serverOne = http.createServer(randomRequest);

serverOne.listen(PORTONE, function() {

	// The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

var serverTwo = http.createServer(negativeRequest);

serverTwo.listen(PORTTWO, function() {
	// The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
