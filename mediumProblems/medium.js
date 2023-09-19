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

const findDuplicate = (nums) => {};
