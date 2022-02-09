const prompt = require("prompt-sync")()

let userString = prompt("What string would you like to repeat? ")

let newString = userString

console.log(newString)

while (newString.length < 10){
    newString += userString
    console.log(newString)
}