// import EventEmitter from "events";

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [callback];
    } else {
      this.events[event].push(callback);
    }
    //leetcode way
    // this.events[event] = this.events[event] ?? [];
    // this.events[event].push(callback);

    return {
      unsubscribe: () => {
        const index = this.events[event].indexOf(callback);
        if (index !== -1) {
          this.events[event].splice(index, 1);
        }
        //way of leetcode
        // this.events[event].filter((fn) => fn !== callback);
        // if (this.events[event].length === 0) {
        //   delete this.events[event];
        // }
      },
    };
  }

  emit(event, args = []) {
    //leetcode way
    if (!(event in this.events)) return [];
    return this.events[event].map((callback) => callback(...args));
  }
}

//TC For subscribe O(1) & for unsubscribe and emit: O(n), n = number of callbacks
//SC: O(n), where n = number of callbacks

const eventEmitter = new EventEmitter();

//error Event
eventEmitter.subscribe("error", (errorMessage) => {
  console.log("Error Message:", errorMessage);
});

eventEmitter.emit("error", ["something went wrong"]);
