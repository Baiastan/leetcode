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
