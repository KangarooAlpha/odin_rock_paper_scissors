function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    if (choice == 0){
        return ("rock")
    }
    else if (choice == 1){
        return ("paper")
    }
    else {
        return ("scissors")
    }
}


function getHumanChoice(){
    let choice = prompt('Please choose between rock, paper and scissors.').toLowerCase()
    if (!(choice == 'rock' || choice == 'paper' || choice == 'scissors')){
        return (choice = getHumanChoice())
    }
    return choice 
}

let humanscore = 0;
let computerscore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        return ("draw")
    }
    else if (humanChoice == "rock" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "rock") {
        return ("lose")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
            return ("win")
        }
}

let hChoice = getHumanChoice()
let cChoice = getComputerChoice()

console.log(hChoice)
console.log(cChoice)

console.log(playRound(hChoice,cChoice))

