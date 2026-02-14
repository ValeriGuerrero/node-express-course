const EventEmitter = require("events");
const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit("timer", "hi there");
}, 2000);
emitter.on("timer", (msg) => console.log(msg)); // bc this is like async we add emitter.emit first 


emitter.on("Hi", (name) => { // we usually start with emitter.on 
    console.log("Hi", name)
})
emitter.emit("Hi", "Valeri")

//"event name", (parameters)

myEmitter.on("order", (id, status) => {
    console.log(id, status)
})

myEmitter.emit("order", 42, "shipped")