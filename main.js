console.log("hello world");
console.error("This is error");
console.warn("this is warning");

// var, let, const
// const age = 20;
// const name = "Ram";
// const isMale = true;

let address = "Itahari";
address = "Biratnagar";

console.log(address);

// Not recommended
var test = "test";
var test = "test2";

console.log(test);

// Data types
/**
 * 1. String
 * 2. Number
 * 3. Boolean: true, false
 * 4. Object: Key -> value
 * 5. Array: List
 */

const age = 20; // number
const name = "Ram"; // string
const isMale = true; // boolean

// Object
const student = {
  class: 10, //number
  section: "A", // string
  roll: 5,
  name: "Hari",
  isPass: true, //boolean
  address: {
    city: "KTM",
    province: "Bagmati",
  },
  phone: [98798641623, 9070978],
};

console.log(student["name"]);
console.log(student.phone);

// Array, position starts from zero
const marks = [
  8646,
  84,
  68,
  4168,
  1,
  856,
  "Ram",
  "Hari",
  true,
  false,
  ["test", "test2"],
  {
    hello: "world",
  },
];

console.log(marks[5]);

// Operators
// 1. Arithmetic operators: +, -, *, /, %, ++, --
console.log(8 + 5);
console.log(8 - 5);
console.log(8 * 5);
console.log(8 / 5);
console.log(8 % 5);

// 2. Logical Operators: AND (&&), OR (||), NOT (!)
console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!false);

// 3. Relational Operators: >, <, >=, <=, !=, ==, ===, !==
console.log(5 == 5); // equality
console.log(5 == 4);
console.log(5 > 4);
console.log(5 < 4);
console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 != 4);

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// 4. Ternary Operator: <condition> ? <true case> : <false case>
const percent = 20;

console.log(percent >= 40 ? "Pass" : "Fail");

// Conditional statement
if (percent >= 40 && percent < 50) {
  console.log("Pass");
} else if (percent > 50 && percent < 70) {
  console.log("second division");
} else if (percent > 70 && percent < 80) {
  console.log("first division");
} else if (percent > 80) {
  console.log("Distinction");
} else {
  console.log("Fail");
}

// Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;

while (i <= 10) {
  console.log(i);

  i++; //last
}

// Function
function greet(name) {
  console.log("Hello " + name);
}

greet("Ram"); // function call
greet("Hari");

function sum(a, b) {
  const result = a + b;

  return result;
}

const addedValues = sum(12, 85);
console.log(addedValues);
