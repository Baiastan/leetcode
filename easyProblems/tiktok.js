function isAnagram(str, t) {
  if (str.length !== t.length) return false;

  const letters = {};

  for (const ch of str) {
    letters[ch] = letters[ch] ?? 0;
    letters[ch]++;
  }

  for (const ch of t) {
    if (letters[ch]) {
      letters[ch]--;
    } else {
      return false;
    }
  }

  for (const key in letters) {
    if (letters[key] !== 0) return false;
  }

  return true;
}

const groupAnagrams = (strs) => {
  //TC(NKlogK), N is the length of strs, and K is the maximum length of a atring in strs, the outer loop has complexity O(N)
  //SC: O(NK)
  const ans = {};

  let i = 0;
  for (const str of strs) {
    const word = str.split("").sort().join("");

    ans[word] = ans[word] ?? [];
    ans[word].push(strs[i]);

    i++;
  }

  return Object.values(ans);
};

const groupAnagramsFaster = (strs) => {
  const ans = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const ch of str) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const key = count.toString();

    ans[key] = ans[key] ?? [];
    ans[key].push(str);
  }

  return Object.values(ans);
};

const findAnagrams = (str, p) => {
  //very left
  let np = p.length;
  let ns = str.length;
  const arr = [];
  let i = 0;

  const pCounter = {};

  for (let char of p) {
    if (pCounter.hasOwnProperty(char)) {
      pCounter[char]++;
    } else {
      pCounter[char] = 1;
    }
  }

  while (i < ns - np + 1) {
    const substring = str.substring(i, np + i);
    const sCounter = {};
    let isAnagram = false;
    let skipCheck = false;
    for (let j = 0; j < np; j++) {
      if (substring.length !== p.length) {
        break;
      }
      if (pCounter.hasOwnProperty(substring[j])) {
        if (sCounter.hasOwnProperty(substring[j])) {
          sCounter[substring[j]]++;
        } else {
          sCounter[substring[j]] = 1;
        }
      } else {
        skipCheck = true;
        break;
      }
    }
    if (!skipCheck) {
      isAnagram = areObjectsEqual(sCounter, pCounter);
    } else {
      i++;
    }

    if (isAnagram) {
      arr.push(i);
    }

    i++;
  }
  console.log(arr);

  return arr;
};

const findAnagramsFaster = (str, p) => {
  //sliding window
  let np = p.length;
  let ns = str.length;

  if (np > ns) {
    return [];
  }
  const pCount = new Map();
  const sCount = new Map();

  for (let ch of p) {
    pCount.set(ch, (pCount.get(ch) || 0) + 1);
  }

  let output = [];

  for (let i = 0; i < ns; ++i) {
    let ch = str[i];

    sCount.set(ch, (sCount.get(ch) || 0) + 1);

    //Remove one letter from the left side of the window
    if (i >= np) {
      ch = str[i - np];
      if (sCount.get(ch) == 1) {
        sCount.delete(ch);
      } else {
        sCount.set(ch, sCount.get(ch) - 1);
      }
    }

    //Compare hashmap in the sliding window with reference hashmap
    if (mapsAreEqual(pCount, sCount)) {
      output.push(i - np + 1);
    }
  }

  return output;
};

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
// findAnagramsFaster("cbaebabacd", "abc");

const anagramMappings = (nums1, nums2) => {
  const result = [];

  const obj = {};
  let index = 0;
  for (const n of nums2) {
    obj[n] = obj[n] ?? [];
    obj[n].push(index);
    index++;
  }

  for (const n of nums1) {
    if (obj.hasOwnProperty(n)) {
      result.push(obj[n][obj[n].length - 1]);
    }
  }

  return result;
};

anagramMappings([40, 40], [40, 40]);

// const arr = [2, 1, 4, 3];

// arr.sort((val1, val2) => {
//   return val2 - val1;
// });

// console.log(arr);

// const obj = {
//   website: "Algoexprt",
//   logWebsite: function () {
//     console.log(this.website);
//   },
// };

// obj.logWebsite();

// async function mystery() {
//   return 2;
// }

// console.log(mystery());

// console.log({} == {});
// console.log([] == []);
// console.log(null == undefined);

// function* generator() {
//   const value = yield 2;
//   yield value + 3;
//   yield value + 5;
// }
// const generatorObj = generator();
// console.log(generatorObj.next(3).value);
// console.log(generatorObj.next(5).value);
// console.log(generatorObj.next(7).value);

