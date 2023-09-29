const nums = [3, 4, 6, 6, 6, 6, 6];
const target = 6;

const TEST_DATA = {
  nums7: [3, 4, 6, 6, 6, 6, 6],
  nums3: [3, 3, 3],
  target: 3,
};
//prototype
Array.prototype.upperBound = function (target) {
  // Time O(n)
  //Space O(1)

  for (let i = 0; i < this.length; i++) {
    if (target === this[i] && target !== this[i + 1]) {
      return i;
    }
  }
  return -1;
};

//function type
const upperBound = (nums, target) => {
  let i = 0;
  for (const num of nums) {
    if (num === target && num !== nums[i + 1]) {
      return i;
    }

    i++;
  }
  return -1;
};

//console.log("coming from proto " + nums.upperBound(6));

const createInfiniteObject = () => {
  return new Proxy(
    {},
    {
      get: function (target, propKey) {
        if (typeof propKey === "string") {
          return function () {
            return propKey;
          };
        }
      },
    }
  );
  My;
};

const obj = createInfiniteObject();

const fibGenerator = function* () {
  let [prev, curr] = [0, 2];
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
};

const fibGen = fibGenerator();

const createCounter = (init) => {
  let sum = init;

  return {
    increment: () => ++sum,
    decrement: () => --sum,
    reset: () => (sum = init),
  };
};

const counter = createCounter(3);

const once = (fn) => {
  let limit = 1;

  return function (...args) {
    if (limit === 1) {
      limit++;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a * b * c;

let onceFn = once(fn);

// console.log(onceFn(5, 7, 4));
// console.log(onceFn(1, 2, 3));
// console.log(onceFn(1, 2, 3));

const chunk = (arr, size) => {
  const newArr = [];
  const length = arr.length;
  let index = 0;
  while (index < length) {
    const subArr = [];
    let counter = 0;

    while (counter < size && index < length) {
      subArr.push(arr[index]);

      counter++;
      index++;
    }

    newArr.push(subArr);
  }

  return newArr;
};

//optimized chunk array

const chunkOptimized = (arr, size) => {
  const newArr = [];
  let index = 0;

  while (index < arr.length) {
    newArr.push(arr.slice(index, index + size));
    index += size;
  }

  return newArr;
};

class ArrayWrapper {
  constructor(array) {
    this.array = array;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `[${this.array.join(",")}]`;
    }

    return this.array.reduce((acc, el) => (acc += el), 0);
  }
}

//same problem with constructor function

const ArrayWrapperFoo = function (nums) {
  this.nums = nums;
};

ArrayWrapperFoo.prototype.valueOf = function () {
  return this.nums.reduce((acc, el) => (acc += el), 0);
};

ArrayWrapperFoo.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapperFoo(TEST_DATA.nums3);
const obj2 = new ArrayWrapperFoo(TEST_DATA.nums3);

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const expect = function (val) {
  this.val = val;

  return {
    toBe: (val) => {
      if (val === this.val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val) => {
      if (val !== this.val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

const argumentsLength = function (...args) {
  return args.length;
};

//console.log(argumentsLength(1, 2, 3, 56, 56, 6, 5, null, null, 76, 7, 67));

const cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    return fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timeoutId);
  };
};

const fn1 = (...args) => console.log("Function called with:", ...args);
const args = [1, 2, 3];
const t = 5000;
const cancelT = 4000;

const cancelFn = cancellable(fn, args, t);
// setTimeout(() => {
//   console.log("Cancel function invoked");
//   cancelFn();
// }, 3000);

Date.prototype.nextDay = function () {
  this.setDate(this.getDate() + 1);

  const yyyy = this.getFullYear();
  const mm = String(this.getMonth() + 1).padStart(2, "0");
  const dd = String(this.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
};

//console.log(new Date().nextDay());

const addTwoPromises = async function (promise1, promise2) {
  try {
    const res = await Promise.race([promise1, promise2]);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

//addTwoPromises(promise1, promise2).then((result) => console.log(result));

const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const fn2 = (x) => x;

console.log(sortBy([4, 5, 7, 1, 2, 3], fn2));
