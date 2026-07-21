import { EventEmitter } from "node:events";

const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();

/*task.on("greet", sayHi);           // greet become a special word now when we use emit than greet call sayHi and takes parameter
task.on("greet", (name) => {
  console.log(`${name} started working`);           // here sequence matters
});
task.on("greet", (name) => {
  console.log(`${name} stopped working`);
});
task.emit("greet", " Divyansh");                   // first divyansh calls and then rahul calls because of sequence
task.emit("greet","Rahul");*/

/*task.once("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet", (name) => {
  console.log(`${name} stopped working`);
});
task.emit("greet", " Divyansh");                 // only first emit will be called because of once method and second emit(rahul's greet) will not be called
task.emit("greet","Rahul");*/


/*task.once("exit", (name) => {
  console.log(`system shutdown by ${name} `);
});
task.emit("exit", "divyansh");
task.emit("exit", "rahul");
task.emit("exit", "mohit");*/

task.once("greet", (name) => {
  console.log(`${name} started working`);           
});
task.once("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet", (name) => {
  console.log(`${name} stopped working`);
});
task.emit("greet", " Divyansh");
console.log();
task.off("greet",sayHi);          // here we are removing sayHi function from greet event so it will not be called in next emit also it must have function name                
task.emit("greet","Rahul");
task.emit("greet","manish");
console.log();
task.emit("exit", "divyansh");  // execute only once
task.emit("exit", "employee");
console.log("total listeners are: ",task.listenerCount("greet"));  // to check how many listeners are there for greet event
task.removeAllListeners("greet");  // to remove all listeners of greet event