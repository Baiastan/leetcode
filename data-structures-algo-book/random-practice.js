// //bubble sort

// const nums = [2, 4, 7, 1, 3];

// const bubbleSort = (nums) => {
//   const arrayOfNums = [...nums];
//   let n = 0;

//   for (let i = 0; i < arrayOfNums.length; i++) {
//     for (let j = 0; j < arrayOfNums.length; j++) {
//       if (arrayOfNums[j + 1] < arrayOfNums[j]) {
//         let swap = arrayOfNums[j];
//         arrayOfNums[j] = arrayOfNums[j + 1];
//         arrayOfNums[j + 1] = swap;
//       }
//     }
//   }
//   console.log(n);

//   return arrayOfNums;
// };

// // const sortedArray = bubbleSort(nums);
// // console.log(sortedArray);

// const hasDuplicates = (nums) => {
//   const existingNumbers = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (existingNumbers[nums[i]] === 1) {
//       return true;
//     } else {
//       existingNumbers[nums[i]] = 1;
//     }
//   }
//   return false;
// };

// const selectionSort = (nums) => {
//   const ans = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     let indexOfLowestVal = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (ans[indexOfLowestVal] > ans[j]) {
//         indexOfLowestVal = j;
//       }
//     }
//     if (i !== indexOfLowestVal) {
//       let swap = ans[i];
//       ans[i] = ans[indexOfLowestVal];
//       ans[indexOfLowestVal] = swap;
//     }
//   }

//   return ans;
// };

// const insertionSort = (nums) => {
//   const ans = [...nums];

//   for (let i = 1; i < nums.length; i++) {
//     let temp_value = ans[i];
//     let position = i - 1;
//     while (position >= 0) {
//       if (ans[position] > temp_value) {
//         ans[position + 1] = ans[position];
//         position = position - 1;
//       } else {
//         break;
//       }
//     }
//     ans[position + 1] = temp_value;
//   }

//   return ans;
// };

// //////Hash Tables/////

// const arraySubset = (arr1, arr2) => {
//   const keys1 = {};

//   let smallerArray = arr1.length < arr2.length ? arr1 : arr2;
//   let largerArray = arr1.length > arr2.length ? arr1 : arr2;

//   for (const key of largerArray) {
//     keys1[key] = true;
//   }

//   for (const key of smallerArray) {
//     if (!keys1.hasOwnProperty(key)) {
//       return false;
//     }
//   }

//   return true;
// };

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(el) {
//     // if (typeof el !== this.type) throw new Error(`Cannot insert type of ${typeof el} in to ${this.type} stack`);
//     this.stack.push(el);
//   }

//   pop() {
//     return this.stack.pop();
//   }

//   peek() {
//     return this.stack[this.stack.length - 1];
//   }

//   getLength() {
//     return this.stack.length;
//   }
// }

// const stack = new Stack();

// // stack.push("1");
// // stack.push("2");

// const validParanthethis = (str) => {
//   const stack = new Stack();

//   const open = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   const close = {
//     ")": true,
//     "]": true,
//     "}": true,
//   };

//   for (let el of str) {
//     if (open[el]) {
//       stack.push(el);
//     }

//     if (close[el]) {
//       const pop = stack.pop();

//       if (open[pop] !== el) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// // console.log(validParanthethis("var x = {y: [1,2,3]})"));

// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(el) {
//     this.queue.push(el);
//   }

//   dequeue() {
//     if (!this.queue.length) {
//       throw new Error("queue is empty");
//     }

//     const firstEl = this.queue[0];

//     const newQueue = this.queue.filter((el) => el !== firstEl);

//     this.queue = [...newQueue];

//     return firstEl;
//   }

//   peek() {
//     return this.queue[0];
//   }
// }

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);

// // console.log(queue);

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();

// queue.enqueue(1);
// queue.enqueue(2);

// // console.log(queue);
// //RECURSIVELY RECURSE WITH RECURSIONS

// const countDown = (start) => {
//   if (start === 0) {
//     return 0;
//   }

//   console.log(start);

//   return countDown(start - 1);
// };

// // console.log(countDown(10));

// const factorial = (n, cache = {}) => {
//   if (n === 1) {
//     return 1;
//   }

//   if (cache.hasOwnProperty(n)) {
//     return cache[n];
//   } else {
//     cache[n] = n * factorial(n - 1, cache);
//     return cache[n];
//   }
// };

// // console.log(factorial(8));

// const children = {
//   nodeName: "DIV",
//   innerText: "",

