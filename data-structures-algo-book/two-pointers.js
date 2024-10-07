import { createLinkedList, printLinkedList } from "./utils.js";

//88
const mergeSortedArray = (nums1, m, nums2, n) => {
  let r1 = m - 1;
  let r2 = n - 1;

  for (let w = m + n - 1; w >= 0; w--) {
    if (r1 >= 0 && r2 >= 0) {
      nums1[w] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
    } else if (r1 >= 0) {
      nums1[w] = nums1[r1--];
    } else {
      nums1[w] = nums2[r2--];
    }
  }
  return;
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
// console.log(mergeSortedArray(nums1, m, nums2, n));

//141
const hasCycle = (head) => {
  if (!head) return false;

  const map = new Map();

  let old_tail = head;

  while (old_tail.next != null) {
    if (map.has(old_tail)) {
      return true;
    } else {
      map.set(old_tail, true);
    }

    old_tail = old_tail.next;
  }

  return false;
};

const hasCycleTwoPointers = (head) => {
  if (head === null) return false;

  let middle = head;
  let fast = head.next;

  while (middle !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    middle = middle.next;
    fast = fast.next.next;
  }

  return true;
};

const isPalindrome = (head) => {
  let old_tail = head;
  let set = [];

  while (old_tail !== null) {
    set.push(old_tail.val);

    old_tail = old_tail.next;
  }

  let j = set.length - 1;
  let i = 0;
  while (i < j) {
    if (set[i] !== set[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const set = [1, 2, 2, 1];

// const head = createLinkedList(set);

// console.log(isPalindrome(head));

const isStrobogrammatic = (num) => {
  if (num.includes("4") || num.includes("2") || num.includes("5") || num.includes("3") || num.includes("7")) {
    return false;
  }

  let str = "";

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "6") {
      str += "9";
    } else if (num[i] === "9") {
      str += "6";
    } else {
      str += num[i];
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== str[i]) {
      return false;
    }
  }

  return true;
};

// console.log(isStrobogrammatic("88"));

const reverseVowels = (s) => {
  let l = 0;
  let r = s.length - 1;

  const vowels = {
    e: true,
    i: true,
    o: true,
    a: true,
    u: true,
    E: true,
    I: true,
    A: true,
    U: true,
    O: true,
  };

  const arrayStr = s.split("");

  while (l < r) {
    while (l < r && !vowels[arrayStr[l]]) {
      l++;
    }

    while (l < r && !vowels[arrayStr[r]]) {
      r--;
    }

    if (l < r) {
      const temp = arrayStr[l];

      arrayStr[l] = arrayStr[r];
      arrayStr[r] = temp;

      l++;
      r--;
    }
  }

  return arrayStr.join("");
};

// console.log(reverseVowels("IceCreAm"));

const intersectionArray = (nums1, nums2) => {
  const map = {};

  let i = 0;
  for (const n of nums1) {
    if (!map[n]) {
      map[n] = 1;
    } else {
      continue;
    }

    i++;
  }

  const intersection = [];

  for (const n of nums2) {
    if (map[n] && map[n] === 1) {
      intersection.push(n);
      map[n] = 0;
    }
  }

  return intersection;
};

// console.log(intersectionArray([1, 2, 2, 1], [2, 2, 0, 1]));

const intersectII = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const map = new Map();
  for (const n of nums1) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const result = [];
  for (const n of nums2) {
    const count = map.get(n);
    if (count > 0) {
      result.push(n);
      map.set(n, count - 1);
    }
  }

  return result;
};

const validWordAbbreviation = (word, abbr) => {
  let i = 0;
  let j = 0;
  while (i < word.length && j < abbr.length) {
    if (isNaN(abbr[j])) {
      if (word[i] !== abbr[j]) {
        return false;
      }
      i++;
      j++;
    } else {
      if (abbr[j] === "0") {
        return false;
      }

      let num = 0;
      while (j < abbr.length && !isNaN(abbr[j])) {
        num = num * 10 + Number(abbr[j]);
        j++;
      }
      i += num;
    }
  }

  return i === word.length && j === abbr.length;
};

// console.log(validWordAbbreviation("internationalization", "i12iz4n"));

const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let sizeIdx = 0;
  let greedIdx = 0;

  while (sizeIdx < s.length && greedIdx < g.length) {
    if (s[sizeIdx] >= g[greedIdx]) {
      greedIdx++;
    }

    sizeIdx++;
  }

  return greedIdx;
};

// console.log(
//   findContentChildren(
//     [
//       262, 437, 433, 102, 438, 346, 131, 160, 281, 34, 219, 373, 466, 275, 51, 118, 209, 32, 108, 57, 385, 514, 439, 73,
//       271, 442, 366, 515, 284, 425, 491, 466, 322, 34, 484, 231, 450, 355, 106, 279, 496, 312, 96, 461, 446, 422, 143,
//       98, 444, 461, 142, 234, 416, 45, 271, 344, 446, 364, 216, 16, 431, 370, 120, 463, 377, 106, 113, 406, 406, 481,
//       304, 41, 2, 174, 81, 220, 158, 104, 119, 95, 479, 323, 145, 205, 218, 482, 345, 324, 253, 368, 214, 379, 343, 375,
//       134, 145, 268, 56, 206,
//     ],
//     [
//       149, 79, 388, 251, 417, 82, 233, 377, 95, 309, 418, 400, 501, 349, 348, 400, 461, 495, 104, 330, 155, 483, 334,
//       436, 512, 232, 511, 40, 343, 334, 307, 56, 164, 276, 399, 337, 59, 440, 3, 458, 417, 291, 354, 419, 516, 4, 370,
//       106, 469, 254, 274, 163, 345, 513, 130, 292, 330, 198, 142, 95, 18, 295, 126, 131, 339, 171, 347, 199, 244, 428,
//       383, 43, 315, 353, 91, 289, 466, 178, 425, 112, 420, 85, 159, 360, 241, 300, 295, 285, 310, 76, 69, 297, 155, 416,
//       333, 416, 226, 262, 63, 445, 77, 151, 368, 406, 171, 13, 198, 30, 446, 142, 329, 245, 505, 238, 352, 113, 485,
//       296, 337, 507, 91, 437, 366, 511, 414, 46, 78, 399, 283, 106, 202, 494, 380, 479, 522, 479, 438, 21, 130, 293,
//       422, 440, 71, 321, 446, 358, 39, 447, 427, 6, 33, 429, 324, 76, 396, 444, 519, 159, 45, 403, 243, 251, 373, 251,
//       23, 140, 7, 356, 194, 499, 276, 251, 311, 10, 147, 30, 276, 430, 151, 519, 36, 354, 162, 451, 524, 312, 447, 77,
//       170, 428, 23, 283, 249, 466, 39, 58, 424, 68, 481, 2, 173, 179, 382, 334, 430, 84, 151, 293, 95, 522, 358, 505,
//       63, 524, 143, 119, 325, 401, 6, 361, 284, 418, 169, 256, 221, 330, 23, 72, 185, 376, 515, 84, 319, 27, 66, 497,
//     ]
//   )
// );

const findTarget = (root, k) => {
  const set = new Set();

  const helperFunc = (root, k, set) => {
    if (root == null) {
      return false;
    }

    if (set.has(k - root.val)) {
      return true;
    }

    set.add(root.val);

    return helperFunc(root.left, k, set) || helperFunc(root.right, k, set);
  };

  return helperFunc(root, k, set);
};

const shortestToChar = (s, c) => {
  const answer = [];

  const positions = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      positions.push(i);
    }
  }
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    const dis1 = Math.abs(i - positions[j]);
    const dis2 = Math.abs(i - positions[j + 1]);

    if (dis2 <= dis1) {
      answer.push(dis2);
      j++;
    } else {
      answer.push(dis1);
    }
  }

  return answer;
};

