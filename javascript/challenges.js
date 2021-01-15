// Create a function that takes an array containing only numbers and return the first element
function getFirstValue(arr) {
  return arr[0];
}

// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
  return a + b;
}

//Write a function that converts hours into seconds.
function howManySeconds(hours) {
  return hours * 3600;
}

//Write a function that takes an integer minutes and converts it to seconds
function convert(minutes) {
  return minutes * 60;
}

// Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
  return (length * 2) + (width * 2);
}

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/* You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
Create a function that returns whether the first array is slightly superior to that of the second. */
function isFirstSuperior(arr1, arr2) {
  return arr1.join() > arr2.join() === true;
}

/* Create a method in the Person class which returns how another person's age compares.
Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
return a sentence in the following format:
{other person name} is {older than / younger than / the same age as} me.*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

/* Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th)
and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.*/
function timeForMilkAndCookies(date) {
  return (date.getMonth() === 11) && (date.getDate() === 24);
}

/* Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Introduction to high order functions*/
function whichIsLarger(f, g) {
  if (f() > g()){
    return 'f';
  } else if (f() < g()) {
    return 'g';
  } else {
    return 'neither';
  }
}

function whichIsLarger(f, g) {
  return f() > g() ? 'f'
    : g() > f() ? 'g'
    : 'neither'
}

/* Create a function which returns the number of true values there are in an array.
Return 0 if given an empty array.*/
function countTrue(arr) {
  return arr.filter(element => element).length;
}

function countTrue(arr) {
  return arr.filter(Boolean).length;
}

/* Create a function that will take a HEX number and returns the binary equivalent (as a string).*/
function toBinary(num) {
  return num.toString(2);
}

/*Create a function that returns true if the first array can be nested inside the second.
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/
function canNest(arr1, arr2) {
  return Math.min(arr2) < Math.min(arr1) ? true
    : Math.max(arr1) < Math.max(arr2) ? true
    : false
}

// Basic counter
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// Basic counter with sum and range
console.log(sum(range(1, 10)));

//Escaping the character and template literal with backtick-quoted strings
`This is the first line\nAnd this is the second`
`half of 100 is ${100 / 2}`

//typeof operator > returns your type of value (unary operator)
console.log(typeof 4.5) → number

// Odd JavaScript behaviour with “wrong” types of values > type coercion
console.log(8 * null) → 0
console.log("5" - 1) → 4
console.log("5" + 1) → 51
console.log("five" * 2) → NaN
console.log(false == 0) → true

// Test whether a value has a real value instead of null or undefined
console.log(null == 0); → false

// fall back on a default value
console.log(null || "user") → user

// Multiple bindings or variables in one statement
let one = 1, two = 2;
console.log(one + two);
// → 3

/*Reserved keywords
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield*/

// “unless theNumber is not-a-number, do this” expression
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

// Chain conditional statements proper syntax
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// Calculate all even numbers up to 12 with a 'while' loop
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

/* This program is exactly equivalent to the earlier even-number-printing example.
The only change is that all the statements that are related to the “state” of the
loop are grouped together after for.
The part before the first semicolon initializes the loop, usually by defining a binding.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration.*/
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// Calculate and show the value of 2 to the 10th power with a 'while' loop
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

// Calculate and show the value of 2 to the 10th power with a 'for' loop
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);

/* This program will force you to enter a name. It will ask again and again until
it gets something that is not an empty string. Applying the ! operator will convert
a value to Boolean type before negating it, and all strings except "" convert to
true. This means the loop continues going round until you provide a non-empty name*/
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

/* This program illustrates the break statement. It finds the first number that is
both greater than or equal to 20 and divisible by 7. The for construct in the example
does not have a part that checks for the end of the loop. This means that the loop
will never stop unless the break statement inside is executed.*/
for (let current = 20; ; current += 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

// For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.

// Switch construct
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

// Write a loop that makes seven calls to console.log to output the following triangle:
let result = '#';
for (let counter = 0; counter < 7; counter += 1) {
  console.log(result); result += '#';
}

/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
divisible by only one of those). */
for (let num = 1; num <= 100; num += 1) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz")
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

/*Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this: */
let grid = " " + "#"
let size = 8
for (let counter = 0; counter < size; counter += 1) {
  console.log(grid.repeat(size/2));
}

let chars = "ab"
let size = 8
let grid = size * size
let result = chars.repeat(grid)

if (result.length > size) {
  chars + "\n";
}
console.log(result);


let size = 8
for (let grid = " " + "#"; grid.length > size; grid + "\n") {
  console.log(grid.repeat(size * size));
}
