const prompt = require("prompt-sync")()

let x = +prompt("Enter x: ")
let y = +prompt("Enter y: ")

if (Math.abs(x) > 0 && Math.abs(y) > 0){
while (x % y !== 0){
    console.log(x)
    x++
}

console.log(`${x} is divisible by ${y}.`)
} else {
    console.log("Invalid input.")
}