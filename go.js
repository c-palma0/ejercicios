
var nom= {'nombre': 'carolina', 'apellido': 'palma'}

var http = require('http');

var options = {
  host: '127.0.0.1',
  path: '/',
  port: '8081',
 
};
callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
req.end();


var options = {
  host: '127.0.0.1',
  path: '/all',
  port: '8081',
  headers: nom
};
callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
req.end();

/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('nombre ', (answer) => {
  console.log(`${answer}`);

  rl.close();
});
*/

