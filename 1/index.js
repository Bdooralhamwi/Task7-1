let input = prompt("Enter 3 numbers with the form of: 1,2,3");
input = input.split(",");

console.log("max element = " + Math.max(...input));
console.log("min element = " + Math.min(...input));
