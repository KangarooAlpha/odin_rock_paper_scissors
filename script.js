function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    return (choice)
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
console.log(getHumanChoice())