//   children: {
//     nodeName: "DIV",
//     innerText: "",
//     children: {
//       nodeName: "button",
//       innerText: "Submit",
//       props: { id: "submit" },
//     },
//   },
// };

// const getNodeId = (children) => {
//   const nodeNames = [];

//   const dfs = (children) => {
//     if (children.children === undefined) {
//       return children?.props?.id;
//     }

//     nodeNames.push(children.nodeName);

//     return dfs(children.children);
//   };

//   let id = dfs(children);
//   console.log(nodeNames);

//   return id;
// };

// // console.log(getNodeId(children));

// const printEveryOther = (low, high) => {
//   if (low >= high) {
//     return low;
//   } else {
//     console.log(low);
//     return printEveryOther(low + 2, high);
//   }
// };

// // console.log(printEveryOther(0, 10));

// const factorial2 = (n) => {
//   if (n <= 1) {
//     return 1;
//   }

//   return n * factorial2(n - 2);
// };

// // console.log(factorial2(10));

// const sum = (low, high) => {
//   if (high <= low) {
//     return high;
//   }

//   return high + sum(low, high - 1);
// };

// // console.log(sum(0, 10));

// const printNumbers = (array) => {
//   for (const item of array) {
//     if (Array.isArray(item)) {
//       printNumbers(item);
//     } else {
//       console.log(item);
//     }
//   }
// };

// const arrayOfNum = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]], [15, 16, 17, 18, 19]], 20];

// const doubleArray = (array, i = 0) => {
//   if (i >= array.length) {
//     return array;
//   }

//   array[i] *= 2;

//   return doubleArray(array, i + 1);
// };

// const recursiveSum = (nums, i = 0, sum = 0) => {
//   if (i >= nums.length) {
//     return sum;
//   }

//   sum += nums[i];

//   return recursiveSum(nums, i + 1, sum);
// };

// // console.log(recursiveSum([1, 2, 3, 4, 5]));

// const reverseString = (str) => {
//   if (str.length === 1) {
//     return str;
//   }

//   return reverseString(str.substring(1)) + str[0];
// };

// // console.log(reverseString("abcde"));

// const countX = (str) => {
//   //base case
//   if (str.length === 1) {
//     return str[0] === "x" ? 1 : 0;
//   }

//   if (str[0] === "x") {
//     return 1 + countX(str.substring(1));
//   } else {
//     return countX(str.substring(1));
//   }
// };

// // console.log(countX("axbxcxd"));

// const stairCaseProblem = (n) => {
//   if (n < 0) return 0;
//   if (n === 1 || n === 0) return 1;

//   return stairCaseProblem(n - 1) + stairCaseProblem(n - 2) + stairCaseProblem(n - 3);
// };

// // console.log(stairCaseProblem(4));

// const anagramGeneration = (string) => {
//   const res = [];

//   const dfs = (i, string) => {
//     //base case

//     if (i === string.length) {
//       res.push(string.slice().join());
//       return;
//     }

//     //dfs recursive case
//     for (let j = i; j < string.length; j++) {
//       [string[i], string[j]] = [string[j], string[i]];
//       dfs(i + 1, string);
//       [string[i], string[j]] = [string[j], string[i]]; // reswapping
//     }
//   };

//   dfs(0, string.split(""));

//   return res;
// };

// //excercises

// const countCh = (array, i = 0) => {
//   if (i >= array.length) {
//     return 0;
//   }

//   return array[i].length + countCh(array, i + 1);
// };

// // console.log(countCh(["ab", "c", "def", "ghij"]));

// const getEvenNumbers = (nums, evenNumbers = [], i = 0) => {
//   //base case
//   if (i >= nums.length) {
//     return evenNumbers;
//   }

//   if (nums[i] % 2 === 0) {
//     evenNumbers.push(nums[i]);
//     return getEvenNumbers(nums, evenNumbers, i + 1);
//   } else {
//     return getEvenNumbers(nums, evenNumbers, i + 1);
//   }
// };

// //refactored getEvenNumber

// const reGetEvenNumber = (nums, i = 0) => {
//   if (i >= nums.length) {
//     return [];
//   }

//   if (nums[i] % 2 === 0) {
//     return [nums[i]].concat(reGetEvenNumber(nums, i + 1));
//   } else {
//     return reGetEvenNumber(nums, i + 1);
//   }
// };

// // console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// const triangularNumber = (n, sum = 1) => {
//   if (n <= 1) {
//     return 1;
//   }

//   return n + triangularNumber(n - 1);
// };

// // console.log(triangularNumber(8));

// const getIndexOfX = (string, i = 0) => {
//   //bse case
//   if (i >= string.length || string[i] === "x") {
//     return i;
//   }

