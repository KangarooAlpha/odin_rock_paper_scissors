function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    if (choice == 0){
        console.log("rock")
        return ("rock")
    }
    else if (choice == 1){
        console.log(paper)
        return ("paper")
    }
    else {
        return ("scissors")
    }
}

const buttons = document.querySelectorAll("button") 

let humanscore = 0;
let computerscore = 0;

function getHumanChoice(){
    rockBtn.addEventListener("click", ()=> {
        console.log(rockBtn.id)
        playMatch("rock",getComputerChoice())
    });
    paperBtn.addEventListener("click" , () => {
        playMatch("paper",getComputerChoice())
    });
    scissorsBtn.addEventListener("click" , ()=> {
        playMatch("scissors",getComputerChoice())
    });
    }; 

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

function playMatch(hChoice,cChoice){
        let round = playRound(hChoice,cChoice)
        if (round == 'win'){
            humanscore += 1;
            console.log('rw')
            addToList("You win this round " + hChoice + " beats " + cChoice + ".");
        }
        else if (round == 'lose') {
            computerscore += 1;
            console.log('rl')
            addToList("You lose this round " + cChoice + " beats " + hChoice + ".");
        }
        else if (round == 'draw') {
            console.log('da')
            addToList("This round was a draw!")
        }
    
    if (humanscore >= 5 || computerscore >= 5){
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
}}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector(".container");

function addToList(string){
    const ul = document.createElement("ul");
    const span = document.createElement("span");

    span.textContent = (string)
    console.log(string)
    
    ul.appendChild(span)
    container.appendChild(ul)
}
getHumanChoice()