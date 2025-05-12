playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice().toLowerCase();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        let msg = "";
        let roundWinner = getRoundWinner(humanChoice, computerChoice);
        
        switch (roundWinner) {
            case "tie":
                msg = "It's a tie!";
                break;
            case "human":
                msg = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`
                humanScore++;
                break;
            case "computer":
                msg = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`
                computerScore++;
                break;
        }
        console.log(msg);
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function getRoundWinner(humanChoice, computerChoice) {
    // string to represent what computer needs to play for human to win
    let target = ""
    if (humanChoice == computerChoice) {
        return "tie";
    } else if (humanChoice == "rock") {
        target = "scissors";
    } else if (humanChoice == "paper") {
        target = "rock";
    } else if (humanChoice == "scissors") {
        target = "paper";
    }
    return computerChoice == target ? "human" : "computer"
}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    switch(randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, scissors!");
}