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

// JavaScript problems
const flattenArray = (array) => {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
};

const flattenObject = (obj) => {
  const flattenedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const valueIsObject = typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);

    if (valueIsObject) {
      Object.assign(flattenedObj, flattenedValue);
    } else {
      flattenedObj[key] = flattenedValue;
    }
  }
  return flattenedObj;
};

function flatten(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

const testArr = [1, 2, 3, 4, [5], 8];

const testObj = { a: 1, b: { c: 2, d: 3, e: { f: 4 } } };
const testObjArr = [{ a: [1, 2, [3, 4]] }];

// console.log(flatten(testObjArr));

// console.log(flattenArray(testArr));
// console.log(flattenObject(testObj));'
const obj1 = {
  values: "coming from from obj1",
};

const foo1 = function (a, b) {
  return a + b;
};

Function.prototype.myCall = function (thisContext, ...args) {
  const fnSymbol = Symbol();

  thisContext[fnSymbol] = this;

  const result = thisContext[fnSymbol](...args);

  delete thisContext[fnSymbol];

  return result;
};

Function.prototype.myBind = function (thisContext, ...initialArgs) {
  const fnSymbol = Symbol();
  const fnToBind = this;

  return function boundFunction(...moreArgs) {
    const combinedArgs = initialArgs.concat(moreArgs);

    thisContext[fnSymbol] = fnToBind;

    const result = thisContext[fnSymbol](...combinedArgs);

    delete thisContext[fnSymbol];

    return result;
  };
};

Function.prototype.myApply = function (thisContext, args = []) {
  const fnSymbol = Symbol();

  thisContext[fnSymbol] = this;

  console.log(thisContext.values);

  const result = thisContext[fnSymbol](...args);

  delete thisContext[fnSymbol];

  return result;
};

// const f = foo1.myApply(obj1, [1, 3, 3, 4]);

// console.log(f);

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((promise) => {
      promise.then(resolve).catch((_) => {
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject("All promises rejected");
        }
      });
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    let allCount = 0;
    const results = [];

    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          results[i] = { status: "fulfilled", value: res };
        })
        .catch((error) => {
          results[i] = { status: "rejected", error };
        })
        .finally(() => {
          allCount++;
          if (allCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

// Promise.myAllSettled([
//   new Promise((res) => setTimeout(() => res(0), 500)),
//   Promise.reject(5),
//   new Promise((res) => setTimeout(() => res(10), 1000)),
// ])
//   .then((res) => console.log(res))
//   .catch((error) => console.log("error " + error));

const memoize = (callback, resolver) => {
  const cache = new Map();
  function getCacheKey(args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  const memoized = function (...args) {
    const cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  };

  memoized.clear = () => {
    cache.clear();
  };

  memoized.delete = (...args) => {
    const cacheKey = getCacheKey(args);
    cache.delete(cacheKey);
  };

  memoized.has = (...args) => {
    const cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  return memoized;
};
