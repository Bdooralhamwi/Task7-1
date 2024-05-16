const input = prompt("Enter one number");
let output = "";

for (let i = 1; i <= 12; i++) {
  output += i * input + " ";
}
console.log(output);