//   return getIndexOfX(string, i + 1);
// };

// // console.log(getIndexOfX("abxcd"));

// const findShortestPath = (rows, cols) => {
//   if (rows === 1 || cols === 1) {
//     return 1;
//   }

//   return findShortestPath(rows - 1, cols) + findShortestPath(rows, cols - 1);
// };

// // console.log(findShortestPath(3, 7));
// let count = 0;
// const findMaxNumber = (nums) => {
//   if (nums.length === 1) {
//     return nums[0];
//   }

//   const maxRemainder = findMaxNumber(nums.slice(1));

//   if (nums[0] > maxRemainder) {
//     return nums[0];
//   } else {
//     return maxRemainder;
//   }
// };

// // console.log(findMaxNumber([1, 2, 3, 4]));
// // console.log(n);

// const fib = (n, memo = new Map()) => {
//   count++;
//   if (memo.has(n)) {
//     return memo.get(n);
//   }

//   if (n === 1 || n === 0) {
//     return n;
//   }

//   memo.set(n, fib(n - 2, memo) + fib(n - 1, memo));

//   return memo.get(n);
// };

// // console.log(fib(9));
// // console.log("count:", count);
// count = 0;
// const loopFib = (n) => {
//   let i = 0;

//   let one = 0;
//   let two = 1;
//   let sum = 0;

//   while (i < n - 1) {
//     sum = one + two;

//     one = two;
//     two = sum;
//     count++;
//     i++;
//   }

//   return sum;
// };

// // console.log(loopFib(9));
// // console.log("count:", count);
// // console.log(null == undefined);
// // console.log({} == {});

// // console.log(
// //   [2, 1, 4, 3].sort((val1, val2) => {
// //     return val2 - val1;
// //   })
// // );

// // const mystery = {
// //   num: 6,
// //   x: {
// //     z: 1,
// //   },
// // };
// // console.log(mystery.num > 5 ? mystery?.x?.y ?? 2 : mystery.x.y);

// // async function mystery() {
// //   return 2;
// // }
// // console.log(mystery());
// // Promise.resolve(1)
// //   .then(
// //     (value) => console.log(value * 2),
// //     (value) => console.log(value * 3)
// //   )
// //   .then(() => {
// //     throw new Error("Oh No!");
// //   })
// //   .catch((error) => 3)
// //   .finally(() => console.log(4))
// //   .then(console.log);
// // console.log(7);

// // for (var i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 0);
// // }

// const qnums = [1, 2, 3, 4, 5, 6];

// let count1 = 0;

// const partition = (nums, left, right) => {
//   const pivot = nums[Math.floor((right + left) / 2)];

//   while (left <= right) {
//     while (pivot > nums[left]) {
//       left++;
//       count1++;
//     }
//     while (pivot < nums[right]) {
//       right--;
//       count1++;
//     }
//     count1++;
//     if (left <= right) {
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//       left++;
//       right--;
//     }
//   }
//   return left;
// };

// const quickSort = (nums, leftIndex = 0, rightIndex = nums.length - 1) => {
//   if (leftIndex < rightIndex) {
//     let pivotIndex = partition(nums, leftIndex, rightIndex);
//     quickSort(nums, leftIndex, pivotIndex - 1);
//     quickSort(nums, pivotIndex, rightIndex);
//     count1++;
//   }

//   return nums;
// };

// const quickSelect = (nums, kthLowestValue, leftIndex = 0, rightIndex = nums.length - 1) => {
//   if (rightIndex - leftIndex <= 0) {
//     return nums[leftIndex];
//   }

//   let pivotIndex = partition(nums, leftIndex, rightIndex);

//   if (kthLowestValue < pivotIndex) {
//     return quickSelect(nums, kthLowestValue, leftIndex, pivotIndex - 1);
//   } else if (kthLowestValue > pivotIndex) {
//     return quickSelect(nums, kthLowestValue, pivotIndex + 1, rightIndex);
//   } else {
//     return nums[pivotIndex];
//   }
// };

// const greatestProductOfThree = (nums, product = 1, count = 0) => {
//   if (count >= 3) {
//     return product;
//   }

//   let max = 0;
//   let maxIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       maxIndex = i;
//     }
//   }

//   nums.splice(maxIndex, 1);
//   return greatestProductOfThree(nums, product * max, count + 1);
// };

// const greatestNum = (nums) => {
//   let max = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }

//   return max;
// };

// const nums2 = [1, 2, 3, 4, 5];

// Array.prototype.myReduce = function (cb, initialValue) {
//   if (this.length === 0 && initialValue === undefined) {
//     throw new Error("Wrong inputs");
//   }

