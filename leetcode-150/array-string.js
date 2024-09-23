const removeElementRec = (nums, val) => {
  const recursive = (i) => {
    //base
    if (i >= nums.length) {
      return;
    }

    if (nums[i] === val) {
      nums.splice(i, 1);
      recursive(i);
    } else {
      recursive(i + 1);
    }
  };

  recursive(0);

  return nums.length;
};

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let buyDay = 0;
    let sellDay = 0;
    if (prices[i] < prices[i + 1]) {
      buyDay = i;
      sellDay = i + 1;
      while (prices[sellDay] < prices[sellDay + 1]) {
        sellDay++;
        i++;
      }
      profit += prices[sellDay] - prices[buyDay];
    }
  }

  return profit;
};

const jumpGame = (nums) => {
  let maxReach = 0;
  let i = 0;

  while (i <= maxReach && maxReach < nums.length - 1) {
    maxReach = Math.max(maxReach, i + nums[i]);
    i++;
  }

  return maxReach >= nums.length - 1;
};

// console.log(jumpGame([3, 2, 1, 0, 4]));

const hIndex = (citations) => {
  //O(nlogn)
  citations.sort((a, b) => b - a);

  let i = 0;

  while (i < citations.length && citations[i] > i) {
    i++;
  }

  return i;
};
