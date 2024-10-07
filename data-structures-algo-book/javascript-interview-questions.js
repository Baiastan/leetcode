// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// //my answer
// //undefined
// //reference error

// // sayHi();

// //undefined
// //reference error
// for (var i = 0; i < 3; i++) {
//   //setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   //setTimeout(() => console.log(i), 1);
// }

// //3 3 3 0 1 2

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// //output:
// //20 and undefined

// //console.log(shape.diameter()); //20
// //console.log(shape.perimeter()); // undefined because arrow function does have its own this keyword and cannot be bound using bind(), call(), apply()

// console.log(+true); //1
// console.log(!"Baiastan"); //false

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// //console.log(mouse.bird.size); // not valid
// console.log(mouse[bird.size]); //true
// console.log(mouse[bird["size"]]); //true

// // let c = { greeting: "Hey" };
// // let d;

// // d = c;

// // c.greeting = "Hello";
// // console.log(d.greeting); //hello

// //1 mistake

// // let a = 3;
// // let b = new Number(3);
// // let c = 3;

// // console.log(a == b);
// // console.log(a === b);
// // console.log(b === c);

// // class Chameleon {
// //   constructor({ newColor = "green" } = {}) {
// //     this.newColor = newColor;
// //   }

// //   static colorChange(newColor) {
// //     this.newColor = newColor;
// //     return this.newColor;
// //   }

// //   setNewColor(color) {
// //     this.newColor = color;
// //   }

// //   getColor() {
// //     return this.newColor;
// //   }
// // }

// // const freddie = new Chameleon({ newColor: "purple" });

// // console.log(Chameleon.colorChange("orange")); //orange
// // freddie.setNewColor("orange");

// // console.log(freddie.getColor());

// // let greeting;
// // greetign = {}; // Typo!
// // console.log(greetign);

// // function bark() {
// //   console.log("Woof!");
// // }

// // bark.animal = "dog";
// // function Person(firstName, lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// // }

// // const member = new Person("Lydia", "Hallie");
// // Person.prototype.getFullName = function () {
// //   return `${this.firstName} ${this.lastName}`;
// // };

// // console.log(member.getFullName());
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// //const sarah = Person("Sarah", "Smith"); in strict mode, it throws a rerefence error

// // console.log(lydia);
// // //console.log(sarah);

// // let number = 0;
// // console.log(number++);
// // console.log(++number);
// // console.log(number);

// //0 2 2

// console.log(nextGreaterElement(230241));
const sleep = (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });
};

async function greeting() {
  console.log("Hello ");
  await sleep(2000);
  console.log("Bye");
}

// Array.prototype.square = function () {
//   const set = [];
//   for (let i = 0; i < this.length; i++) {
//     set[i] = this[i] * this[i];
//   }

//   return set;
// };

const setCancellableInterval = (cb, delay, ...args) => {
  let intervalId = setInterval(() => {
    cb(...args);
  }, delay);

  return () => clearTimeout(intervalId);
};

const setCancellableTimeout = (callback, delay, ...args) => {
  let timeoutId = setTimeout(() => {
    callback(...args);
  }, delay);

  return () => clearTimeout(timeoutId);
};

// const cancel = setCancellableInterval(
//   (a, b) => {
//     console.log(a + b);
//   },
//   1000,
//   2,
//   4
// );
// cancel();

const chunk = (array, size = 1) => {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }
  const set = [];
  let newArr = [];
  let i = 0;
  for (const el of array) {
    newArr.push(el);
    i++;

    if (i === size) {
      set.push(newArr);
      i = 0;
      newArr = [];
    }
  }

  if (newArr.length !== 0) {
    return [...set, newArr];
  }

  return set;
};

// console.log(chunk([1, 2, 3, 4, 5]));

const compact = (set) => {
  return set.filter((el) => el);
};

// console.log(compact([0, 1, false, 2, "", 3, null]));
function difference(array, values) {
  if (values.length === 0) {
    return array;
  }

  const set = new Set(values);

  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i]) && array[i] !== undefined) {
      result.push(array[i]);
    }
  }

  return result;
}

// console.log(difference([1, , 3], [1]));
// function dropRightWhile(array, predicate) {
//   return array.filter((el, i, set) => !predicate(el, i, set));
// }

export default function dropRightWhile(array, predicate) {
  let index = array.length - 1;

  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, index + 1);
}

// console.log(dropRightWhile([1, , 3, 4, 5], (value) => value === undefined));