// console.log(shortestToChar("loveleetcode", "e"));

const middleNode = (head) => {
  let fast = head;
  let middle = head;

  while (fast && fast.next) {
    middle = middle.next;
    fast = fast.next.next;
  }

  return middle;
};

// const head = createLinkedList([1, 2, 3, 4, 5, 6]);

// console.log(middleNode(head));

const reverseOnlyLetters = (s) => {
  const isLetter = (ch) => {
    const code = ch.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      return true;
    } else if (code >= 65 && code <= 90) {
      return true;
    }
    return false;
  };
  const sArr = s.split("");

  let l = 0;
  let r = sArr.length - 1;

  while (l < r) {
    while (!isLetter(sArr[l]) && l < r) {
      l++;
    }

    while (!isLetter(sArr[r]) && l < r) {
      r--;
    }

    if (l < r) {
      let temp = sArr[l];
      sArr[l] = sArr[r];
      sArr[r] = temp;

      l++;
      r--;
    }
  }

  return sArr.join("");
};

const isLongPressedName = (name, typed) => {
  let j = 0;
  let resStr = "";

  for (let i = 0; i < typed.length; i++) {
    if (name[j] === typed[i]) {
      resStr += typed[i] ?? "";
      j++;
    } else if (typed[i] !== name[j - 1]) {
      return false;
    }
  }

  return resStr === name;
};

