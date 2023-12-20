//arrays&hashing

const containsDuplicates = (candidates) => {
  const counter = {};

  for (const n of candidates) {
    counter[n] = counter[n] ?? 0;
    counter[n]++;
    if (counter[n] > 1) {
      return true;
    }
  }

  return false;
};

//console.log(containsDuplicates([1, 1, 1, 3, 3, 3, 4, 2, 4, 2]));

const topKFrequent = (candidates, k) => {
  const counter = new Map();
  const buckets = [];
  const result = [];

  for (let n of candidates) {
    if (counter.has(n)) {
      counter.set(n, counter.get(n) + 1);
    } else {
      counter.set(n, 1);
    }
  }

  for (let i = 0; i <= candidates.length; i++) {
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

const productExceptSelf = (candidates) => {
  //too slow
  const result = [];

  let prevRes = 1;
  let sum = 1;

  let i = 0;
  while (i < candidates.length) {
    for (let j = i + 1; j < candidates.length; j++) {
      sum *= candidates[j];
    }

    let res = sum * prevRes;

    if (res === 0) {
      res = 0;
    }

    result.push(res);
    sum = 1;
    prevRes *= candidates[i];
    i++;
  }

  return result;
};

const productExceptSelfLinear = (candidates) => {
  const result = new Array(candidates.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < candidates.length; i++) {
    result[i] = leftProduct;
    leftProduct *= candidates[i];
  }

  let rightProduct = 1;
  for (let i = candidates.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= candidates[i];
  }

  return result;
};

// console.log(productExceptSelfLinear([1, 2, 3, 4]));

const isValidSudoku = (board) => {
  const N = 9;

  const rows = Array.from({ length: N }, () => new Set());
  const cols = Array.from({ length: N }, () => new Set());
  const boxes = Array.from({ length: N }, () => new Set());

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const val = board[r][c];

      if (val === ".") {
        continue;
      }

      if (rows[r].has(val)) {
        return false;
      }

      rows.add(val);

      if (cols[c].has(val)) {
        return false;
      }

      cols.add(val);

      const idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[idx].has(val)) {
        return false;
      }

      boxes[idx].add(val);
    }
  }

  return true;
};

const encode = (strs) => {
  let encodedStr = "";
  let len = 0;
  for (const s of strs) {
    for (let i = 0; i < s.length; i++) {
      if (s.length === 0) {
        break;
      }

      let charCode = s[i].charCodeAt(0) + "c".charCodeAt(0);

      encodedStr += String.fromCharCode(charCode);
    }

    encodedStr += len !== strs.length - 1 ? "#" : "";
    len++;
  }

  return encodedStr;
};

const encodedStr = encode([""]);

// console.log(encodedStr);

const decode = (str) => {
  const decodedArray = [];
  const encodedArray = str.split("#");

  for (const encoded of encodedArray) {
    let decoded = "";
    for (let i = 0; i < encoded.length; i++) {
      if (encoded.length === 0) {
        decodedArray.push("");
        break;
      }
      const charCode = encoded[i].charCodeAt(0) - "c".charCodeAt(0);
      decoded += String.fromCharCode(charCode);
    }
    decodedArray.push(decoded);
  }

  return decodedArray;
};

// console.log(decode(encodedStr));

