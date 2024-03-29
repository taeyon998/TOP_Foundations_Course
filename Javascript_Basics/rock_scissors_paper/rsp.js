let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let numPlayed = 0
let scoreToReach = 5;

const rockBtn = document.querySelector('#b_rock')
const paperBtn = document.querySelector('#b_scissors')
const scissorsBtn = document.querySelector('#b_paper')
const resultDiv = document.querySelector("#result")
const playerSc = document.querySelector("#player")
const computerSc = document.querySelector("#computer")

rockBtn.addEventListener('click', () => {
    if (!isGameOver){
        playRound("rock", getComputerChoice());
    }
});

paperBtn.addEventListener('click', () => {
    if (!isGameOver){
        playRound("paper", getComputerChoice());
    }
});

scissorsBtn.addEventListener('click', () => {
    if (!isGameOver){
        playRound("scissors", getComputerChoice());
    }
});




function playRound(uchoice, cchoice) {
    if ((uchoice === "rock" && cchoice === "scissors") || (uchoice === "scissors" && cchoice === "paper") || (uchoice === "paper" && cchoice === "rock")) {
        playerScore++
        updateResultDiv('Won!')
        playerSc.textContent = playerScore
    }
    else if (uchoice === cchoice) {
        updateResultDiv('Tie!')
    }
    else {
        computerScore++
        updateResultDiv('Lost!')
        computerSc.textContent = computerScore
    }
    numPlayed++

    endGame()
}

function endGame(){
    if (playerScore >= scoreToReach){
        updateResultDiv('Player Won!')
        isGameOver = true
    }
    else if(computerScore >= scoreToReach){
        updateResultDiv('Computer Won!')
        isGameOver = true
    }
}

function updateResultDiv(result) {
    resultDiv.textContent = result;
  }

function getComputerChoice() {
    validChoices = ['rock', 'paper', 'scissors']
    const n = Math.floor(Math.random() * 3)

    return validChoices[n]
}

// function getUserChoice() {
//     validChoices = ['rock', 'paper', 'scissors']

//     do {
//         var uchoice = prompt("Enter age: ").toLowerCase()
//     } while (!validChoices.includes(uchoice))

//     return uchoice
// }

// function playRound(uchoice, pchoice){
//     let userscore = 0
//     let compscore = 0  

//     for (let i=0; i < 5; i++){
//         let uchoice = getUserChoice()
//         let cchoice = getComputerChoice()

//         if ( (uchoice === "rock" && cchoice === "scissors") || (uchoice === "scissors" && cchoice === "paper") || (uchoice === "paper" && cchoice === "rock") ) {
//             userscore++
//             console.log('won')
//         }
//         else if (uchoice === compscore){          
//             console.log('tie')  
//         }
//         else {
//             compscore++
//             console.log('lost')
//         }
//     }

//     result = userscore > compscore ? "User Won!" : "Computer Won!"
//     console.log(result)
// }

// playRound(getUserChoice(), getComputerChoice())