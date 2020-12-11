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