// const mystery = {
//   num: 6,
//   x: {
//     z: 1,
//   },
// };
// console.log(mystery.num > 5 ? mystery?.x?.y ?? 2 : mystery.x.y);

// const arr = [2, 3, 4];
// const [mysteryOne, ...rest] = arr;
// const mysteryTwo = [...rest, ...arr, mysteryOne];

// console.log(mysteryTwo);

const minSteps = (str, t) => {
  let count = 0;

  const sCount = {};
  const counter = {};

  for (let ch of str) {
    sCount[ch] = sCount[ch] ?? 0;
    sCount[ch]++;
  }

  for (let ch of t) {
    counter[ch] = counter[ch] ?? 0;
    counter[ch]++;
  }

  for (const key in counter) {
    const diff = counter[key] - (sCount[key] || 0);
    if (diff > 0) {
      count += diff;
    }
  }

  return count;
};

// console.log(minSteps("leetcode", "practice"));

const removeDuplicates = (nums) => {
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let count = 0;
    while (nums[right] === nums[left]) {
      count++;

      if (count > 2) {
        nums.splice(right, 1);
        right--;
      }
      right++;
    }
    left = right;
  }

  return nums;
};

// removeDuplicates([1, 1, 1, 2, 2, 3]);

const isValid = (str) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  const obj = { "[": "]", "(": ")", "{": "}" };

  const stack = [];

  for (let c of str) {
    if (obj.hasOwnProperty(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const open = stack.pop();
      if (obj[open] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};

// console.log(isValid("([{]])"));

const threeSum = (nums) => {
  //time limit exceeded
  const output = [];

  const map = new Map();

  let i = 0,
    j = 1,
    k = 2;

  while (i < nums.length) {
    while (j < nums.length) {
      while (k < nums.length) {
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] === 0) {
          const key = [nums[i], nums[j], nums[k]];

          const sortedKeys = key.sort((a, b) => a - b).toString();

          if (!map.has(sortedKeys)) {
            map.set(sortedKeys, sortedKeys);
            output.push([...key]);
          }
        }
        k++;
      }
      k = j + 2;
      j++;
    }
    j = i + 1;
    k = i + 2;
    i++;
  }
  console.log(output);
  return output;
};

const threeSumFaster = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1,
        right = nums.length - 1,
        target = -nums[i];
      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  console.log(res);
  return res;
};

// threeSumFaster([-1, 0, 1, 2, -1, -4]);

const twoSum = (nums, target) => {
  const obj = {};
  let i = 0;
  for (const n of nums) {
    const comp = target - n;

    if (!obj.hasOwnProperty(comp)) {
      obj[n] = i;
    } else {
      return [obj[comp], i];
    }
    i++;
  }
};

const twoSumII = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum - target > 0) {
      right--;
    } else if (sum - target < 0) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};

const threeSumSmaller = (nums, target) => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1,
        right = nums.length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < target) {
          res.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  //console.log(res);
  return res;
};

// console.log(threeSumSmaller([-2, 0, 1, 3], 2));

const calculatorII = (str) => {
  const stack = [];

  const operations = {
    "*": 2,
    "/": 2,
    "-": -1,
    "+": 1,
  };

  let sum = 0;

  let currentNumber = "";
  let operation = "+";

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 0 && Number(str[i]) <= 9) {
      while (Number(str[i]) >= 0 && Number(str[i]) <= 9) {
        currentNumber += str[i];
        i++;
      }
    }

    if (operations.hasOwnProperty(operation)) {
      if (operation === "+") {
        stack.push(Number(currentNumber));
      } else if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.floor(stack.pop() / currentNumber));
      }
    }

    operation = str[i];
    currentNumber = "";
  }

  if (stack.length > 0) {
    while (stack.length > 0) {
      sum += stack.pop();
    }
  }
  console.log(sum);

  return sum;
};

const calculateIIGpt = (str) => {
  if (str === null || str.length === 0) return 0;

  const stack = [];
  let result = 0;
  let currentNumber = 0;
  let operation = "+";

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (!isNaN(currentChar) && currentChar !== " ") {
      currentNumber = currentNumber * 10 + (currentChar.charCodeAt(0) - "0".charCodeAt(0));
      //         1.      0 + (49 - 48) => 1
      //         2.      1 * 10 => 10 + (52 - 48) => 14
      //         3.      14 * 10 => 140 + (53 - 48) => 145;
    }

    if ((isNaN(currentChar) && currentChar !== " ") || i === str.length - 1) {
      if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "+") {
        stack.push(currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.trunc(stack.pop() / currentNumber));
      }

      operation = currentChar;
      currentNumber = 0;
    }
  }

  while (stack.length !== 0) {
    result += stack.pop();
  }

  return result;
};