//   let acc = initialValue;
//   let startIndex = 0;

//   if (initialValue === undefined) {
//     initialValue = this[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }

//   return acc;
// };

// const sum2 = nums2.myReduce((acc, curr) => acc * curr, 1);

// const board = [
//   ["E", "E", "E", "E", "E"],
//   ["E", "E", "M", "E", "E"],
//   ["E", "E", "E", "E", "E"],
//   ["E", "E", "E", "E", "E"],
// ];
// const click = [3, 0];

// const mineSweeper = (board, click) => {
//   const rows = board.length;
//   const cols = board[0].length;

//   const dfs = (i, j) => {
//     if (!board[i][j]) return;
//     if (board[i][j] === "M") {
//       board[i][j] = "X";
//       return;
//     }

//     if (board[i][j] !== "E") return;

//     const mines = checkForMine(i, j);

//     if (mines) {
//       board[i][j] = mines.toString();
//       return;
//     } else {
//       board[i][j] = "B";
//       for (let x = Math.max(i - 1, 0); x < Math.min(i + 2, rows); x++) {
//         for (let y = Math.max(j - 1, 0); y < Math.min(j + 2, cols); y++) {
//           dfs(x, y);
//         }
//       }
//     }
//   };

//   function checkForMine(x, y) {
//     let mines = 0;
//     for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
//       for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++) {
//         if (board[i][j] === "M") mines++;
//       }
//     }
//     return mines;
//   }

//   dfs(click[0], click[1]);
//   return board;
// };

// // console.log(mineSweeper(board, click));

// // function Node(val, next, random) {
// //   this.val = val;
// //   this.next = next;
// //   this.random = random;
// // }

// class Node {
//   constructor(val, next, random) {
//     this.val = val;
//     this.next = next;
//     this.random = random;
//   }
// }

// const copyRandomList = (head) => {
//   let visitedHash = new Map();
//   let cloneNode = function (node) {
//     if (node === null) {
//       return null;
//     }

//     if (visitedHash.has(node)) {
//       return visitedHash.get(node);
//     }
//     //create a new node
//     //with the value same as old node.
//     let newNode = new Node(node.val, null, null);

//     visitedHash.set(node, newNode);

//     newNode.next = cloneNode(node.next);
//     newNode.random = cloneNode(node.random);
//     return newNode;
//   };

//   return cloneNode(head);
// };

// var copyRandomListIterative = function (head) {
//   // Creating a visited dictionary to hold old node reference as key and new node reference as the value
//   var visited = new Map();
//   function getClonedNode(node) {
//     // If node exists then
//     if (node) {
//       // Check if its in the visited map
//       if (visited.has(node)) {
//         // If its in the visited map then return the new node reference from the map
//         return visited.get(node);
//       } else {
//         // Otherwise create a new node, save the reference in the visited map and return it.
//         var newNode = new Node(node.val, null, null);
//         visited.set(node, newNode);
//         return newNode;
//       }
//     }
//     return null;
//   }
//   if (head == null) {
//     return null;
//   }
//   var oldNode = head;
//   // Creating the new head node.
//   var newNode = new Node(oldNode.val);
//   visited.set(oldNode, newNode);
//   // Iterate on the linked list until all nodes are cloned.
//   while (oldNode != null) {
//     // Get the clones of the nodes referenced by random and next pointers.
//     newNode.random = getClonedNode(oldNode.random);
//     newNode.next = getClonedNode(oldNode.next);
//     // Move one step ahead in the linked list.
//     oldNode = oldNode.next;
//     newNode = newNode.next;
//   }
//   return visited.get(head);
// };
// let _counter = new WeakMap();

// class Module {
//   constructor() {
//     _counter.set(this, 0);
//   }

//   incrementCounter() {
//     let counter = _counter.get(this);
//     counter++;
//     _counter.set(this, counter);
//     return _counter.get(this);
//   }

//   resetCounter() {
//     console.log("Counter value prior to reset:", _counter.get(this));
//     _counter.set(this, 0);
//   }
// }

// const testModule = new Module();

// testModule.incrementCounter();
// testModule.incrementCounter();
// testModule.incrementCounter();
// testModule.incrementCounter();
// testModule.incrementCounter();

// let person1 = { name: "Baiastan" };

// const map = new Map();

// map.set(person1, "Baiastan data");

// person1 = undefined;

// map.forEach((value, key) => {
//   console.log(value, key);
// });

// let person2 = { name: "Aisuluu" };

// const weakMap = new WeakMap();

// weakMap.set(person2, "Aisuluu data");

