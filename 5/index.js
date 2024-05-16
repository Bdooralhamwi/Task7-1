let input = prompt("Enter five marks with the form of: 10 20 30 40 50");
input = input.split(" ");
let total = 0;

for (let i = 0; i < 5; i++) {
  total += input[i] * 1;
}

console.log("Total marks = " + total);
console.log("Avarage marks = " + total / 5);
console.log("Percentage = " + total / 5);
