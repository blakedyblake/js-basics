console.log("Welcome to the validator tool")
let answer = ""
let arr = password.split("");
let success ="Good Job"

do{
    let password = prompt("Please type in your password")
    answer = length > 9 ?  success: "Not long enough try again"
}while(answer !== success)
