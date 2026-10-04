function greet(name) {
  return `Hello, ${name}!`;
}

const userName = 'World';
console.log(greet(userName));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log('Doubled numbers:', doubled);