const longestConsecutive = (candidates) => {
  const set = new Set();

  for (const n of candidates) {
    set.add(n);
  }

  let longestStreak = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.maxarea(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};

// console.log(longestConsecutive([1, 2, 0, 1]));

const isPalindrome = (s) => {
  let str = "";

  for (let ch of s) {
    const char = ch.toLowerCase();

    if ((char >= "0" && char <= "9") || (char >= "a" && char <= "z")) {
      str += char;
    }
  }

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

const threeSumFaster = (candidates) => {
  const res = [];
  candidates.sort((a, b) => a - b);

  for (let i = 0; i < candidates.length; i++) {
    if (i === 0 || (i > 0 && candidates[i] !== candidates[i - 1])) {
      let left = i + 1,
        right = candidates.length - 1,
        target = -candidates[i];
      while (left < right) {
        const sum = candidates[left] + candidates[right];

        if (sum === target) {
          res.push([candidates[i], candidates[left], candidates[right]]);
          while (left < right && candidates[left] === candidates[left + 1]) left++;
          while (left < right && candidates[right] === candidates[right - 1]) right--;

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

  return res;
};

const maxArea = (height) => {
  let maxarea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const min = Math.min(height[left], height[right]);
    const x = right - left;

    const container = min * x;

    if (container > maxarea) {
      maxarea = container;
    }

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxarea;
};

//console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));

const trap = (height) => {};

const clementQuestion = (lists) => {
  const arrOfBuilds = [];

  for (const list of lists) {
    //use binary search
    let green = 0;
    const total = list.length;
    for (let i = 0; i < total; i++) {
      if (list[i] === true) {
        green++;
      }
    }

    const percentOfGreen = Math.trunc((100 * green) / total);

    arrOfBuilds.push(percentOfGreen);
  }
  let maxConsecutive = 0;

  for (let i = 1; i < arrOfBuilds.length; i++) {
    if (arrOfBuilds[i] < arrOfBuilds[i - 1]) {
      let currentMax = 1;

      while (arrOfBuilds[i] < arrOfBuilds[i - 1]) {
        currentMax++;
        i++;
      }
      if (currentMax > maxConsecutive) {
        maxConsecutive = currentMax;
      }
    }
  }

  console.log(arrOfBuilds);

  return maxConsecutive;
};

const list = [
  [true, true, true, false, false],
  [true, true, true, true, false],
  [true, true, true, true, true, true, true, false, false, false],
  [true, true, true, true, true, false, false, false, false],
  [true, false, false, false, false, false],
  [true, true, true, true, true, true, true, true, true, true, true, true, false],
  [true, false],
  [true, true, true, true, false, false],
];

// console.log(clementQuestion(list));

////////////////////////------------------BACKTRACKING/RECURSIVE/DFS------------------//////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Pattern
//  backtrack case
//  base case
//  recusrive case

const letterCasePermutation = (candidates) => {
  const res = [];

  DFS(0, candidates, [], res);

  return res;
};

const DFS = (i, candidates, slate, result) => {
  //base case
  if (i === candidates.length) {
    result.push(slate.join(""));
    return;
  }

  //dfs recursive case
  const char = candidates[i];
  if (!isNaN(char)) {
    slate.push(char);
    DFS(i + 1, candidates, slate, result);
    slate.pop();
  } else {
    slate.push(char.toUpperCase());
    DFS(i + 1, candidates, slate, result);
    slate.pop();

    slate.push(char.toLowerCase());
    DFS(i + 1, candidates, slate, result);
    slate.pop();
  }
};
// console.log(letterCasePermutation("a1b2"));

const subsets = (candidates) => {
  const res = [];

  const dfs = (i, candidates, slate) => {
    if (i === candidates.length) {
      res.push(slate.slice());
      return;
    }

    const num = candidates[i];
    //exclude
    dfs(i + 1, candidates, slate);

    //include
    slate.push(num);
    dfs(i + 1, candidates, slate);
    slate.pop();
  };

  dfs(0, candidates, []);

  return res;
};

// console.log(subsets([1, 2, 3]));

const subsetsII = (candidates) => {
  const res = {};
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, slate) => {
    if (i === candidates.length) {
      if (!res.hasOwnProperty(slate)) {
        res[slate] = slate.slice();
      }
      return;
    }

    dfs(i + 1, candidates, slate);

    slate.push(candidates[i]);

    dfs(i + 1, candidates, slate);

    slate.pop();
  };

  dfs(0, candidates, []);

  return Object.values(res);
};

// console.log(subsetsII([1, 2, 2]));

const permute = (candidates) => {
  const res = [];

  const dfs = (i, candidates) => {
    //base case

    if (i === candidates.length) {
      res.push(candidates.slice());
      return;
    }

    //dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      dfs(i + 1, candidates);
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]]; // reswapping
    }
  };

  dfs(0, candidates);

  return res;
};

// console.log(permute([1, 2, 3]));

const permuteII = (candidates) => {
  const res = [];

  const dfs = (i, candidates) => {
    //base case
    if (i === candidates.length) {
      res.push(candidates.slice());
      return;
    }

    //recursive case
    const hash = {};
    for (let j = i; j < candidates.length; j++) {
      if (hash[candidates[j]]) continue;
      hash[candidates[j]] = true;
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      dfs(i + 1, candidates);
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
  };

  dfs(0, candidates);

  return res;
};

// console.log(permuteII([1, 1, 2]));

const combinationSumIII = (k, n) => {
  const res = [];
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const dfs = (i, candidates, k, n, slate) => {
    //backtracking case
    if (n < 0) return;

    //base case
    if (slate.length === k) {
      if (n === 0) {
        res.push(slate.slice());
      }
      return;
    }
    //recusive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j + 1, candidates, k, n - candidates[j], slate);
      slate.pop();
    }
  };

  dfs(0, candidates, k, n, []);

  return res;
};

//console.log(combinationSumIII(3, 7));

const combinationSumII = (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, target, slate) => {
    //backtracking case
    if (target < 0) {
      return;
    }

    //base case
    if (target === 0) {
      if (target === 0) {
        res.push(slate.slice());
      }
      return;
    }

    //recursive case;

    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      slate.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfs(0, candidates, target, []);

  return res;
};

//console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));

const combinationSumI = (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, target, slate) => {
    //backtracking case
    if (target < 0) {
      return;
    }

    //base case
    if (target === 0) {
      res.push(slate.slice());
      return;
    }

    //recursive case;

    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfs(0, candidates, target, []);

  return res;
};

// console.log(combinationSumI([2, 3, 6, 7], 7));

const wordSearch = (board, word) => {
  const ROWS = board.length;
  const COLS = board[0].length;

  const dfs = (row, col, word, index) => {
    if (index >= word.length) {
      return true;
    }

    if (row < 0 || row === ROWS || col < 0 || col === COLS || board[row][col] !== word[index]) {
      return false;
    }

    let ret = false;
    board[row][col] = "#";
    console.log(board);
    const rowOffsets = [0, 1, 0, -1];
    const colOffest = [1, 0, -1, 0];
    for (let d = 0; d < 4; d++) {
      ret = dfs(row + rowOffsets[d], col + colOffest[d], word, index + 1);

      if (ret) {
        break;
      }
    }
    board[row][col] = word[index];
    return ret;
  };

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (dfs(row, col, word, 0)) {
        return true;
      }
    }
  }

  return false;
};
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";