// //Singleton pattern

// let instance;
// const randomNumber = Math.random();

// class mySingleton {
//   constructor(publicProperty) {
//     if (!instance) {
//       this.publicProperty = publicProperty;
//       instance = this;
//     }
//     return instance;
//   }

//   publicMethod() {
//     console.log("The public can see me");
//   }

//   getRandomNumber() {
//     return randomNumber;
//   }
// }

// //export default mySingleton

// //mixin definition

// const MyMixins = (superclass) => {
//   return class extends superclass {
//     moveUp() {
//       console.log("move up");
//     }
//     moveDown() {
//       console.log("move down");
//     }

//     stop() {
//       console.log("stop");
//     }
//   };
// };

// class CarAnimator {
//   moveLeft() {
//     console.log("move left");
//   }
// }

// class PersonAnimator {
//   moveRandamly() {
//     console.log("move randomely");
//   }
// }

// //Extend MyMixins using CarAnimator

// class MyAnimator extends MyMixins(CarAnimator) {}

// const myAnimator = new MyAnimator();

// // myAnimator.moveLeft();
// // myAnimator.moveDown();
// // myAnimator.stop();

// //The Decorator Pattern

// class Vehicle {
//   constructor(vehicleType) {
//     this.vehicleType = vehicleType || "car";
//     this.model = "default";
//     this.license = "0000-000";
//   }
// }

// //Test basic instance of Vehicle
// const testInstance = new Vehicle("sedan");
// console.log(testInstance);

// //let's create a new instance of a vehicle to be decorated

// const truck = new Vehicle("truck");

// //New functionality we're decorating vehicle with
// truck.setModel = function (modelName) {
//   this.model = modelName;
// };

// truck.setColor = function (color) {
//   this.color = color;
// };

// //Test the value setters and value assignment works correctly
// truck.setColor("red");
// truck.setModel("Ford");

// console.log(truck);

// //Demonstrate "vehicle" is still unaltered

// const secondInstance = new Vehicle("car");
// console.log(secondInstance);

// //All strengths of Decorator pattern

// class MacBook {
//   constructor() {
//     this.cost = 997;
//     this.screenSize = 11.6;
//   }

//   getCost() {
//     return this.cost;
//   }
//   getScreenSize() {
//     return this.screenSize;
//   }
// }

// //Decorator 1
// class Memory extends MacBook {
//   constructor(macBook) {
//     super();
//     this.macBook = macBook;
//   }

//   getCost() {
//     return this.macBook.getCost() + 75;
//   }
// }

// //Decorator 2
// class Engraving extends MacBook {
//   constructor(macBook) {
//     super();
//     this.macBook = macBook;
//   }

//   getCost() {
//     return this.macBook.getCost() + 200;
//   }
// }

// //Decorator 3

// class Insurance extends MacBook {
//   constructor(macBook) {
//     super();
//     this.macBook = macBook;
//   }

//   getCost() {
//     return this.macBook.getCost() + 250;
//   }
// }

// //init main object

// let mb = new MacBook();

// //init decorators
// mb = new Memory(mb);
// mb = new Engraving(mb);
// mb = new Insurance(mb);

// //outputs: 1522
// console.log(mb.getCost());

// //outputs: 11.6
// console.log(mb.getScreenSize());

// function Interface(name, methods) {
//   if (arguments.length !== 2) {
//     throw new Error("Interface constructor called with " + arguments.length + " arguments, but expected exactly 2.");
//   }
//   this.name = name;
//   this.methods = [];
//   for (let i = 0; i < methods.length; i++) {
//     if (typeof methods[i] !== "string") {
//       throw new Error("Interface constructor expects method names to be passed in as strings.");
//     }
//     this.methods.push(methods[i]);
//   }
// }

// // Ensure implementation of an interface
// Interface.ensureImplements = function (object, ...interfaces) {
//   if (arguments.length < 2) {
//     throw new Error(
//       "Function Interface.ensureImplements called with " + arguments.length + " arguments, but expected at least 2."
//     );
//   }

//   for (let i = 0; i < interfaces.length; i++) {
//     const interfaceInstance = interfaces[i];
//     if (interfaceInstance.constructor !== Interface) {
//       throw new Error(
//         "Function Interface.ensureImplements expects arguments two and above to be instances of Interface."
//       );
//     }

//     for (let j = 0; j < interfaceInstance.methods.length; j++) {
//       const method = interfaceInstance.methods[j];
//       if (!object[method] || typeof object[method] !== "function") {
//         throw new Error(
//           "Function Interface.ensureImplements: object does not implement the " +
//             interfaceInstance.name +
//             " interface. Method " +
//             method +
//             " was not found."
//         );
//       }
//     }
//   }
// };

