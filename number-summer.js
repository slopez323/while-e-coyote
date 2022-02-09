const prompt = require("prompt-sync")()

let input = 0
let add = 0

while (input !== "done"){
    add += +input
    input = prompt(`Keep inputting numbers you want to add.  When done, input 'done'. `)
    if (input == "done"){
    } else if (isNaN(+input)){
        break
    }
}

if (input == "done"){
    console.log(`Your total is ${add}.`)
 } else {
     console.log("error")
 }