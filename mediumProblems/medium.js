//Divide and Conquer
//Backtracking
//Window Slider
//Two Pointer

// -> If we are dealing with top/maximum/minimum/closest 'K' elements among 'N' elements, we will be using a Heap.

// -> If the given input is a sorted array or a list, we will either be using Binray Search or the Two Pointers strategy.

// -> If we need to try all combinations (or permutations) of the input, we can either use Backtracking or Breadth First Search.

//Before jumping to another topic, make sure to understand fully the pattern
//Start with easy and medium
//Dont spend more than 30 mins on EASY
//Dont spend more than 1 hour on MEDIUM

//Learn from the solutions!

//Revisit solutions

//Topics to focus on
//Binary Search, Two Pointers, Binary Tree,
//Backtracking, DFS, BFS, Graph, Dynamic Programming

///////////////////////////////////////////////////////
//////////////TREE, BST, DFS, BFS/////////////////////
class treeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//IsSymmetric
const isSymmetric = function (root) {
  return isMirror(root, root);
};

function isMirror(n1, n2) {
  if (n1 === null && n2 === null) return true;

  if (n1 === null || n2 === null) return false;

  return n1.val === n2.val && isMirror(n1.right, n2.left) && isMirror(n1.left, n2.right);
}

//Search BST
var searchBST = function (root, val) {
  if (root === null) return null;

  if (root.val === val) return root;

  if (val > root.val) {
    return searchBST(root.right, val);
  } else if (val < root.val) {
    return searchBST(root.left, val);
  }
};

// Invert Tree
var invertTree = function (root) {
  if (root === null) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

var getLonelyNodes = function (root) {
  const arr = [];

  lonelyNodes(root, arr);

  return arr;
};

function lonelyNodes(node, arr) {
  if (node === null) return;

  if (node.left !== null && node.right === null) {
    arr.push(node.left.val);
  } else if (node.left === null && node.right !== null) {
    arr.push(node.right.val);
  }

  helper(node.left, arr);
  helper(node.right, arr);
}

//Preorder Traversal
const preorderTraversal = function (root) {
  const arr = [];

  helper(root, arr);
  return arr;
};

//Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
// binary search tree.
var sortedArrayToBST = function (nums) {
  this.nums = nums;
  return helper(0, nums.length - 1);

  function helper(left, right) {
    if (left > right) return null;

    let p = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[p]);
    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);
    return root;
  }
};

function preorder(node, arr) {
  if (node === null) return;

  arr.push(node.val);

  preorder(node.left, arr);
  preorder(node.right, arr);
}

var evaluateTree = function (root) {
  if (root === null) return;

  if (root.val === 0) {
    return false;
  } else if (root.val === 1) {
    return true;
  } else if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  } else if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
};

//In order Traversal
const inorderTraversal = function (root) {
  const arr = [];
  inorder(root, arr);
  return arr;
};

function inorder(node, arr) {
  if (node !== null) {
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
  }
}

//Postorder Traversal
const postorderTraversal = function (root) {
  const arr = [];
  postorder(root, arr);
  return arr;
};

function postorder(node, arr) {
  if (node === null) return;

  postorder(node.left, arr);
  postorder(node.right, arr);
  arr.push(node.val);
}

////////////////////////////////////////////////

const titleToNumber = (columnTitle) => {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - 64;
    console.log(columnTitle.charCodeAt(i));
    console.log("charcode: " + charCode);

    result = result * 26 + charCode;
  }

  return result;
};

const convertToTitle = (columnHeader) => {
  let result = "";
  while (columnHeader > 0) {
    columnHeader--; // Decrement columnNumber by 1 to get 0-based index
    const charCode = columnHeader % 26; // Get the remainder when dividing by 26
    result = String.fromCharCode(65 + charCode) + result; // Add the character to the left of the result
    columnHeader = Math.floor(columnHeader / 26); // Update columnNumber by dividing by 26 and discarding the remainder
  }
  return result;
};