// // Create interfaces using the Interface constructor
// const reminder = new Interface("List", ["summary"]);

// console.log(reminder);

// // Todo constructor
// class Todo {
//   constructor({ name, summary }) {
//     this.name = name;
//     this.methods = {
//       summary() {
//         return summary;
//       },
//     };
//   }
// }

// //this is not an optimized class
// class Book {
//   constructor(
//     id, //intrinsic states
//     title, //intrinsic states
//     author, //intrinsic states
//     genre, //intrinsic states
//     pageCount, //intrinsic states
//     publisherId, //intrinsic states
//     ISBN, //intrinsic states
//     checkoutDate, //extrinsic states
//     checkoutMember, //extrinsic states
//     dueReturnDate, //extrinsic states
//     availability //extrinsic states
//   ) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.pageCount = pageCount;
//     this.publisherId = publisherId;
//     this.ISBN = ISBN;
//     this.checkoutDate = checkoutDate;
//     this.checkoutMember = checkoutMember;
//     this.dueReturnDate = dueReturnDate;
//     this.availability = availability;
//   }

//   getTitle() {
//     return this.title;
//   }

//   getAuthor() {
//     return this.author;
//   }

//   getISBN() {
//     return this.ISBN;
//   }
//   //and so on

//   updateCheckoutStatus(bookId, newStatus, checkoutDate, checkoutMember, newReturnDate) {
//     this.id = bookId;
//     this.availability = newStatus;
//     this.checkoutDate = checkoutDate;
//     this.checkoutMember = checkoutMember;
//     this.dueReturnDate = newReturnDate;
//   }

//   extendCheckoutPeriod(bookId, newReturnDate) {
//     this.id = bookId;
//     this.dueReturnDate = newReturnDate;
//   }

//   isPastDue() {
//     const currentDate = new Date();
//     return currentDate.getTime() > Date.parse(this.dueReturnDate);
//   }
// }

// //flyweight optimized version
// class FlyweightBook {
//   constructor({
//     id, //intrinsic states
//     title, //intrinsic states
//     author, //intrinsic states
//     genre, //intrinsic states
//     pageCount, //intrinsic states
//     publisherId, //intrinsic states
//     ISBN, //intrinsic states
//   }) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.pageCount = pageCount;
//     this.publisherId = publisherId;
//     this.ISBN = ISBN;
//   }

//   getTitle() {
//     return this.title;
//   }

//   getAuthor() {
//     return this.author;
//   }

//   getISBN() {
//     return this.ISBN;
//   }
//   //and so on
// }

// //Book Factory Singleton

// const existingBooks = {};

// class BookFactory {
//   createBook({ title, author, genre, pageCount, publisherId, ISBN }) {
//     const existingBook = existingBooks[ISBN];
//     //!! forces to return a boolean
//     if (!!existingBook) {
//       return existingBook;
//     } else {
//       const book = new FlyweightBook({ title, author, genre, pageCount, publisherId, ISBN });
//       existingBook[ISBN] = book;
//       return book;
//     }
//   }
// }

// //Managing Extrinsic States

// //BookRecordManager Singleton
// const bookRecordDatabase = {};

// class BookRecordManager {
//   //add a new book into the library system
//   addBookRecord({
//     id,
//     title,
//     author,
//     genre,
//     pageCount,
//     publisherId,
//     ISBN,
//     checkoutDate,
//     checkoutMember,
//     dueReturnDate,
//     availability,
//   }) {
//     const bookFactory = new BookFactory();
//     const book = bookFactory.createBook({ title, author, genre, pageCount, publisherId, ISBN });

//     bookRecordDatabase[id] = {
//       checkoutDate,
//       checkoutMember,
//       dueReturnDate,
//       availability,
//       book,
//     };
//   }

//   updateCheckoutStatus({ bookId, newStatus, checkoutDate, checkoutMember, newReturnDate }) {
//     const record = bookRecordDatabase[bookId];
//     record.availability = newStatus;
//     record.checkoutDate = checkoutDate;
//     record.checkoutMember = checkoutMember;
//     record.dueReturnDate = newReturnDate;
//   }

//   extendCheckoutPeriod(bookId, newReturnDate) {
//     bookRecordDatabase[bookId].dueReturnDate = newReturnDate;
//   }

//   isPastDue(bookId) {
//     const currentDate = new Date();
//     return currentDate.getTime() > Date.parse(bookRecordDatabase[bookId].dueReturnDate);
//   }
// }

//The Observer Pattern

