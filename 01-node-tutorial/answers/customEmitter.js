const EventEmitter = require("events");
const emitter = new EventEmitter();
setInterval(() => {
    emitter.emit("timer", "hi there");
}, 4000);
emitter.on("timer", (msg) => console.log(msg));  