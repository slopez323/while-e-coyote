const prompt = require("prompt-sync")()

num = +prompt("Enter a number: ")

if (num > 0) {
while (num < 100){
    console.log(num)
    num *= 2
}
console.log(num)
} else {
    console.log("Input a valid number.")
}