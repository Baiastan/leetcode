function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

//my answer
//undefined
//reference error

// sayHi();

//undefined
//reference error
for (var i = 0; i < 3; i++) {
  //setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  //setTimeout(() => console.log(i), 1);
}

//3 3 3 0 1 2

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

//output:
//20 and undefined

//console.log(shape.diameter()); //20
//console.log(shape.perimeter()); // undefined because arrow function does have its own this keyword and cannot be bound using bind(), call(), apply()

console.log(+true); //1
console.log(!"Baiastan"); //false

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

//console.log(mouse.bird.size); // not valid
console.log(mouse[bird.size]); //true
console.log(mouse[bird["size"]]); //true

// let c = { greeting: "Hey" };
// let d;

// d = c;

// c.greeting = "Hello";
// console.log(d.greeting); //hello

//1 mistake

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// class Chameleon {
//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }

//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   setNewColor(color) {
//     this.newColor = color;
//   }

//   getColor() {
//     return this.newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });

// console.log(Chameleon.colorChange("orange")); //orange
// freddie.setNewColor("orange");

// console.log(freddie.getColor());

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
//const sarah = Person("Sarah", "Smith"); in strict mode, it throws a rerefence error

console.log(lydia);
//console.log(sarah);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

//0 2 2
