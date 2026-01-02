/**
 * Template literals
 * Destructing (Array, Object)
 * Spread Operator
 * Arrow function
 * Array methods: map, filter, sort, find, includes
 */

const name = "Sam";
const address = "KTM";
const age = 35;

const result =
  "Hello my name is " +
  name +
  " and I live in " +
  address +
  ". I am " +
  age +
  " years old.";

console.log(result);

// Template literals
const tlResult = `Hello my name is ${name}.
I live in ${address}.
I am ${age} years old.
`;

console.log(tlResult);

const user = {
  email: "user@gmail.com",
  password: "123456",
  role: "USER",
};

console.log(user.role);
console.log(user.email);

// Object Destructuring
const { email: userEmail, password, role } = user;

console.log(userEmail);
console.log(password);
console.log(role);

const students = ["Ram", "Mohan", "Hari"];

// Array destructuring
const [student1, student2, student3] = students;

// Spread operator (copy)
const profile = {
  name: "Ram",
  phone: 89465120,
};

const addr = {
  city: "KTM",
  province: "Bagmati",
};

const profileResult = { ...profile, ...addr };

// Rest operator
const { phone, ...remainingResult } = profileResult;

console.log(phone);

console.log(remainingResult);
console.log(profileResult);

const list1 = ["Honda", "BMW", "Mercedes", "Porche"];
const list2 = ["Hyundai", "Toyota", "Tesla", "Ford"];

const cars = [...list1, ...list2];

console.log(cars);

function squareFn(value) {
  return value * value;
}

// Arrow function
const square = (value) => value * value;
console.log(square(7));
console.log(square(6));

// Array methods

const list = [8541, 87, 61, 3, 13, 513, 516, 486, 11, 641, 684, 6, 68, 46, 84];

const finalList = [];

for (let i = 0; i < list.length; i++) {
  const result = list[i] + 5;

  finalList.push(result);
}

console.log(finalList);

console.log(
  "==============================Map================================"
);

// Map: [a,a,a].map(b)=>[ab,ab,ab]
const mappedList = list.map((item) => item + 5);

console.log(mappedList);

// Filter: [a,a,b,a,a,b,b,a].filter(a)=>[a,a,a,a,a]
const filteredList = list.filter((item) => item > 500);
console.log(filteredList);

// Sort
list.sort((a, b) => b - a); // a-b (ASC), b-a(DESC)
console.log(list);

const bikes = [
  {
    brand: "Honda",
    cc: 150,
  },
  {
    brand: "Yamaha",
    cc: 200,
  },
  {
    brand: "Apache",
    cc: 160,
  },
];

// Find => Single result [a,b,c,d].find(b)=>b
const foundValue = bikes.find((item) => item.cc == 160);

console.log(foundValue);

// Includes: boolean
console.log(list.includes(68));

// Some: boolean
console.log(list.some((item) => item > 100));

// Every: boolean
console.log(list.every((item) => item > 100));
