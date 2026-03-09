1. What is the difference between var, let, and const?

Answer:
var, let, and const are used to declare variables in JavaScript. The main difference is their scope and whether they can be changed later.

var is function scoped and it can be redeclared and updated.
let is block scoped and it can be updated but cannot be redeclared in the same scope.
const is also block scoped but it cannot be updated or redeclared after it is declared.

Example: var a = 10, then var a = 20 is allowed.
With let: let b = 10, then b = 15 is allowed but let b = 20 again in the same scope is not allowed.
With const: const c = 10 and trying to change it later like c = 20 will cause an error.

2. What is the spread operator (...)?

Answer:
The spread operator (...) is used to expand or copy elements of an array or properties of an object. It helps combine arrays or objects easily.

Example: If we have an array arr1 = [1, 2, 3], we can create another array like arr2 = [...arr1, 4, 5]. The new array will become [1, 2, 3, 4, 5].

It can also be used with objects. For example: obj1 = {name: "Rahim"} and obj2 = {...obj1, age: 20}. Now obj2 contains both name and age.

3. What is the difference between map(), filter(), and forEach()?

Answer:
map(), filter(), and forEach() are array methods used to work with array elements, but they behave differently.

map() creates a new array by transforming every element of the original array.
filter() creates a new array that contains only the elements that match a certain condition.
forEach() simply runs a function for every element of the array but does not return a new array.

Example: If we have numbers = [1, 2, 3, 4], map can be used to double the numbers like numbers.map(n => n * 2). filter can be used to get even numbers like numbers.filter(n => n % 2 === 0). forEach can be used to print each number like numbers.forEach(n => console.log(n)).

4. What is an arrow function?

Answer:
An arrow function is a shorter and modern way to write functions in JavaScript. It uses the arrow symbol (=>) instead of the traditional function keyword.

Example: A normal function looks like this: function add(a, b) { return a + b }.
The same function using an arrow function can be written as: const add = (a, b) => a + b.

Arrow functions make the code shorter and easier to read.

5. What are template literals?

Answer:
Template literals are used to create strings that can include variables or expressions inside them. They use backticks ( ) instead of single or double quotes.

Example: If we have a variable name = "Rahim", we can write a string like this: Hello ${name}. The variable value will automatically be inserted into the string.

So if name = "Rahim", the result will be Hello Rahim. Template literals make it easier to combine strings and variables.