// class ObserverList {
//   constructor() {
//     this.observerList = [];
//   }

//   add(context) {
//     this.observerList.push(context);
//   }

//   count() {
//     return this.observerList.length;
//   }

//   get(index) {
//     return this.observerList[index];
//   }

//   indexOf(context, startIndex) {
//     let i = startIndex;

//     while (i < this.observerList.length) {
//       if (this.observerList[i] === context) {
//         return i;
//       }
//       i++;
//     }
//     return -1;
//   }

//   removeAt(index) {
//     this.observerList.splice(index, 1);
//   }
// }

// //Subject class that can add, remove, or notify

// class Subject {
//   constructor() {
//     this.observers = new ObserverList();
//   }

//   addObserver(observer) {
//     this.observers.add(observer);
//   }

//   removeObserver(observer) {
//     this.observers.removeAt(this.observers.indexOf(observer, 0));
//   }

//   notify(context) {
//     const observerCount = this.observers.count();
//     for (let i = 0; i < observerCount; i++) {
//       this.observers.get(i).update(context);
//     }
//   }
// }

// //The Observer
// class Observer {
//   constructor() {}
//   update() {
//     //...
//   }
// }

// // ConcreteSubject class
// class ConcreteSubject extends Subject {
//   constructor(element) {
//     super();
//     this.element = element;

//     this.element.onclick = () => {
//       this.notify(this.element.checked);
//     };
//   }
// }

// // ConcreteObserver class
// class ConcreteObserver extends Observer {
//   constructor(element) {
//     super();
//     this.element = element;
//   }

//   update(value) {
//     this.element.checked = value;
//   }
// }

// class Observable {
//   constructor() {
//     this.observers = [];
//   }

//   // Method to add observers
//   subscribe(observer) {
//     this.observers.push(observer);
//   }

//   // Method to remove observers
//   unsubscribe(observer) {
//     this.observers = this.observers.filter((obs) => obs !== observer);
//   }

//   // Method to notify all observers
//   notify(data) {
//     this.observers.forEach((observer) => observer.update(data));
//   }
// }

// class Observer {
//   constructor(name) {
//     this.name = name;
//   }

//   // Update method to be called when the Observable notifies observers
//   update(data) {
//     console.log(`${this.name} received data: ${data}`);
//   }
// }

// // Create Observable instance
// const observable = new Observable();

// // Create Observer instances
// const observer1 = new Observer("Observer 1");
// const observer2 = new Observer("Observer 2");

// // Subscribe observers to the observable
// observable.subscribe(observer1);
// observable.subscribe(observer2);

// // Notify observers with some data
// observable.notify("Hello Observers!");

// // Unsubscribe an observer
// observable.unsubscribe(observer1);

// // Notify observers again
// observable.notify("Observer 1 should not receive this");

//Pub/Sub

class PubSub {
  constructor() {
    this.topics = {};
    this.subUid = -1;
  }

  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    const token = (++this.subUid).toString();
    this.topics[topic].push({ func, token });
    return token;
  }

  unsubscribe(token) {
    for (const topic in this.topics) {
      if (this.topics.hasOwnProperty(topic)) {
        const subscribers = this.topics[topic];
        for (let i = 0; i < subscribers.length; i++) {
          if (subscribers[i].token === token) {
            subscribers.splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  }

  publish(topic, data) {
    if (!this.topics[topic]) {
      return false;
    }

    const topics = this.topics[topic];

    let len = topics.length;

    while (len--) {
      topics[len].func(topic, data);
    }

    return this;

    // if (this.topics[topic]) {
    //   this.topics[topic].forEach((func) => func(data));
    // }
  }
}

const pubsub = new PubSub();

const getCurrentTime = () => {
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();
  const t = date.toLocaleTimeString().toLowerCase();

  return `${m}/${d}/${y} ${t}`;
};

const addGridRow = (data) => {
  console.log(data);
};

// Update our fictional grid to show the time it was last updated
const updateCounter = () => {
  console.log("Last Updated: ", getCurrentTime());
};

// Update the grid using the data passed to our subscribers
const gridUpdate = (topic, data) => {
  if (data !== undefined) {
    addGridRow(data);
    updateCounter();
  }
};

const subscriber = pubsub.subscribe("newDataAvailable", gridUpdate);

console.log(subscriber);

// const timeoutId = setTimeout(() => {
//   pubsub.publish("newDataAvailable", {
//     summary: "Apple ,ade 5 billion",
//     indentifier: "AAPL",
//     stockPrice: 570.91,
//   });
// }, 2000);

const checkIfInstanceOf = (context, classFunction) => {
  if (context === null) return false;
  if (typeof classFunction !== "function") return false;

  if (typeof context !== "object" && typeof context !== "function") {
    switch (classFunction) {
      case Number:
        return typeof context === "number";
      case String:
        return typeof context === "string";
      case Boolean:
        return typeof context === "boolean";
      case Symbol:
        return typeof context === "symbol";
      case BigInt:
        return typeof context === "bigint";
      case Object:
        return typeof context !== "undefined" && context !== null;
      default:
        return false;
    }
  }

  return context instanceof classFunction;
};

class Animal {}

class Dog extends Animal {}

// console.log(checkIfInstanceOf(5n, Object));

const flat = (arr, n) => {
  if (n === 0) return arr;

  let flatArr = [];

  const helperFunc = (arr, index) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && index < n) {
        helperFunc(arr[i], index + 1);
      } else {
        flatArr.push(arr[i]);
      }
    }
  };

  helperFunc(arr, 0);

  return flatArr;
};