//console.log(convertToTitle(701));

//console.log(titleToNumber('ZY'));

const isMajorityElement = (nums, target) => {
  //   let count = 0;
  //   let pos = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //       pos = i;
  //       while (nums[pos] === target) {
  //         count++;
  //         pos++;
  //         if (count > nums.length / 2) return true;
  //       }
  //       break;
  //     }
  //   }

  //   return false;

  let mid = Math.floor(nums.length / 2);

  let count = 1;

  if (target === nums[mid]) {
    let left = mid - 1;
    let right = mid + 1;

    while (nums[left] === target || nums[right] === target) {
      if (nums[left] === target) {
        count++;
      }

      if (nums[right] === target) {
        count++;
      }
      left--;
      right++;

      if (count > nums.length / 2) return true;
    }
  } else {
    return false;
  }

  return false;
};

//console.log(isMajorityElement([10, 100, 101, 101], 101));

const majorityElement = (nums) => {
  //   const obj = {};

  //   for (const el of nums) {
  //     if (obj.hasOwnProperty(el)) {
  //       obj[el]++;
  //     } else {
  //       obj[el] = 1;
  //     }
  //     if (obj[el] > nums.length / 2) return el;
  //   }

  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
    console.log(count);
    console.log("candidate: " + candidate);
  }

  return candidate;
};

// console.log(
//   'majority element: ' + majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1, 2])
// );

//need to revise this problem
const generate = (numRows) => {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result.push(row);
  }

  return result;
};

//console.log(generate(5));

const letterCombination = (digits) => {
  //need to use backtracking
  if (digits.length === 0) {
    return [];
  }

  const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const combinations = [];

  if (digits.length == 1) {
    return digitMap[digits];
  }
};

//console.log(letterCombination('234'));

const intToRoman = (num) => {
  // const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // let roman = '';

  // for (let i = 0; i < values.length; i++) {
  //   while (num >= values[i]) {
  //     roman += numerals[i];
  //     num -= values[i];
  //   }
  // }

  // return roman;

  const obj = {
    0: {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VII",
      9: "IX",
    },
    1: {
      1: "X",
      2: "XX",
      3: "XXX",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      4: "XL",
      5: "L",
      9: "XC",
    },
    2: {
      1: "C",
      2: " CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    },

    3: { 1: "M", 2: "MM", 3: "MMM" },
  };

  let roman = "";

  //1494 => MCDXCIV
  //1234 => MCCXXXIV
  //49 => XLIX
  //9944 => IXCMXLIV
  //3484 = MMMCDLXXXIV
  //3999 = MMMCMXCIX
  let strNum = num + "";
  let count = 0;

  for (let i = strNum.length - 1; i >= 0; i--) {
    const a = obj[count];
    console.log(a, count, strNum[i]);

    if (strNum[i] !== "0") {
      roman += a[strNum[i]] + " ";
    }
    count++;
  }

  return roman.split(" ").reverse().join("");
};

//intToRoman(3999);

const longestCommonPrefix = (strs) => {
  if (strs.length === 1) {
    return strs[0];
  }

  const obj = {};

  const str = strs[0];
  let prefixes = "";
  let i = 0;

  for (const char of str) {
    prefixes += char;

    obj[prefixes] = i;
    i++;
  }
  let longestPrefix = "";
  let length = -1;
  for (let i = 1; i < strs.length; i++) {
    let prefix = "";
    let noPrefix = false;
    for (let char of strs[i]) {
      prefix += char;

      if (obj.hasOwnProperty(prefix)) {
        longestPrefix = prefix;
        length = obj[prefix];
      } else {
        noPrefix = true;
        break;
      }
    }
  }

  return longestPrefix;
};

//console.log(longestCommonPrefix(['a', 'a', 'b']));

const convert = (s, numRows) => {
  if (s.length === 1) {
    return s;
  }

  if (numRows === 1) {
    return s;
  }

  const matrix = create2DArray(numRows, Math.ceil(s.length / (2 * numRows - 2)) * (numRows - 1));

  let row = 0;
  let col = 0;
  let index = 0;
  let str = "";
  let direction = 1;
  let startCol = 0;
  while (index < s.length) {
    matrix[row][col] = index;

    row += direction;
    col += startCol;

    if (row === matrix.length - 1) {
      direction = -1;
      startCol = 1;
    } else if (row === 0) {
      startCol = 0;
      direction = 1;
    }

    index++;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== undefined && typeof matrix[i][j] === "number") {
        str += s[matrix[i][j]];
      }
    }
  }

  return str;
};

