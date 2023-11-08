class EventTarget {
  constructor() {
    this.events = {};
  }

  addEventListener(eventName, callback) {
    this.events[eventName] = this.events[eventName] ?? [];
    this.events[eventName].push(callback);

    return this.events;
  }

  removeEventListener(eventName, callback) {
    const indexOfCb = this.events[eventName].indexOf(callback);

    if (indexOfCb !== -1) {
      this.events[eventName].splice(indexOfCb, 1);

      if (this.events[eventName].length === 0) {
        delete this.events[eventName];
      }
    }
  }

  dispatchEvent(eventName, args) {
    this.events[eventName] = this.events[eventName] ?? [() => console.log("There is no event!")];

    this.events[eventName].map((cb) => {
      return cb(...args);
    });
  }
}

// const eventTarget = new EventTarget();

// function greet(name, message) {
//   console.log(`Hello there ${name}, Do you like ${message}`);
// }

// function foo() {
//   console.log("This is my foo function");
// }

// eventTarget.addEventListener("foo", foo);
// const events = eventTarget.addEventListener("greet", greet);

// console.log(events);

// eventTarget.dispatchEvent("greet", ["Baiastan", "Food"]);

const debounce = (callback, delay, immediate = false) => {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    const shouldCallImmediately = timerId == null && immediate;

    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timerId = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timerId = null;
    }, delay);
  };
};

const foo = (name) => {
  console.log("Debounced function", name);
};

const debouncedFoo = debounce(foo, 1000, false);

debouncedFoo("Baiastan");
