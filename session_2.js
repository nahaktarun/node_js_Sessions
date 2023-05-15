// // Callbacks :

// // blocking code synchronous code:

// var fs = require("fs");

// // var data = fs.readFileSync("input.txt");
// // console.log(data.toString());

// // // console.log(data);
// // console.log("Program ended");

// // require, import
// // require -> common js -> express require
// // import -> es6 module syntax -> react

// // non-blocking asynchronous code -> callbacks, async wait

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// console.log("Programm end");

// Event Driven Programming =>

// eventEmitter -> emit/trigger the event
// events queue -> all the active events will be available
// event loop -> it will check if any event is there in event queue or not.
// Event Handler ->  function which will perform action on that event

// eventEmmiter -> eventQueue -> event loop -> event handler

// Step 1:  import event module
// var events = require("events");

// // Step2 : create an event emitter object

// var eventEmitter = new events.EventEmitter();

// // step3 : create a event handler function
// var eventHandler = function connected() {
//   console.log("Connection successful");

//   eventEmitter.emit("Data received");
// };

// // step4: binding the connection event with the handler .on()
// eventEmitter.on("connection", eventHandler);

// // fire the connection event
// eventEmitter.emit("connection");

// console.log("Program ended");

// EventEmitter class:

var events = require("events");
var eventEmitter = new events.EventEmitter();
// Methods of event emitter:
// 1. addListener: helps to to listen all the events. which is being triggered.
// 2.on() -> to bind the event with event handler
// 3. removelistener:  removes the listener
// 4. removeAllListener: removes all thelisteners from the event.

// Listener1
var listner1 = function listner1() {
  console.log("Listener executed");
};
// Listener2
var listner2 = function listner2() {
  console.log("Listener 2 executed");
};

// binding the listeners
eventEmitter.addListener("connection", listner1);

eventEmitter.on("connection", listner2);

var eventListener = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListener + " Listners listening to connection event");

// Fire the connection
eventEmitter.emit("connection");

// Remove the binding of listener1 function
eventEmitter.removeListener("connection", listner1);
console.log("Listener1 will not listen now");

// fire the event gain
eventEmitter.emit("connection");

var eventListener = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListener + " Listners listening to connection event");

console.log("Program ended");