//console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));

const join = (arr1, arr2) => {
  //join only unique ids
  //override duplicate ids with values from arr2
  //sort in ascending order

  const map = new Map();

  arr1.forEach((context) => {
    map.set(context.id, { ...context });
  });

  arr2.forEach((context) => {
    if (map.has(context.id)) {
      map.set(context.id, { ...map.get(context.id), ...context });
    } else {
      map.set(context.id, { ...context });
    }
  });

  const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

  return joinedArray;
};

// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ]
//   )
// );

const snailTraversal = (arr, rowsCount, colsCount) => {
  const newArr = [];

  //const cols = arr[0].length;

  let col = 0;
  let row = 0;
  let direction = 1;
  let runner = 0;

  while (col < colsCount) {
    while (row < rowsCount) {
      newArr.push(arr[runner][col]);
      row++;
      runner += direction;
    }

    if (runner === 5) {
      direction = -1;
      runner = 4;
    } else if (runner <= 0) {
      direction = 1;
      runner = 0;
    }

    col++;
    row = 0;
  }

  return newArr;
};

Function.prototype.callPollyfill = function (context, ...args) {
  context = typeof context === "object" || typeof context === "function" ? context : globalThis;

  const uniqueProp = Symbol();
  context[uniqueProp] = this;

  const result = context[uniqueProp](...args);

  delete context[uniqueProp];
  return result;
};

function tax(price, taxRate) {
  const totalCost = price * (1 + taxRate);
  return `The cost of ${this.item} is ${totalCost}`;
}

function keys() {
  return Object.keys(this);
}

function add(b) {
  return this.a + b;
}

// add.callPollyfill({ a: 5 }, 7);

// //tax(10, 0.1);

// tax.callPollyfill({ item: "salad" }, 10, 0.1);

// keys.callPollyfill({ x: 1, y: 2 });

const reverseArray = (arr) => {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "$") {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const arr = ["a", "b", "c", "$", "d"];

//console.log(reverseArray(arr));

const union = (...args) => {
  const map = new Map();

  const res = [];
  for (let i = 0; i < args.length; i++) {
    for (const num of args[i]) {
      if (map.has(num)) {
        continue;
      } else {
        map.set(num, true);
        res.push(num);
      }
    }
  }

  return res;
};

// console.log(union([1, 2, 3], [3, 4, 5], [5, 6, 7, 8]));

const height = (root) => {
  if (root == null) {
    return -1;
  }

  return 1 + Math.max(height(root.left), height(root.right));
};

const isBalanced = (root) => {
  if (root == null) {
    return true;
  }

  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  targetSum -= root.val;

  if (!root.left && !root.right) {
    return targetSum == 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// console.log(hasPathSum(root, 22));

const pascalTriangle = (rowIndex) => {
  let result = [];

  for (let i = 0; i < rowIndex; i++) {
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

const pascalTriangleII = (rowIndex) => {
  let result = [];

  for (let i = 0; i <= rowIndex; i++) {
    let row = new Array(i + 1).fill(0);

    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }

  return result[rowIndex];
};

const isEqualObjects = (a, b) => {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) return false;

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];

    if (typeof a[propName] === "object" && a[propName] !== null && b[propName] !== null) {
      if (!isEqualObjects(a[propName], b[propName])) {
        return false;
      }
    } else if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
};

// console.log(isEqualObjects({ a: 1, b: 2, c: 5, d: [1, 2] }, { a: 1, b: 2, c: 5, d: [1, 2] }));

const sABC = new Set(["A", "B", "C"]);
const sCDE = new Set(["C", "D", "E"]);

const fib = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));
