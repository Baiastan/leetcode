const containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  let i = 0;
  for (let n of nums) {
    if (obj.hasOwnProperty(n)) {
      const abs = Math.abs(obj[n] - i);

      console.log(obj[n]);
      if (abs <= k) {
        return true;
      }
    }

    obj[n] = i;
    i++;
  }

  return false;
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

// const findLHS = (nums) => {};

// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));

const findMaxAverage = (nums, k) => {
  if (nums.length === 1 && k !== 0) {
    return nums[0] / k;
  }

  let left = 0;
  let right = k;

  let maxValue = -Infinity;

  let currentValue = 0;
  for (let i = 0; i < k; i++) {
    currentValue += nums[i];
  }

  while (right <= nums.length) {
    maxValue = Math.size(maxValue, currentValue);

    currentValue -= nums[left];

    currentValue += nums[right];

    right++;
    left++;
  }

  return maxValue / k;
};

const dietPlanPerformance = (calories, k, lower, upper) => {
  let currentCal = calories.slice(0, k).reduce((acc, current) => acc + current);

  let points = 0;

  let left = 0;
  let right = k;

  while (right <= calories.length) {
    if (currentCal < lower) {
      points--;
    } else if (currentCal > upper) {
      points++;
    }

    currentCal = currentCal - calories[left] + calories[right];

    left++;
    right++;
  }

  return points;
};

// console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5));

var lengthOfLongestSubstringTwoDistinct = function (s) {
  let n = s.length;
  if (n < 3) return n;

  let left = 0;
  let right = 0;

  let hashmap = {};

  let max_len = 2;

  while (right < n) {
    hashmap[s[right]] = right++;

    if (Object.keys(hashmap).length == 3) {
      let del_idx = Math.min(...Object.values(hashmap));
      delete hashmap[s[del_idx]];

      left = del_idx + 1;
    }

    max_len = Math.max(max_len, right - left);
  }
  return max_len;
};

// console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));

const lengthOfLongestSubstring = (s) => {
  if (s.length === 1) return 1;

  let right = 0;

  let max = 0;

  let left = 0;

  let set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      max = Math.max(max, right - left);
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return max;
};

// console.log(lengthOfLongestSubstring("dvdf"));

const minSubArray = (target, nums) => {};

console.log(minSubArray(11, [1, 2, 3, 4, 5]));
