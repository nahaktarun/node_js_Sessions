// 1, import the required modules
// 2. create server
// 3. read request and return response

// step1
var http = require("http");

// step2 create server

const PORT = 8000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end("Hello world");
  })
  .listen(PORT);

console.log(`Server is running by tarun on port ${PORT}`);

// REPL