// console.log(isLongPressedName("saeed", "ssaaedd"));

const diStringMatch = (s) => {
  let d = s.length;
  let i = 0;

  const ans = [];

  for (const ch of s) {
    if (ch === "D") {
      ans.push(d--);
    } else {
      ans.push(i++);
    }
  }

  ans[s.length] = d;

  return ans;
};

// console.log(diStringMatch("IDID"))

const twoSumLessThanK = (nums, k) => {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;

  let min = Infinity;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (nums[l] > k / 2) {
      break;
    }

    if (sum >= k) {
      r--;
    } else if (sum < k) {
      min = Math.min(min, k - sum);

      l++;
    } else {
      r--;
      l++;
    }
  }

  if (min == Infinity) return -1;

  return k - min;
};

// console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));

const duplicateZeros = (set) => {
  const newArr = [];

  for (let i = 0; i < set.length; i++) {
    newArr.push(set[i]);
    if (set[i] === 0) {
      newArr.push(0);
    }

    set[i] = newArr[i];
  }

  console.log(set);
};

// console.log(duplicateZeros([1, 2, 3]));

const isValidPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

const validPalindromeII = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return isValidPalindrome(s, l, r - 1) || isValidPalindrome(s, l + 1, r);
    }
    l++;
    r--;
  }

  return true;
};

const removePalindromSub = (s) => {
  if (s.length === 1) return 0;

  if (isValidPalindrome(s, 0, s.length - 1)) return 1;

  return 2;
};

// console.log(removePalindromSub("ababa"));

const checkIfExist = (set) => {
  const sums = new Map();

  let i = 0;
  for (const n of set) {
    sums.set(n * 2, i);
    i++;
  }

  for (let i = 0; i < set.length; i++) {
    if (sums.has(set[i]) && sums.get(set[i]) !== i) {
      return true;
    }
  }

  return false;
};

// console.log(checkIfExist([7, 1, 14, 11]));

//MEDIUM PROBLEMS

const rotateList = (head, k) => {
  if (k === 0) return head;

  if (head == null) return head;

  if (head.next == null) return head;

  let len = 1;

  let old_tail = head;

  while (old_tail.next != null) {
    old_tail = old_tail.next;

    len++;
  }

  if (len - 1 === k) return head;

  old_tail.next = head;
  let new_tail = head;
  for (let i = 0; i < len - (k % len) - 1; i++) {
    new_tail = new_tail.next;
  }

  let new_head = new_tail.next;

  new_tail.next = null;

  return new_head;
};

const sortColors = (nums) => {
  if (nums.length === 0) return nums;

  const count = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  let index = 0;

  for (let i = 0; i < count[0]; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < count[1]; i++) {
    nums[index++] = 1;
  }

  for (let i = 0; i < count[2]; i++) {
    nums[index++] = 2;
  }

  return nums;
};

// console.log(sortColors([2, 0, 2, 1, 1, 0]));

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteDuplicates = (head) => {
  if (head === null) return head;

  let sentinel = new ListNode(0, head);

  let pred = sentinel;

  while (head !== null) {
    if (head.next !== null && head.val === head.next.val) {
      while (head.next !== null && head.val === head.next.val) {
        head = head.next;
      }

      pred.next = head.next;
    } else {
      pred = pred.next;
    }

    head = head.next;
  }

  return sentinel.next;
};

const detectCycle = (head) => {
  let current = head;

  let index = 0;
  const map = new Map();

  while (current !== null) {
    if (map.has(current)) {
      return current;
    } else {
      map.set(current, index);
    }

    current = current.next;
  }

  return null;
};

const partition = (head, x) => {
  let current = head;

  let head1 = new ListNode(0);
  let head2 = new ListNode(0);

  let current1 = head1;
  let current2 = head2;

  while (current !== null) {
    if (current.val < x) {
      current1.next = new ListNode(current.val);

      current1 = current1.next;
    } else if (current.val >= x) {
      current2.next = new ListNode(current.val);
      current2 = current2.next;
    }

    current = current.next;
  }

  current1.next = head2.next;

  return head1.next;
};

