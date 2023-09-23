const nums = [3, 4, 6, 6, 6, 6, 6];
const target = 6;
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

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
