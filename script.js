let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What do you play? Type \"rock\", \"paper\" or \"scissors\".")

    return humanChoice.toLowerCase();
}

function playGame(){

    function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log(`It's a tie! You both played ${computerChoice}.`);
    } else if (humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper" || 
        humanChoice == "rock" && computerChoice == "scissors"
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        }
    }

    for(let i=0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore > computerScore){
        console.log(`Congratulations! You won. ${humanScore} : ${computerScore}.`);
    } else if (humanScore == computerScore){
        console.log(`It's a tie! ${humanScore} : ${computerScore}.`)
    } else {
        console.log(`The computer has won. ${computerScore} : ${humanScore}.`);
    }

}

//playGame();