const reorderList = (head) => {
  let fast = head;
  let middle = head;

  //find middle node
  while (fast !== null && fast.next !== null) {
    middle = middle.next;
    fast = fast.next.next;
  }

  //reverse from middle node to tail node
  let prev = null;
  let curr = middle;

  while (curr !== null) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  //merge two linked list
  let first = head;
  let second = prev;

  while (second.next !== null) {
    let temp = first.next;
    first.next = second;
    first = temp;
    temp = second.next;
    second.next = first;
    second = temp;
  }

  return head;
};

// const arr2 = [1, 2, 3, 4, 5, 6];

var sortList = function (head) {
  if (!head || !head.next) return head;

  let mid = getMid(head);
  let left = sortList(head);
  let right = sortList(mid);
  return merge(left, right);
};

function getMid(head) {
  let midPrev = null;
  while (head && head.next) {
    midPrev = midPrev === null ? head : midPrev.next;
    head = head.next.next;
  }
  let mid = midPrev.next;
  midPrev.next = null;
  return mid;
}

function merge(list1, list2) {
  let dummyHead = new ListNode();
  let tail = dummyHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 ? list1 : list2;
  return dummyHead.next;
}

const head = createLinkedList([4, 2, 1, 3]);

const newHead = sortList(head);

//console.log(partition(head, 3));

// printLinkedList(newHead);

const reverseWords = (s) => {
  const words = s.trim().split(" ");

  let str = [];

  let j = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === "") {
      continue;
    }

    str[j] = words[i];
    j++;
  }

  return str.join(" ");
};

// console.log(reverseWords("  hello world  "));

function isOneEditDistanceHelper(longer, shorter) {
  const m = longer.length;
  const n = shorter.length;
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (longer[i] !== shorter[j]) {
      return longer.slice(i + 1) === shorter.slice(j);
    }
    i++;
    j++;
  }

  return true;
}

const isOneEditDistance = (s, t) => {
  const m = s.length;
  const n = t.length;

  if (n === 0 && m === 0) return false;

  if (Math.abs(m - n) > 1) return false;

  if (m === n) {
    let diffCount = 0;

    for (let i = 0; i < m; i++) {
      if (s[i] !== t[i]) {
        diffCount++;
      }
      if (diffCount > 1) {
        return false;
      }
    }
    return diffCount === 1;
  }

  if (m > n) return isOneEditDistanceHelper(s, t);
  else return isOneEditDistanceHelper(t, s);
};

// console.log(isOneEditDistance("ab", "acd"));

const reverseWordsInPlace = (s) => {
  let j = 0;

  for (let i = s.length - 1; i > j; i--) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;

    j++;
  }
  let left = 0;
  let right = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      right = i - 1;
      while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
      }
      left = i + 1;
    }
  }

  return s;
};

// console.log(reverseWordsInPlace(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]));

class WordDistance {
  constructor(set) {
    this.set = set;
    this.map = new Map();

    for (let i = 0; i < set.length; i++) {
      if (!this.map.has(set[i])) {
        this.map.set(set[i], []);
      }
      this.map.get(set[i]).push(i);
    }
  }

  shortest(string1, string2) {
    let arrPos1 = this.map.get(string1);
    let arrPos2 = this.map.get(string2);

    if (arrPos1.length === 1 && arrPos2.length === 1) {
      return Math.abs(arrPos1[0] - arrPos2[0]);
    }

    let min = Infinity;

    let i = 0,
      j = 0;

    while (i < arrPos1.length && j < arrPos2.length) {
      min = Math.min(min, Math.abs(arrPos1[i] - arrPos2[j]));

      if (arrPos1[i] < arrPos2[j]) {
        i++;
      } else {
        j++;
      }
    }

    return min;
  }
}

const wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);

//console.log(wordDistance.shortest("coding", "practice"));

// console.log(wordDistance.shortest("makes", "coding"));

const minMeetingRooms = (intervals) => {
  const startTimes = intervals.map((el) => el[0]);
  const endTimes = intervals.map((el) => el[1]);

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let usedRooms = 0;

  for (let start = 0, end = 0; start < intervals.length; start++) {
    if (startTimes[start] < endTimes[end]) {
      usedRooms++;
    } else {
      end++;
    }
  }
  return usedRooms;
};

const threeSumSmaller = (nums, target) => {
  //worst solution but works
  //now we need to optimize it lol
  //currently T O(n^3)
  let counter = 0;
  let set = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i < j < k < nums.length && nums[i] + nums[j] + nums[k] < target) {
          counter++;
          set.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return counter;
};