function create2DArray(rows, cols) {
  let myArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    myArray[i] = new Array(cols);
  }
  return myArray;
}

//console.log(convert('PAYPALISHIRING', 4));

const isPalindrome = (s) => {
  let j = s.length - 1;
  let i = 0;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const longestPalindrome = (s) => {
  //TC O(n^3);
  let max = 0;
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];

      if (isPalindrome(str)) {
        if (str.length > max) {
          max = str.length;
          longest = str;
        }
      }
    }
  }

  return longest;
};
const longestPalindromeLinear = (s) => {
  if (s.length === 0) return "";

  let maxLen = 1;
  let start = 0;
  const dp = Array.from({ length: s.length }, () => new Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLen = 2;
    }
  }

  for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i <= s.length - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLen = len;
      }
    }
  }

  return s.slice(start, start + maxLen);
};

const nums = [3, 1, 3, 4, 2];

const findDuplicate = (nums) => {
  //25% runtime
  //22 cache
  //Time O(n)
  //Space O(n)
  const obj = {};

  for (const n of nums) {
    if (!obj.hasOwnProperty(n)) {
      obj[n] = true;
    } else {
      return n;
    }
  }
};

const findDuplicateF = (nums) => {
  //65% runtime
  //96% cache
  //Time O(n)
  //Space O(1)
  while (nums[0] != nums[nums[0]]) {
    const nxt = nums[nums[0]];
    nums[nums[0]] = nums[0];
    nums[0] = nxt;
  }
  return nums[0];
  //testing
};

findDuplicateF(nums);

/// currying

const compose = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);

const result = doubleThenSquare(5);

const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
};

const fn3 = (a, b, c) => {
  return a + b + c;
};

const curriedSum = curry(fn3);

const res3 = curriedSum(1, 2)(4);

const array1 = [
  { id: "1", name: "Baia" },
  { id: "1", name: "Baia" },
  { id: "2", name: "Naza" },
];

const array2 = [
  [1, 2, 3],
  [1, 2, 5],
  [1, 5, 9],
];

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foo4 = function (item) {
  return item.name;
};

const foo5 = function (list) {
  return String(list[1]);
};

const foo6 = function (n) {
  return String(n > 5);
};

Array.prototype.groupBy = function (fn) {
  const returnObject = {};
  for (const item of this) {
    const key = fn(item);
    if (key in returnObject) {
      returnObject[key].push(item);
    } else {
      returnObject[key] = [item];
    }
  }
  return returnObject;
};

Array.prototype.groupByRec = function (fn) {
  if (this.length === 0) {
    return {};
  }

  const ans = {};
  let index = 0;
  const recursiveFunc = function (arr, el) {
    if (index === arr.length) {
      return;
    }
    const groupBy = fn(el);

    if (ans.hasOwnProperty(groupBy)) {
      ans[groupBy].push(el);
    } else {
      ans[groupBy] = [el];
    }
    index++;
    return recursiveFunc(arr, arr[index]);
  };

  recursiveFunc(this, this[0]);

  return ans;
};

const arr5 = [{}, [], 1, 2, 3, true, false, null, {}, [1, 2, 3], "hi", 1, 2, 3];

const foo12 = (item) => {
  return typeof item;
};