calculateIIGpt("145 + 3 / 2");

const basicCalculator = (str) => {
  //hard leetcode question
  if (str === null || str.length === 0) return 0;

  let result = 0;
  let currentNumber = 0;
  let sign = 1;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (!isNaN(currentChar) && currentChar !== " ") {
      currentNumber = currentNumber * 10 + (currentChar.charCodeAt(0) - "0".charCodeAt(0));
    } else if (currentChar === "+" || currentChar === "-") {
      result += sign * currentNumber;
      sign = currentChar === "-" ? -1 : 1;
      currentNumber = 0;
    } else if (currentChar === "(") {
      let j = i;
      let brackets = 1;
      while (brackets > 0) {
        j++;
        if (str[j] === "(") brackets++;
        if (str[j] === ")") brackets--;
      }

      currentNumber = basicCalculator(str.substring(i + 1, j));
      i = j;
    }
  }
  return result + sign * currentNumber;
};
// console.log("basic calculator: ", basicCalculator("(1+(4+5+2)-3)+(6+8)"));

const calculateIII = function (str) {
  if (str === null || str.length === 0) return 0;

  const stack = [];
  let currentNumber = 0;
  let operation = "+";

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar >= "0" && currentChar <= "9") {
      currentNumber = currentNumber * 10 + (currentChar.charCodeAt(0) - "0".charCodeAt(0));
    }

    if (currentChar === "(") {
      let j = i;
      let brackets = 1;
      while (brackets > 0) {
        j++;
        if (str[j] === "(") brackets++;
        if (str[j] === ")") brackets--;
      }

      currentNumber = calculateIII(str.substring(i + 1, j));
      i = j;
    }

    if (((currentChar < "0" || currentChar > "9") && currentChar !== " ") || i === str.length - 1) {
      if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "+") {
        stack.push(currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.trunc(stack.pop() / currentNumber));
      }
      operation = currentChar;
      currentNumber = 0;
    }
  }

  let result = 0;
  while (stack.length !== 0) {
    result += stack.pop();
  }

  return result;
};

