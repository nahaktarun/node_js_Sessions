// node.js file system :
// using synchronous and asynchronous way

var fs = require("fs");
// reading file synchronously
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());

// reading asyncronously -> callbacks
// fs.readFile("input.txt", (err, data) => {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// opening of file
// fs.open(path, flags/mode, callbacks)
// mode -> read, write

// fs.open("input.txt", "r+", (err, fd) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Successfully opened the file", fd);
// });

// to see stats of the file

// fs.stat("input.txt", (err, stat) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(stat);

//   // to check the stats of current used file

//   console.log(stat.isFile());
//   console.log(stat.isDirectory());
// });

// Writing into the files using async

// fs.writeFile("input.txt", "My name is tarun", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     fs.readFile("input.txt", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data.toString());
//       }
//     });
//   }
// });

// fs.mkdir("/Users/tarunnahak/Node_js_session2/test", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Directory created successfully");
// });

// fs.readdir("/Users/tarunnahak/Node_js_session2", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     files.forEach((file) => {
//       console.log(file);
//     });
//   }
// });

// Global objects

console.log(__filename);
console.log(__dirname);

const prinHello = () => {
  console.log("hello");
};

let t = setTimeout(prinHello, 2000);
console.log(t);
clearTimeout(t);

// os module. -> it help to to interact with the os to run a process kill,
// path module -> location of files and directory
// net module -> helpful for network connectity
// dns module -> domain name system : binding between the domain name and ip address

// domain -> www.google.com (domain) -> 123.232.1.2.1
// domain module.
