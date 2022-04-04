// 1. String concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("mark\'s \nbook")

// 2. Numeric operators

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;

// 4. Assignment operators

let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators

console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2;

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('Wasting time');
  }
  return true;
};

// tip : 연산이 많이 필요한 함수는 가능한 뒤에서 호출
console.log(`or: ${value1 || value2 || check()}`);

console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

// 7. Eqaulity

const stringFive = '5';
const numberFive = 5;

// loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equality, without type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);