const threeSumSmallerOptimized = (nums, target) => {
  nums.sort((a, b) => a - b);

  function twoSumSmaller(nums, startIndex, target) {
    let sum = 0;
    let left = startIndex;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] < target) {
        sum += right - left;
        left++;
      } else {
        right--;
      }
    }

    return sum;
  }

  let sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    sum += twoSumSmaller(nums, i + 1, target - nums[i]);
  }

  return sum;

  //return counter;
};

// console.log(threeSumSmallerOptimized([-2, 0, 1, 3], 2));

const sortTransformedArray = (nums, a, b, c) => {
  //f(x) = ax^2 + bx + c
  function transform(x) {
    return a * Math.pow(x, 2) + b * x + c;
  }
  const answer = [];

  let left = 0;
  let right = nums.length - 1;

  if (a < 0) {
    while (left <= right) {
      // When 'downward parabola' we will put the edge element (smaller elements) first.
      const leftY = transform(nums[left]);
      const rightY = transform(nums[right]);
      if (leftY < rightY) {
        answer.push(leftY);
        left++;
      } else {
        answer.push(rightY);
        right--;
      }
    }
  } else {
    while (left <= right) {
      // When 'upward parabola' or a 'straight line'
      // we will put the edge element (bigger elements) first.
      const leftY = transform(nums[left], a, b, c);
      const rightY = transform(nums[right], a, b, c);
      if (leftY > rightY) {
        answer.push(leftY);
        left++;
      } else {
        answer.push(rightY);
        right--;
      }
    }

    answer.reverse();
  }

  return answer;
};

const compress = (chars) => {
  if (chars.length === 1) return chars;
  let s = "";
  let sum = 0;

  for (let i = 1; i < chars.length; i++) {
    let ch1 = chars[i - 1];
    let ch2 = chars[i];

    let counter = 0;

    if (ch1 === ch2) {
      while (ch1 === ch2) {
        ch1 = chars[i - 1];
        ch2 = chars[i];
        counter++;
        i++;
      }

      s += ch1 + counter;
      sum += counter;
      i--;
    } else {
      s += ch1;
      sum += 1;
    }
  }

  let i = 0;

  chars.splice(s.length, sum - s.length);

  for (let ch of s) {
    chars[i] = ch;
    i++;
  }

  return chars;
};

// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));

const findLongestWord = (s, dictionary) => {
  let longestWord = "";

  let index = 0;
  for (let word of dictionary) {
    let i = 0;
    let j = 0;
    let computedWord = "";

    while (i < s.length && j < word.length) {
      let sLetter = s[i];
      let dictLetter = word[j];

      if (i < s.length && j < word.length && sLetter === dictLetter) {
        computedWord += sLetter;

        i++;
        j++;
      } else {
        i++;
      }
      if (computedWord === word) {
        break;
      }
    }

    if (computedWord === word) {
      if (word.length > longestWord.length || (word.length === longestWord.length && word < longestWord)) {
        longestWord = word;
      }
    }
    index++;
  }

  return longestWord;
};

const swapNodes = (head, k) => {
  let current = head;
  let frontNode = null;

  let endNode = null;

  let length = 0;
  let i = 1;

  while (current !== null) {
    length++;

    if (endNode !== null) {
      endNode = endNode.next;
    }

    if (length === k) {
      frontNode = current;
      endNode = head;
    }

    current = current.next;
  }

  let temp = frontNode.val;
  frontNode.val = endNode.val;
  endNode.val = temp;
  return head;
};

// const head1 = createLinkedList([26, 24, 24, 36, 18, 52, 95, 61, 54, 88, 86, 79, 11, 1, 31, 100]);

// const head2 = swapNodes(head1, 16);

// printLinkedList(head2);

const findPairs = (nums, k) => {
  //Tc O(n);
  //Sc O(n);
  const map = new Map();

  let i = 0;
  for (const num of nums) {
    const comp = num + k;

    map.set(comp, i);
    i++;
  }

  let count = 0;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && !set.has(nums[i])) {
      count++;

      set.add(nums[i]);
    }
  }

  return count;
};

// console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3));

const nextGreaterElement = (n) => {
  const nums = (n + "").split("");

  let i = nums.length - 2;

  // Step 1: Find the first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i < 0) return -1; // No next permutation possible

  let j = nums.length - 1;

  // Step 2: Find the smallest number larger than nums[i] from the right
  while (nums[j] <= nums[i]) {
    j--;
  }

  // Step 3: Swap the two numbers
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;

  // Step 4: Sort the digits after position i in ascending order
  let result = nums.slice(0, i + 1).concat(nums.slice(i + 1).reverse());

  let newNum = Number(result.join(""));

  // Step 5: Check if new number fits within 32-bit integer range
  const INT32_MAX = 2147483647;
  if (newNum > INT32_MAX) return -1;

  return newNum;
};

