//Neetcode 150
//Arrays and Hashing

const hasDuplicate = (nums) => {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, true);
    }
  }

  return false;
};

const twoSum = (nums, target) => {
  const map = new Map();

  let index = 0;
  for (const num of nums) {
    map.set(num, index);
    index++;
  }

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) {
      if (map.get(comp) !== i) {
        return [i, map.get(comp)];
      }
    }
  }
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const ch of s) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  for (const ch of t) {
    if (!map.has(ch)) {
      return false;
    } else {
      map.set(ch, map.get(ch) - 1);
    }
  }

  for (const count of map.values()) {
    if (count !== 0) return false;
  }

  return true;
};

const isAnagramImproved = (s, t) => {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  for (const val of count) {
    if (val !== 0) return false;
  }

  return true;
};

const groupAnagrams = (strs) => {
  const ans = {};

  for (const s of strs) {
    const count = Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");
    if (!ans[key]) {
      ans[key] = [];
    }

    ans[key].push(s);
  }

  return Object.values(ans);
};

const topKFrequent = (nums, k) => {
  let index = 0;

  const counts = {};
  for (const num of nums) {
    if (counts[num]) {
      counts[num].count++;
    } else {
      counts[num] = { count: 1, pos: index };
    }

    index++;
  }

  const arrOfCounts = Object.values(counts);

  arrOfCounts.sort((a, b) => b.count - a.count);

  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(nums[arrOfCounts[i].pos]);
  }

  return ans;

  // console.log(arrOfCounts);
};

const topKFrequentImproved = (nums, k) => {
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

const encode = (strs) => {
  let str = "";

  const seperator = "#";
  let j = 0;
  for (const word of strs) {
    let finalWord = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "#" || word[i] === "/") {
        finalWord += "/";
      }

      finalWord += word[i];
    }

    str += finalWord + seperator;
    j++;
  }

  return str;
};

const decode = (strs) => {
  let arrOfWords = [];

  let word = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "/") {
      i++;
      word += strs[i];
    } else if (strs[i] === "#") {
      arrOfWords.push(word);
      word = "";
    } else {
      word += strs[i];
    }
  }

  return arrOfWords;
};

const productExceptSelf = (nums) => {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        sum = sum * nums[j];
      }
    }

    ans.push(sum);
  }

  return ans;
};

const productExceptSelfImproved = (nums) => {
  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  const ans = new Array(n);

  //fill leftProducts array;
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = leftProducts[i] * rightProducts[i];
  }

  return ans;
};

const validSudoku = (board) => {
  const isValidRowCol = () => {
    const n = board.length;

    for (let i = 0; i < n; i++) {
      const mapRow = new Map();
      const mapCol = new Map();

      for (let j = 0; j < n; j++) {
        const cellRow = board[i][j];
        const cellCol = board[j][i];

        // Check rows
        if (cellRow !== ".") {
          if (mapRow.has(cellRow)) {
            return false;
          } else {
            mapRow.set(cellRow, true);
          }
        }

        // Check columns
        if (cellCol !== ".") {
          if (mapCol.has(cellCol)) {
            return false;
          } else {
            mapCol.set(cellCol, true);
          }
        }
      }
    }

    return true;
  };

  const isValid3x3 = (startRow, startCol) => {
    const map = new Map();

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = board[startRow + i][startCol + j];

        if (cell !== ".") {
          if (map.has(cell)) {
            return false;
          } else {
            map.set(cell, true);
          }
        }
      }
    }

    return true;
  };

  for (let row = 0; row < board.length; row += 3) {
    for (let col = 0; col < board[row].length; col += 3) {
      if (!isValid3x3(row, col)) {
        return false;
      }
    }
  }

  if (!isValidRowCol()) {
    return false;
  }

  return true;
};

// console.log(
//   validSudoku([
//     ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//     ["4", "9", ".", "5", ".", ".", ".", ".", "."],
//     [".", ".", "8", ".", ".", ".", ".", ".", "3"],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", ".", "2", ".", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

//2 solved

const longestConsecutive = (nums) => {
  if (nums.length == 0) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let longestStreak = 1;
  let currentStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      if (nums[i] == nums[i - 1] + 1) {
        currentStreak += 1;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }
  return Math.max(longestStreak, currentStreak);
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 0, -1]));

const validPalindrome = (s) => {
  const str = s.replace(/[^a-z0-9/gi]/gi, "").toLowerCase();

  let i = 0;
  let right = str.length - 1;

  while (i < right) {
    const leftChar = str[i];
    const rightChar = str[right];

    if (leftChar !== rightChar) {
      return false;
    }

    i++;
    right--;
  }

  return true;
};

// console.log(validPalindrome("Was it a car or a cat I saw?"));

