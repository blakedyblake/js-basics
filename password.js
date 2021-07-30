console.log("Welcome to the validator tool")
let answer = ""
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let success ="Good Job"

    let arr;
    reader.question("Type your password(10+ characters please)",function(password){
        arr = password.split("");
        answer = arr.length > 9 ?  success : "Not long enough try again"
        console.log(answer)
    });

