console.log('Basic');
console.log('Basic');
console.log('Basic');
console.log('Basic');
console.log('Basic');

// function calcF(
//   f: (n1: number, n2: number) => number,
//   n1: number,
//   n2: number
// ): number {
//   console.log(`typeof f = ${typeof f}`);
//   return f(n1, n2);
// }
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// const add = (n1: number, n2: number): number => {
//   return n1 + n2;
// };

// function printResult(
//   f: (arg1: number, arg2: number) => number,
//   n1: number,
//   n2: number,
//   printResult: boolean,
//   phrase: string | null = null
// ): number | undefined {
//   const result = f(n1, n2);

//   if (printResult) {
//     console.log(phrase! + result);
//   } else {
//     return result;
//   }
// }

// const number1 = 2;
// const number2 = 3.2;
// let number1: number;
// // number1 = '2';
// number1 = 2;
// const number2 = 3.2;
// console.log(add(number1, number2));
// console.log(calcF(add, number1, number2));

// let printFlag = true;
// printResult(add, number1, number2, printFlag, 'Result from f: ');
// // console.log('Result from app: ' + printResult(add, number1, number2, false));
// printFlag = !printFlag;
// console.log(
//   'Result from app: ' + printResult(add, number1, number2, printFlag)
// );

// // const person = {
//   name: 'Peter',
//   age: 42,
// };

// const person: Object = {
//   name: 'Peter',
//   age: 42,
// };

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Peter',
//   age: 42,
// };

// console.log(person.name + ' ' + person.age);
// console.log(`person = ${JSON.stringify(person)}`);

// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!',
//   },
// };
// console.log(product);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Peter',
//   age: 42,
//   hobbies: ['swimming', 'coding'],
//   role: [1, 'author'],
// };

// console.log(person);
// console.log(`person = ${JSON.stringify(person)}`);

// person.hobbies.forEach((hobby) => {
//   console.log(hobby);
// });

// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// person.role[0] = 234;
// person.role[1] = person.role[0] + '-' + person.role[1] + '-!!';
// console.log(person);
// console.log(typeof person.role);

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// enum Role {
//   ADMIN = 1,
//   READ_ONLY,
//   AUTHOR = 15,
// }

// enum Role {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 'READ+ONLY',
//   AUTHOR = 1,
//   PUBLSIHER = 'PUBLSIHER',
// }
// console.log(Role.ADMIN);
// console.log(Role.READ_ONLY);
// console.log(Role.AUTHOR);
// console.log(Role.PUBLSIHER);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: Role;
// } = {
//   name: 'Peter',
//   age: 42,
//   hobbies: ['swimming', 'coding'],
//   role: Role.ADMIN,
// };
// console.log(person);

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-string'
// ) {
//   let result: number | string;

//   if (
//     typeof input1 === 'number' &&
//     typeof input2 === 'number' &&
//     resultConversion === 'as-number'
//   ) {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-string';
// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ): Combinable {
//   let result: number | string;

//   if (
//     typeof input1 === 'number' &&
//     typeof input2 === 'number' &&
//     resultConversion === 'as-number'
//   ) {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// let combineValues: (
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) => Combinable;

// combineValues = combine;

// console.log(combine(1, 2, 'as-number'));
// console.log(combine('Hello', ' World', 'as-string'));
// console.log(combineValues(5, 2, 'as-number'));
