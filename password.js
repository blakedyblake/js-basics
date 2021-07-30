console.log("Welcome to the validator tool")
let answer = ""

let success ="Good Job"

do{
    let password = prompt("Please type in your password")
    let arr = password.split("");
    answer = arr.length > 9 ?  success : "Not long enough try again"
}while(answer !== success)
