'use strict';
//vanilla js 사용시 선언

/*
Variable
  - let (added in ES6)
  - var (hoisting과 block scope 때문에 사용 X)
  - const (constant, 상수이므로 재할당 불가)
    1. security: 해킹에 의한 값 변경 불가
    2. thread safety: 다른 thread의 작업에 의한 값 변경 방지
    3. reduce human mistakes

  Variable types
    - primitive, single item: number, string, boolean, null, undefined, symbol
    - object, box container
    - function, first-class function (함수도 자료형 취급)
    - Immutable data types : primitive, frozen (i.e. object.freeze())
    - Mutable data types : all objects by default
*/
let globalName = 'mark';
{
  let name = 'seonwoo';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(globalName);
console.log(name);

const maxNumber = 100;
// 에러 발생
// maxNumber = 20;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;

// template literals (string)
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Boolean
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// Null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// Undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// Symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 주어지는 string과 상관 없이 고유한 symbol 형성
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
// string이 동일하면 동일한 symbol을 만들고 싶다면 .for
console.log(gSymbol1 === gSymbol2);

// symbol을 바로 출력하면 에러 발생, .description을 통해 string으로 변환
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
