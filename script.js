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
console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt('Please choose between rock, paper and scissors.').toLowerCase()
    if (!(choice == 'rock' || choice == 'paper' || choice == 'scissors')){
        return choice = getHumanChoice()
    }
    else{
        return choice;
    }
}


let humanscore = 0;
let computerscore = 0;

function playRound (humanChoice, computerChoice){

}