//console.log(wordSearch(board, word));

const partition = (s) => {
  const res = [];

  const dfs = (i, input, slate) => {
    //base case
    if (i === input.length) {
      res.push(slate.slice());
      return;
    }

    for (let j = i; j < input.length; j++) {
      if (isPalindrome(input, i, j)) {
        slate.push(input.slice(i, j + 1));
        dfs(j + 1, input, slate);
        slate.pop();
      }
    }
  };

  const isPalindrome = (s, i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };

  dfs(0, s, []);

  return res;
};

// console.log(partition("aab"));

const generateParenthesis = (n) => {
  const res = [];

  const dfs = (i, n, slate, open, close) => {
    //bactracking case
    if (open > n || close > open) {
      return;
    }

    //base case
    if (i === n * 2) {
      if (slate.length === n * 2) {
        res.push(slate.join(""));
      }

      return;
    }

    //recursive case

    slate.push("(");
    dfs(i + 1, n, slate, open + 1, close);
    slate.pop();

    slate.push(")");
    dfs(i + 1, n, slate, open, close + 1);
    slate.pop();
  };

  dfs(0, n, [], 0, 0);

  return res;
};

//console.log(generateParenthesis(5));

const targetSum = (nums, target) => {
  let count = 0;
  const dfs = (i, nums, target, runningSum) => {
    //base case
    if (i === nums.length) {
      if (target === runningSum) {
        count++;
      }

      return;
    }
    //recursive case
    //plus
    runningSum += nums[i];
    dfs(i + 1, nums, target, runningSum);
    runningSum -= nums[i];

    //minus
    runningSum -= nums[i];
    dfs(i + 1, nums, target, runningSum);
    runningSum += nums[i];
  };

  dfs(0, nums, target, 0);

  return count;
};