const isAnagramI = (str, t) => {
  if (str.length !== t.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = counter[str[i]] ?? 0;
    counter[str[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (counter.hasOwnProperty(t[i])) {
      counter[t[i]]--;
    } else {
      return false;
    }
  }
  console.log(counter);

  return Object.values(counter).every((el) => el === 0);
};

// console.log(isAnagramI("anaagram", "naggaram"));

const groupAnagramsII = (strs) => {
  const obj = {};

  for (let str of strs) {
    const counter = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      counter[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = counter.toString();

    if (obj.hasOwnProperty(key)) {
      obj[key].push(str);
    } else {
      obj[key] = [str];
    }
  }

  return Object.values(obj);
};

// groupAnagramsII(["eat", "tea", "tan", "ate", "nat", "bat"]);

class FileSystem {
  constructor() {
    this.root = new Directory();
  }

  ls(path) {
    let t = this.root;
    const files = [];

    if (path !== "/") {
      const d = path.split("/");

      for (let i = 1; i < d.length - 1; i++) {
        t = t.dirs.get(d[i]);
      }

      if (t.files.has(d[d.length - 1])) {
        files.push(d[d.length - 1]);
        return files;
      } else {
        t = t.dirs.get(d[d.length - 1]);
      }
    }

    files.push(...Array.from(t.dirs.keys()), ...Array.from(t.files.keys()));
    files.sort();
    return files;
  }

  mkdir(path) {
    let t = this.root;
    const d = path.split("/");
    for (let i = 1; i < d.length; i++) {
      if (!t.dirs.has(d[i])) {
        t.dirs.set(d[i], new Directory());
      }
      t = t.dirs.get(d[i]);
    }
  }

  addContentToFile(filePath, content) {
    let t = this.root;
    const d = filePath.split("/");
    for (let i = 1; i < d.length - 1; i++) {
      t = t.dirs.get(d[i]);
    }
    t.files.set(d[d.length - 1], (t.files.get(d[d.length - 1]) || "") + content);
  }

  readContentFromFile(filePath) {
    let t = this.root;
    const d = filePath.split("/");
    for (let i = 1; i < d.length - 1; i++) {
      t = t.dirs.get(d[i]);
    }

    return t.files.get(d[d.length - 1]);
  }
}

class Directory {
  constructor() {
    this.dirs = new Map();
    this.files = new Map();
  }
}

const fs = new FileSystem();

// fs.mkdir("/a/b/c");
// fs.addContentToFile("/a/b/c/file", "hello");
// console.log(fs.ls("/"));
// console.log(fs.ls("/a/b/c"));
// console.log(fs.readContentFromFile("/a/b/c/file"));

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current != null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

const topKFrequent = (nums, k) => {
  const counter = new Map();
  const buckets = [];
  const result = [];

  for (let n of nums) {
    if (counter.has(n)) {
      counter.set(n, counter.get(n) + 1);
    } else {
      counter.set(n, 1);
    }
  }

  // console.log(counter);

  for (let i = 0; i <= nums.length; i++) {
    buckets[i] = [];
  }

  counter.forEach((freq, num) => {
    buckets[freq].push(num);
  });

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result;
};

//console.log(topKFrequent([1, 2, 3, 4, 5, "1", true, "2"], 1));

const targetElementFrequency = (nums, target, counter = new Map()) => {
  for (let n of nums) {
    if (Array.isArray(n)) {
      targetElementFrequency(n, target, counter);
    } else {
      if (counter.has(n)) {
        counter.set(n, counter.get(n) + 1);
      } else {
        counter.set(n, 1);
      }
    }
  }

  return counter.get(target);
};

// console.log(targetElementFrequency([1, 2, 3, "🐶", [1, "🐶", ["🐶"], 2], 5, "1", "🐶", "2"], "🐶"));

const champagneTower = (poured, query_row, query_glass) => {
  const tower = Array.from({ length: 40 }, (_, k) => Array(k + 1).fill(0.0));

  tower[0][0] = poured;

  for (let row = 0; row <= query_row; row++) {
    for (let col = 0; col <= row; col++) {
      const overflow = tower[row][col] - 1.0;

      if (overflow > 0) {
        tower[row + 1][col] += overflow / 2; //left child
        tower[row + 1][col + 1] += overflow / 2; //right child
        tower[row][col] = 1;
      }
    }
  }

  console.log(tower);

  return Math.min(1, tower[query_row][query_glass]);
};

//console.log(champagneTower(10, 33, 17));

const decodeString = (str) => {
  function decodeSubstring(startIndex) {
    let result = "";
    let num = 0;
    let i = startIndex;

    while (i < str.length) {
      const char = str[i];

      if (char >= "0" && char <= "9") {
        // Building the number (k)
        num = num * 10 + Number(char);
      } else if (char === "[") {
        // Find the matching closing bracket and decode the enclosed substring
        let bracketCount = 1;
        let j = i + 1;
        while (bracketCount > 0) {
          if (str[j] === "[") bracketCount++;
          else if (str[j] === "]") bracketCount--;
          j++;
        }

        // Recursively decode the enclosed substring
        const enclosed = decodeSubstring(i + 1, j - 1);
        result += enclosed.repeat(num);
        i = j - 1;
        num = 0;
      } else if (char === "]") {
        break;
      } else {
        result += char;
      }
      i++;
    }

    return result;
  }

  return decodeSubstring(0);
};

//console.log(decodeString("2[abc]3[cd]ef"));

const scoreOfParantheses = (str) => {
  if (str.length === 2) {
    return 1;
  }

  const stack = [0];

  for (let char of str) {
    if (char === "(") {
      stack.push(0);
    } else {
      let v = stack.pop();
      let w = stack.pop();

      stack.push(w + Math.max(2 * v, 1));
    }
  }

  return stack.pop();
};

//console.log(scoreOfParantheses("()()((()))"));

const kthLargestNumber = (nums, k) => {
  nums.sort((a, b) => a - b);

  return nums[nums.length - k];
};

// console.log(kthLargestNumber([], 3816));

const backspaceCompare = (s, t) => {
  const helperFunc = (str) => {
    const stack = [];

    for (let c of str) {
      if (c !== "#") {
        stack.push(c);
      } else if (stack.length !== 0) {
        stack.pop();
      }
      console.log(stack);
    }
    return stack.join("");
  };

  const ret1 = helperFunc(s);
  const ret2 = helperFunc(t);

  return ret1 === ret2;
};

//console.log(backspaceCompare("ccab###", "dcc##d#"));

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      if (this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val);
      }
    }
  }

  pop() {
    const el = this.stack.pop();

    if (el === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
