// streams: flow of anything
// flow of data.
// stream are objects that let you read data from source or write data to a destination.
// source -> read
// destination -> write.

// 4 streams:
// 1. readable stream
// 2. writable stream.
// 3. duplex stream.
// 4. Transform -> a type of duplex stream. we modify the output based upon the input.

// 4. event for steam.
// data : first it'll check if data is available or not. then only it's going to read.
// end: it checks there is not more data available to read.
// error: help to check the errors in event.
// finish: event is fired when all the data has been flushed out.

// var fs = require("fs");
// var data = "";

// var readStream = fs.createReadStream("input.txt");

// // set the encoding
// readStream.setEncoding("utf8");

// // event to handle read data
// readStream.on("data", (chunk) => {
//   data = data + chunk;
// });

// // event 'end'
// readStream.on("end", () => {
//   console.log(data);
// });

// // 'error' event

// readStream.on("error", (err) => {
//   console.log(err.stack);
// });

// console.log("data read successfully");

// Write stream

// var fs = require("fs");

// var data = "Hi there Iam tarun here";

// // create a write stream
// var writableStream = fs.createWriteStream("output.txt");

// writableStream.write(data + "Sanjay", "utf8");

// // mark the end of the file
// writableStream.end();

// writableStream.on("finish", () => {
//   console.log("Write data completed");
// });
// writableStream.on("error", (err) => {
//   console.log(err.stack);
// });

// console.log("ENd of program");

// Piping of streams

// var fs = require("fs");

// var readStream = fs.createReadStream("input.txt");

// var writeStream = fs.createWriteStream("output.txt");

// readStream.pipe(writeStream);
// console.log("Program ended");

// chaining of pipeline
var fs = require("fs");
var zlib = require("zlib");

// fs.createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));

// console.log("Success....");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("tarun_input.txt"));

console.log("Success....");
