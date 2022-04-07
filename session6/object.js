/* Object
one of the JavaScript's data type.
a collection of related data and/or functionality.
Nearly all objects in JavaScript are instance of Object */

// 1. Literals and properties

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const mark = {
  name: 'mark',
  age: 4
};

print(mark);

// with JavaScript magic (dynamically typed language)
// can add propertie later

mark.hasJob = true;
console.log(mark.hasJob);

// can delete properties later

delete mark.hasJob;
console.log(mark.hasJob);

// 2. Computed properties
// key should be always string

console.log(mark.name);
console.log(mark['name']);
mark['hasJob'] = true;
console.log(mark['hasJob']);

// 3. Property value shorthand

const person1 = makePerson('bob', 2);
const person2 = makePerson('steve', 3);
const person3 = makePerson('dave', 4);
console.log(person1);

function makePerson(name, age) {
  return {
    name,
    age
  }
};

// 4. Constructor function

const person4 = new Person('bob', 2);
const person5 = new Person('steve', 3);
const person6 = new Person('dave', 4);
console.log(person5);

function Person(name, age) {
  this.name = name;
  this.age = age;
};

// 5. in operator: property existence check (key in obj)

console.log('name' in mark);
console.log('age' in mark);
console.log('random' in mark);

// 6. for..in vs for..of
// for (key in obj)

for (key in mark) {
  console.log(key);
}

// for (value of iterable)

const arrary = [1, 2, 3, 4, 5];

for (value of arrary) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {
  name: 'mark',
  age: 20
};

const user2 = user;
user2.name = 'coder';
console.log(user);

// old way

const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example

const fruit1 = {
  color: 'red',
};
const fruit2 = {
  color: 'blue',
  size: 'big'
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);