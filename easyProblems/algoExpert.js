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

// debouncedFoo("Baiastan");

let globalNum = 5;

function logNum() {
  const localNum = 1;
  console.log(globalNum + localNum);
}

globalNum = 10;

function closureExample() {
  const num = 5;

  return function () {
    console.log(num);
  };
}

const result = closureExample();

//result();

function makeFunstions() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum1: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Inremented");
    },
  };
}

const { logNum1, increment } = makeFunstions();
const { logNum1: logNum2, increment: increment2 } = makeFunstions();

// logNum1();

// increment();
// increment();
// logNum1();

// logNum2();
// increment2();
// logNum2();

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 500);
// }

function logThis(x, y) {
  console.log(this);
  console.log(x, y);
}

const obj = {
  num: 10,
};

const boundLogThis = logThis.bind(obj, 10);

// logThis.call(obj, 10, 20);
// logThis.apply(obj, [10, 20]);

// [1, 2, 3].forEach(
//   function (num) {
//     console.log(this);
//     console.log(num);
//   },
//   { num: 10 }
// );

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log("Hello I am " + this.name);
//   }
// }

// const conner = new Person("Conner");

//conner.speak();

function sum(a, b, c) {
  return a + b + c;
}

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//console.log(curriedSum(1)(4)(10));

function curry(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return func(a, b, c);
      };
    };
  };
}

function curryShorter(func) {
  return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum1 = curry(sum);

// console.log(sum(1, 4, 10));
// console.log(curriedSum1(1)(4)(10));

const person = {
  isHuman: true,
};

// const child = Object.create(person);
// child.maxAge = 18;

const child = Object.assign(Object.create(person), {
  maxAge: 18,
});

Object.setPrototypeOf(child, person); // discouraged, very slow operation in browsers

// console.log(child.isHuman);
// console.log(person.maxAge);
// console.log(child.maxAge);

const funcProto = Object.getPrototypeOf(() => {});

const arrayProto = Object.getPrototypeOf([]);

// console.log(Object.getOwnPropertyNames(funcProto));
// console.log(Object.getOwnPropertyNames(arrayProto));

function Person(name) {
  this.name = name;
}

Person.prototype = {
  contructor: Person,
  isHuman: true,
};

const baiastan = new Person("Baiastan");

console.log(baiastan.__proto__);

//Generators

function* genNumbers(count) {
  for (let i = 0; i < count; i++) {
    yield i;
  }

  return 5;
}

function* genNumber1(count) {
  const value = yield 0;
  yield value + 3;
}

const gen = genNumber1(5);

console.log(gen.return(5));

// console.log(gen.throw(new Error("There was an error")));

// for (const value of gen) {
//   console.log(value); // it will ignore return statement in generator function
// }

function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 3;
  yield 4;
}

function* getNumbers2() {
  yield* generator1();
  yield* generator2();
}
