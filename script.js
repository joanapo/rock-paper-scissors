// Player scores
let humanScore = 0;
let computerScore = 0;

// DOM elements
const resultElement = document.getElementById("result-text");
const choices = document.querySelectorAll("img");
const scoreElement = document.getElementById("score");

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

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    if (humanScore < 5 && computerScore < 5){
        if (humanChoice == computerChoice){
            resultElement.innerText = `It's a tie! You both played ${computerChoice}.`;
        } else if (humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper" || 
            humanChoice == "rock" && computerChoice == "scissors"
        ){
            resultElement.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            resultElement.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            }
        let score = `Score ${humanScore}:${computerScore}`;
        scoreElement.innerText = score;
        } else {
        if (humanScore > computerScore){
        resultElement.innerText = `Congratulations! You won. ${humanScore} : ${computerScore}.`;
    }   else if (humanScore == computerScore){
        resultElement.innerText = `It's a tie! ${humanScore} : ${computerScore}.`;
    }   else {
        resultElement.innerText = `The computer has won. ${humanScore} : ${computerScore}.`;
    }
    }
};


choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                playRound(choice.alt);
            });
        });