const checkInclusion = (s1, s2) => {
  //TLE Error
  if (s2.length < s1.length) {
    return false;
  }

  const s1map = {};

  for (let el of s1) {
    if (s1map[el]) {
      s1map[el]++;
    } else {
      s1map[el] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const s2map = {};

    for (let j = i; j < s1.length + i; j++) {
      if (s2map[s2[j]]) {
        s2map[s2[j]]++;
      } else {
        s2map[s2[j]] = 1;
      }
    }

    let isPerm = true;

    for (let key in s1map) {
      if (s1map[key] !== s2map[key]) {
        isPerm = false;
      }
    }

    if (isPerm) {
      return true;
    }
  }

  return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const findClosestElements = (arr, k, x) => {
  if (arr.length === k) {
    return arr;
  }

  if (x <= arr[0]) {
    return arr.slice(0, k);
  }

  if (x >= arr[arr.length - 1]) {
    return arr.slice(arr.length - k);
  }
  let closestIndex = binarySearch(arr, x);
  let left = closestIndex - 1;
  let right = closestIndex;

  while (right - left - 1 < k) {
    if (left === -1) {
      right++;
    } else if (right === arr.length) {
      left--;
    } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      left--;
    } else {
      right++;
    }
  }

  return arr.slice(left + 1, right);
};

// console.log(findClosestElements([1, 2, 3, 4, 5, 7, 8, 9], 4, 5)); //[3,4,5]

const partitionLabels = (s) => {
  let intervals = {};

  let i = 0;
  for (let ch of s) {
    if (!intervals[ch]) {
      intervals[ch] = [i, i];
    } else {
      intervals[ch][1] = i;
    }
    i++;
  }

  let partitions = [];

  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    end = Math.max(end, intervals[ch][1]);

    if (i === end) {
      partitions.push(i - start + 1);
      start = i + 1;
    }
  }

  return partitions;
};

// console.log(partitionLabels("ababcbacadefegdehijhklij"));

const findTheDistanceValue = (arr1, arr2, d) => {
  let count = 0;

  arr2.sort((a, b) => a - b);

  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid; // Found exact match
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right; // Return the index of the largest element <= target
  }

  for (let i = 0; i < arr1.length; i++) {
    const closestIndex = binarySearch(arr2, arr1[i]);

    // Handle case when closestIndex is -1 (arr1[i] is smaller than all elements in arr2)
    let closestValue = closestIndex >= 0 ? arr2[closestIndex] : Infinity;

    // Handle case when there is a closer value to the right
    if (
      closestIndex + 1 < arr2.length &&
      Math.abs(arr2[closestIndex + 1] - arr1[i]) < Math.abs(closestValue - arr1[i])
    ) {
      closestValue = arr2[closestIndex + 1];
    }

    // Check the absolute difference
    if (Math.abs(arr1[i] - closestValue) > d) {
      count++;
    }
  }

  return count;
};

// console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));

const applyOperations = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] = nums[i - 1] * 2;
      nums[i] = 0;
    }
  }

  let count = 0;
  let i = 0;

  for (let num of nums) {
    if (num === 0) {
      count++;
    } else {
      nums[i] = num;
      i++;
    }
  }

  nums.splice(i);
  const zeros = new Array(count).fill(0);

  return [...nums, ...zeros];
};

//console.log(applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]));

const mergeArray = (nums1, nums2) => {
  let result = [];

  let first = 0;
  let second = 0;

  while (first < nums1.length && second < nums2.length) {
    const [id1, value1] = nums1[first];
    const [id2, value2] = nums2[second];

    if (id1 === id2) {
      result.push([id2, value2 + value1]);
      second++;
      first++;
    } else {
      if (id1 > id2) {
        result.push([id2, value2]);
        second++;
      } else {
        result.push([id1, value1]);
        first++;
      }
    }
  }

  if (first < nums1.length) {
    const leftOver = nums1.slice(first);

    result = [...result, ...leftOver];
  }

  if (second < nums2.length) {
    const leftOver = nums2.slice(second);
    result = [...result, ...leftOver];
  }

  return result;
};

var getCommon = function (nums1, nums2) {
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      return nums1[i];
    }
  }

  return -1;
};
