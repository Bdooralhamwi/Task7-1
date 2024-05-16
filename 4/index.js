const input = prompt("Enter one number");
let output = " ";
for (let i = 1; i < input; i++) {
  if (i % 2 == 0) {
    output += i + " ";
  }
}
console.log(output);
