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
    while(humanscore < 5 && computerscore < 5) {
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();
        let round = playRound(hChoice,cChoice)
        if (round == 'win'){
            humanscore += 1;
            addToList("You win this round " + hChoice + " beats " + cChoice + ".");
        }
        else if (round == 'lose') {
            computerscore += 1;
            addToList("You lose this round " + cChoice + " beats " + hChoice + ".");
        }
        else if (round == 'draw') {
            addToList("This round was a draw!")
        }
    }
    if (humanscore > computerscore) {
        addToList("Congrats you won this match! Your score was " + humanscore + " while " +
            "the computer scored " + computerscore)
    }
    else if (computerscore > humanscore) {
        addToList("You lost this match! Your score was " + humanscore + " while " +
            "the computer scored " + computerscore)
    }
    else if (computerscore == humanscore){
        addToList("This round was tie! You and the computer both score " + humanscore)
    }
}

const container = document.querySelector(".container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function addToList(string){
    var ul = document.createAttribute("ul");
    var span = document.createAttribute("span");

    span.textContent = (string)
    
    ul.appendChild(span);
    container.appendChild(ul);
}



