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

function playMatch(){
    for (let i = 1; i < 6; i++) {
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();
        let round = playRound(hChoice,cChoice)
        if (round == 'win'){
            humanscore += 1;
            console.log("You win this round " + hChoice + "beates " + cChoice + ".");
        }
        else if (round == 'lose') {
            computerscore += 1;
            console.log("You lose this round " + cChoice + "beates " + hChoice + ".");
        }
        else if (round == 'draw') {
            console.log("This round was a draw!")
        }
    }
    console.log(humanscore);
    console.log(computerscore);
}

playMatch()