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

function getHumanChoice(){
    rockBtn.addEventListener("click", ()=> {
        console.log(rockBtn.id)
        return (rockBtn.id)
    });
    paperBtn.addEventListener("click" , () => {
        return (paperBtn.id)
    });
    scissorsBtn.addEventListener("click" , ()=> {
        return (scissorsBtn.id)
    });
    }; 
     
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
    //while(humanscore < 5 && computerscore < 5) {
    for (let i = 0; i < 5; i++){
        //let hChoice = getHumanChoice()
        //let cChoice = getComputerChoice()
        let round = playRound(getHumanChoice(),getComputerChoice())
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
}
}

const container = document.querySelector(".container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const ul = document.createAttribute("ul");

function addToList(string){
    var ul = document.createAttribute("ul");
    var span = document.createAttribute("span");

    span.textContent = (string)
    console.log(string)
    
    ul.appendChild(span)
    container.appendChild(ul)
}

playMatch()