const arr7 = [[1], [1], [1], [2], [2], [2], [1, 2]];
const foo7 = (list) => {
  return String(list.length);
};

const res = arr5.groupByRec(foo12);

const debounce = function (fn, t) {
  let timerId;

  return function (...args) {
    //we dont have to check, because calling clearTimeout on undefined timerId will do nothing

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      return fn(...args);
    }, t);
  };
};

// const foo13 = (a, b, c) => {
//   console.log("Will be exucuted with delayed time", a, b, c);
// };

// const debouncedFunc = debounce(foo13, 150);

// setTimeout(() => {
//   debouncedFunc(1, 2, 3);
// }, 50);

// setTimeout(() => {
//   debouncedFunc(4, 5, 6);
// }, 300);

// setTimeout(() => {
//   debouncedFunc(5, 5, 6);
// }, 300);

const jsonStringify = function (object) {
  //console.log(JSON.stringify(object));
  if (object === null) {
    return "null";
  }

  if (Array.isArray(object)) {
    const elements = object.map((el) => jsonStringify(el));
    return `[${elements.join(",")}]`;
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);

    const keyValuePairs = keys.map((key) => {
      return `"${key}":${jsonStringify(object[key])}`;
    });

    return `{${keyValuePairs.join(",")}}`;
  }

  if (typeof object === "string") {
    return `"${object}"`;
  }

  return String(object);
};

const obj = { key: { a: 1, b: [{}, null, "Hello"] } };

// console.log(jsonStringify(obj));

const fnAsync = async (n) => {
  await new Promise((res) => setTimeout(res, 2000));
  return n * n;
};

const errorFn = () => {
  throw "Error";
};

const t = 1000;

const timeLimit = (fn, t) => {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      try {
        const res = await fn(...args);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };
};

const limited = timeLimit(errorFn, t);

let result1;

try {
  const res = await limited(5);
  result1 = { resolved: res };
} catch (err) {
  result1 = { rejected: err };
}

// console.log(result1);

// ---LRU (Least recently used)Cache Implementation

class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (this.map.has(key)) {
      let val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    }
    return -1;
  }

  put(key, value) {
    if (this.get(key) === -1) {
      if (this.capacity === this.map.size) {
        for (let keyVal of this.map) {
          this.map.delete(keyVal[0]);
          break;
        }
      }
    }

    this.map.set(key, value);
  }

  getMemory() {
    return this.map;
  }
}

// const cache = new LRUCache(4);

// cache.put("1", "BMW");
// cache.put("2", "Lexus");
// cache.put("3", "Toytoa");
// cache.put("4", "Ford");

// setTimeout(() => {
//   cache.get("1");
// }, 500);

// setTimeout(() => {
//   cache.get("2");

//   cache.getMemory();
// }, 1000);

// setTimeout(() => {
//   cache.get("4");
// }, 2000);

// setTimeout(() => {
//   cache.put("5", "Ford Mustang");
// }, 3000);

// cache.getMemory();

class DoublyLinkedList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCacheDoublyLinkedList {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new DoublyLinkedList(null, null);
    this.tail = new DoublyLinkedList(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.remove(node);
      this.add(node);
      return node.value.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    } else if (this.map.size === this.capacity) {
      this.map.delete(this.tail.prev.key);
      this.remove(this.tail.prev);
    }
    const newNode = new DoublyLinkedList(key, value);
    this.add(newNode);
    this.map.set(key, newNode);
  }

  add(node) {
    const headNext = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = headNext;
    headNext.prev = node;
  }

  remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  printCache() {
    console.log(this.head.next);
  }
}

const cache = new LRUCacheDoublyLinkedList(3);

// cache.put("1", "BMW");
// cache.put("2", "Lexus");
// cache.put("3", "Toytoa");
// cache.get("1");
// cache.get("2");

// cache.printCache();

class BinaryTree {
  constructor(val, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
