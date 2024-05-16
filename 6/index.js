let input = prompt("Enter five marks with the form of: 10 20 30 40 50");
input = input.split(" ");
let total = 0;

for (let i = 0; i < 5; i++) {
  total += input[i] * 1;
}
const percentage = total / 5;

if (percentage >= 90) {
  console.log("A");
} else if (percentage >= 80) {
  console.log("B");
} else if (percentage >= 70) {
  console.log("C");
} else if (percentage >= 60) {
  console.log("D");
} else if (percentage >= 40) {
  console.log("E");
} else {
  console.log("F");
}