// console.log(targetSum([1, 1, 1, 1, 1], 3));

const letterCombinations = (digits) => {
  if (digits.length === 0) return [];
  const res = [];
  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (i, digits, slate) => {
    //base case
    if (i === digits.length) {
      res.push(slate.join(""));
      return;
    }

    let chars = letters[digits[i]];

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);

  return res;
};

// console.log(letterCombinations("235"));

const fib = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n];
  }

  //base case
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }

  //recrusive case
  memo[n] = fib(n - 1) + fib(n - 2);

  return memo[n];
};

// console.log(fib(10));

////////////////////////------------------GRAPHS/BFS(BREADTH FIRST SEARCH)-----------------//////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Pattern
//buildAdjList
//BFS traversal

const shortestPathWithObstacles = (grid, k) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const target = [rows - 1, cols - 1];

  if (k >= rows + cols - 2) {
    return rows + cols - 2; //manhattan distance
  }

  const createStepState = (steps, row, col, k) => {
    return { steps, row, col, k };
  };

  const stepStateToString = (stepState) => {
    return `${stepState.row} ${stepState.col} ${stepState.k}`;
  };

  const queue = [];
  const seen = new Set();

  const start = createStepState(0, 0, 0, k);
  queue.push(start);
  seen.add(stepStateToString(start));

  while (queue.length > 0) {
    const curr = queue.shift(); //removes first element in queue

    if (target[0] === curr.row && target[1] === curr.col) {
      return curr.steps;
    }

    const nextSteps = [
      [curr.row, curr.col + 1],
      [curr.row + 1, curr.col],
      [curr.row, curr.col - 1],
      [curr.row - 1, curr.col],
    ];

    for (const [nextRow, nextCol] of nextSteps) {
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
        continue;
      }

      const nextElimination = curr.k - grid[nextRow][nextCol];
      const newState = createStepState(curr.steps + 1, nextRow, nextCol, nextElimination);
      const newStateStr = stepStateToString(newState);

      if (nextElimination >= 0 && !seen.has(newStateStr)) {
        seen.add(newStateStr);
        queue.push(newState);
      }
    }
  }
  return -1;
};

const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 0],
];
const k = 1;
//console.log(shortestPathWithObstacles(grid, k));

const courseScheduleI = (numCourses, prerequisites) => {
  const buildAdjList = (n, edges) => {
    const adjList = Array.from({ length: n }, () => []);
    for (let edge of edges) {
      let [src, dest] = edge;
      adjList[src].push(dest);
    }
    return adjList;
  };

  const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;

        if (hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true;
      } else {
        if (depart[neighbor] === 0) return true;
      }
    }

    depart[node]++;
    return false;
  };

  const adjList = buildAdjList(numCourses, prerequisites);

  const visited = {};
  const arrive = Array.from({ length: numCourses }, () => 0);
  const depart = Array.from({ length: numCourses }, () => 0);

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
    }
  }

  return true;
};

//console.log(courseScheduleI(2, [[1, 0]]));

const courseScheduleII = (numCourses, prerequisites) => {
  const buildAdjList = (n, edges) => {
    const adjList = Array.from({ length: n }, () => []);
    for (let edge of edges) {
      let [src, dest] = edge;
      adjList[src].push(dest);
    }
    return adjList;
  };

  const hasCycleDFS = (node, adjList, visited, arrive, depart, topSort) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;

        if (hasCycleDFS(neighbor, adjList, visited, arrive, depart, topSort)) return true;
      } else {
        if (depart[neighbor] === 0) return true;
      }
    }

    depart[node]++;
    topSort.push(node);
    return false;
  };

  const adjList = buildAdjList(numCourses, prerequisites);

  const visited = {};
  const res = [];
  const arrive = Array.from({ length: numCourses }, () => 0);
  const depart = Array.from({ length: numCourses }, () => 0);

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      if (hasCycleDFS(vertex, adjList, visited, arrive, depart, res)) return [];
    }
  }

  return res;
};

// console.log(
//   courseScheduleII(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ])
// );