Array.prototype.myFilter = function (callbackFn, context) {
  if (this.length === 0 || !this) {
    return [];
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined && callbackFn.call(context, [this[i]], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// console.log(
//   [1, 2, 3, 4].myFilter(
//     function (el) {
//       console.log(this);

//       return el % 2 === 0;
//     },
//     { name: "Baiastan", number: 2024685645 }
//   )
// );

function $(selector) {
  const buttonEl = document.getSelector(selector);

  buttonEl.css = function (propertyName, property = null) {
    if (propertyName && !property) {
      return buttonEl.style[propertyName];
    }

    buttonEl.style[propertyName] = property;

    return buttonEl;
  };
}

// const buttonEl = $("button");

const debounce = (func, wait) => {
  let timeoutId = null;
  let context = undefined;
  let argsToInvoke = undefined;

  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function invoke() {
    if (timeoutId == null) {
      return;
    }

    clearTimer();

    func.apply(context, argsToInvoke);
  }

  function fn(...args) {
    clearTimer();
    argsToInvoke = args;
    context = this;
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;

  fn.flush = invoke;

  return fn;
};

let a = 0;
function increment() {
  a++;

  console.log(a);
}

const debouncedIncrement = debounce(increment, 3000);

// debouncedIncrement();

// console.log(debouncedIncrement.flush());

const add = (a, b, c) => {
  return a + b + c;
};

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return (arg) => (arg === undefined ? curried.apply(this, args) : curried.apply(this, [...args, arg]));
  };
}

// const curriedFunc = curry(add);

// console.log(curriedFunc(3, 4)(6));

const classNames = function (...args) {
  const set = new Set();

  for (let el of args) {
    if (typeof el === "object" && !Array.isArray(el) && el != null) {
      for (let key in el) {
        if (Boolean(el[key])) {
          set.add(key);
        }
      }
    } else if (Array.isArray(el)) {
      for (let item of el) {
        set.add(classNames(item));
      }
    } else if (!!el) {
      set.add(el);
    }
  }

  let arr = [];

  for (let value of set.values()) {
    arr.push(value);
  }

  return arr.join(" ");
};

//console.log(classNames(null, false, "bar", "bar", undefined, 0, 1, { baz: null }, ""));

const flatten = (value) => {
  const res = [];

  const helper = (value) => {
    if (!Array.isArray(value)) {
      res.push(value);
    }

    if (Array.isArray(value)) {
      for (let el of value) {
        helper(el);
      }
    }
  };

  helper(value);

  return res;
};

// console.log(flatten([[null, [true]], undefined]));

const promiseAll = (iterable) => {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (promise, index) => {
      try {
        const value = await promise;
        results[index] = value;
        unresolved--;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

const promiseAny = (iterable) => {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (promise, index) => {
      try {
        const value = await promise;

        resolve(value);
      } catch (err) {
        unresolved--;
        results.push(err);
        if (unresolved === 0) {
          reject(new AggregateError([]));
        }
      }
    });
  });
};

const promiseAllSettled = (iterable) => {
  return new Promise((resolve) => {
    if (iterable.length === 0) {
      resolve([]);
      return;
    }

    const result = new Array(iterable.length);

    let count = iterable.length;

    iterable.forEach(async (promise, index) => {
      try {
        const res = await promise;

        result[index] = { status: "fulfilled", value: res };
      } catch (err) {
        result[index] = { status: "rejected", reason: err };
      }
      count--;

      if (count === 0) {
        resolve(result);
      }
    });
  });
};

// const p0 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(1);
//   }, 200);
// });
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 100);
// // });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 10);
// });

// (async () => {
//   try {
//     const results = await promiseAllSettled([p0, p1, p2]); // This will throw as soon as one promise rejects
//     console.log(results);
//   } catch (err) {
//     console.log("Caught rejection with value:", err); // Logs 3, the first rejection
//   }
// })();

//

function getElementsByTagName(el, tagName) {
  const elements = [];

  const tagNamUpper = tagName.toUpperCase();

  function traverse(el) {
    if (el == null) {
      return;
    }

    if (el.tagName === tagNamUpper) {
      elements.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  }

  for (const child of el.children) {
    traverse(child);
  }

  return elements;
}

const listFormat = (items, options) => {
  if (items.length === 0) return [];

  const result = [];

  let formattedItems = items.filter((el) => el);

  if (formattedItems.length === 0) return [];

  if (options && options?.unique) {
    const uniqueItems = Array.from(new Set(items));
    formattedItems = uniqueItems;
  }

  if (options && options?.sorted) {
    formattedItems.sort();
  }

  if (options && options?.length) {
    const startIndex = options.length;
    const length = formattedItems.length;
    if (startIndex > 0 && length - startIndex >= 1) {
      let insertString = length - startIndex > 1 ? "others" : "other";

      formattedItems.splice(startIndex, length - startIndex, `${length - startIndex} ${insertString}`);
    }
  }

  for (let i = 0; i < formattedItems.length; i++) {
    if (formattedItems[i] !== "") {
      if (formattedItems[i + 1] !== "" && i + 1 === formattedItems.length - 1) {
        result.push(formattedItems[i] + " and ");
      } else {
        if (i !== formattedItems.length - 1) {
          result.push(formattedItems[i] + ", ");
        } else {
          result.push(formattedItems[i]);
        }
      }
    }
  }

  return result.join("");
};

// console.log(
//   listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//     length: 3,
//     unique: true,
//     sorted: true,
//   })
// );

const deepEqual = (valueA, valueB) => {
  const typeA = typeof valueA;
  const typeB = typeof valueB;

  if (valueA != null && valueB != null && valueA.length !== valueB.length) {
    return false;
  }

  const primitiveTypes = {
    string: true,
    number: true,
    boolean: true,
    object: false,
  };

  if (typeA !== typeB) return false;

  if (!primitiveTypes[typeA] && (valueA != null || valueB != null)) {
    if (Array.isArray(valueA)) {
      for (let i = 0; i < valueA.length; i++) {
        if (!deepEqual(valueA[i], valueB[i])) {
          return false;
        }
      }
    } else {
      if (Object.keys(valueA).length !== Object.keys(valueB).length) {
        return false;
      }

      for (let key in valueA) {
        if (!valueB.hasOwnProperty(key)) return false;

        if (!deepEqual(valueA[key], valueB[key])) {
          return false;
        }
      }
    }
  } else {
    if (valueA != null) {
      if (valueA !== valueB) {
        return false;
      }
    } else {
      if (valueA != valueB) {
        return false;
      }
    }
  }

  return true;
};

// console.log(deepEqual({ foo: [], item: [1, 2, { baz: undefined }] }, { foo: [], item: [1, 2, { baz: undefined }] }));
