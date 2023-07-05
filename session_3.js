// Event loops:

// bit-> 1/0 -> binary number
// byte-> 8bits 10101001
// kb -> 1024bytes
// 1mb -> 1024kb
// 1gb -> 1024mb
// 1tb -> 1024gb
// 3. Buffer:
// octet -> 0,,,7
// decimal-> 0....9
// way1
var buf = new Buffer.alloc(10);
// way2 -> if you're storing integer
var buf = new Buffer.from([10, 20, 30, 40, 50]);

// console.log(buf);

// way 3- string
var buf = new Buffer.from("simply learning node.js", "utf-8");
// console.log(buf);

// Writing into the buffer

// 1. allocate the space for buffer
var buff = new Buffer.alloc(200);
console.log(buff);
// 2. write into the empty buffer -> it will return the length how much we've written to buffer. octet
var length = buff.write("Hi there how are you?");
// console.log(length);

// read somthing from the buffer
// console.log(buff.toString());
// .toJSON()
// console.log(buff.toJSON()); // why you need to convert to json

// buffers concatination

var buffer1 = new Buffer.from("Hi there");
var buffer2 = new Buffer.from(" How are you?");

var result = Buffer.concat([buffer1, buffer2]);
// console.log(result.toString());

// console.log(buffer1.compare());

// buffer copy
var buffer3 = new Buffer.alloc(3);
buffer1.copy(buffer3);
// console.log(buffer3.toString());

// slicing of buffer
var buffer2 = new Buffer.from(" How are you?");
var result = buffer2.slice(0, 9);
console.log(result.toString());
console.log(buffer2.length);
