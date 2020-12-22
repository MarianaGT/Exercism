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