const twoSum2 = (nums, target) => {
  let i = 0;
  let right = nums.length - 1;

  while (i < right) {
    const sum = nums[i] + nums[right];

    if (sum === target) {
      return [i + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      i++;
    }
  }
};

// console.log(twoSum2([1, 2, 3, 4], 3));

const threeSum = (nums) => {
  const arr = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        arr.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return arr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

const containerWithMostWater = (heights) => {
  let maxArea = 0;

  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const leftHeight = heights[l];
    const rightHeight = heights[r];

    const minHeight = Math.min(leftHeight, rightHeight);
    const base = r - l;

    const currentArea = base * minHeight;

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (leftHeight > rightHeight) {
      r--;
    } else {
      l++;
    }
  }

  return maxArea;
};

const trappingRainWater = (height) => {
  //T O(n)
  //S O(n)
  const maxLeft = [height[0]];
  const maxRight = [0];

  let currentLeftMax = maxLeft[0];
  for (let i = 1; i < height.length; i++) {
    currentLeftMax = Math.max(currentLeftMax, height[i - 1]);
    maxLeft.push(currentLeftMax);
  }

  let currentRightMax = maxRight[0];

  for (let i = height.length - 2; i >= 0; i--) {
    currentRightMax = Math.max(currentRightMax, height[i + 1]);

    maxRight.push(currentRightMax);
  }

  let right = height.length - 1;
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    const minHeight = Math.min(maxLeft[i], maxRight[right]);

    const water = minHeight - height[i];

    sum += water > 0 ? water : 0;

    right--;
  }

  return sum;
};

const trappingRainWaterConstantSpace = (height) => {
  if (!height || height.length === 0) return 0;
  let l = 0;
  let r = height.length - 1;

  let maxLeft = height[l];
  let maxRight = height[r];
  let res = 0;

  while (l < r) {
    if (maxLeft < maxRight) {
      l++;
      maxLeft = Math.max(maxLeft, height[l]);
      res += maxLeft - height[l];
    } else {
      r--;
      maxRight = Math.max(maxRight, height[r]);
      res += maxRight - height[r];
    }
  }
  return res;
};

// console.log(trappingRainWaterConstantSpace([1, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

const maxProfit = (prices) => {
  let maxProfit = 0;

  let right = 1;

  let minBuyPrice = prices[0];

  while (right < prices.length) {
    const profit = prices[right] - minBuyPrice;

    minBuyPrice = Math.min(minBuyPrice, prices[right]);

    maxProfit = Math.max(maxProfit, profit);

    right++;
  }

  return maxProfit;
};

// console.log(maxProfit([5, 1, 5, 6, 7, 1, 10]));

// const base64EncodedName = btoa("Baiastan");

// console.log(base64EncodedName);

// const decodedBase64 = atob(base64EncodedName);

// console.log(decodedBase64);

const validateParentheses = (s) => {
  const stack = [];

  const close = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const pop = stack.pop();

      if (ch !== close[pop]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

// console.log(validateParentheses("[(])"));
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);

    val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]);
    this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// const minStack = new MinStack();

// console.log(minStack);

// minStack.push(1);
// minStack.push(2);
// minStack.push(0);

// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin());

const evalRPN = (tokens) => {
  const operators = {
    "+": true,
    "-": true,
    "/": true,
    "*": true,
  };

  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    stack.push(token);

    if (operators[token]) {
      const popOperator = stack.pop();
      let string2 = stack.pop();
      let string1 = stack.pop();
      if (popOperator === "+") {
        let sum = +string2 + +string1;
        stack.push(sum + "");
      }

      if (popOperator === "-") {
        let sum = +string1 - +string2;
        stack.push(sum);
      }

      if (popOperator === "*") {
        let sum = +string2 * +string1;

        stack.push(sum);
      }

      if (popOperator === "/") {
        let sum = +string1 / +string2;
        stack.push(Math.trunc(sum));
      }
    }
  }

  return stack.pop();
};

const generateParenthesis = (n) => {
  const stack = [];
  const res = [];

  const backtrack = (openN, closedN) => {
    if (openN === closedN && openN === n && closedN === n) {
      const str = stack.join("");
      res.push(str);
      return;
    }

    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }

    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };
  backtrack(0, 0);

  return res;
};

const dailyTemperatures = (temps) => {
  //TC O(n^2)
  const result = [];
  for (let i = 0; i < temps.length; i++) {
    let days = 0;
    const dayTemp = temps[i];
    let isWarmExist = false;

    for (let j = i; j < temps.length; j++) {
      if (temps[j] > dayTemp) {
        result.push(days);
        isWarmExist = true;
        break;
      }
      days++;
    }

    if (!isWarmExist) {
      result.push(0);
    }
  }

  return result;
};

//  [1,   4,  1,  2,  1,  0,  0]

// const numIslands = (grid) => {};

// console.log(
//   numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ])
// );

// const foo = [].shift();

// console.log(foo);
