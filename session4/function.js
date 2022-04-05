/* Function
- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

1. Function declaration
function name(param1, param2) { body... return; }
one function === one thing
naming : doSomething, command, verb
e.g. createCardAndPoint -> createCard, createPoint
function is object in JS */

function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}

log('Hello');
log(1234);

/* 2. Parameters
premitive parameters: passed by value
object parameters: passed by reference */

function changeName(obj) {
  obj.name = 'coder';
}

const mark = { name : 'mark' };
changeName(mark);
console.log(mark.name);

// 3. Default parameters (added in ES6)

function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}

showMessage('Hi');
showMessage('Hi', 'mark');

// 4. Rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
}
printAll('dream', 'coding', 'mark');

// 5. Local scope

let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // 에러 발생
  // console.log(childMessage);
}
printMessage();

// 6. Return a value

function sum(a, b) {
  return a + b;
}
const result = sum(2, 3);
console.log(`sum: ${sum(3, 4)}`)

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upadte logic...
}

/* Fisrt-class function
functions are treated like any other variable
can be assigned as a value to variable
can be passed as an argument to other functions
can be returned by another function

1. Function expression
a function declaration can be called ealier than if it is defined (hoisted)
a function expression is created when the execution reaches it */

const print = function () { // anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('yes!');
}

const printNo = function () {
  console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous function

const simplePrint1 = function () {
  console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiple = (a, b) => {
  // do something more
  return a * b;
}

// IIFE: Immediately Invoked Function Expression

(function hello() {
  console.log('IIFE');
})();