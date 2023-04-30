function getComputerChoice(){
    validChoices = ['rock','paper','scissors']
    const n = Math.floor(Math.random()*3)

    return validChoices[n]
}

function getUserChoice(){
    validChoices = ['rock','paper','scissors']

    do {
        var uchoice = prompt("Enter age: ").toLowerCase() 
    } while(!validChoices.includes(uchoice))

    return uchoice
}

function playRound(uchoice, pchoice){
    let userscore = 0
    let compscore = 0  

    for (let i=0; i < 5; i++){
        let uchoice = getUserChoice()
        let cchoice = getComputerChoice()

        if ( (uchoice === "rock" && cchoice === "scissors") || (uchoice === "scissors" && cchoice === "paper") || (uchoice === "paper" && cchoice === "rock") ) {
            userscore++
            console.log('won')
        }
        else if (uchoice === compscore){          
            console.log('tie')  
        }
        else {
            compscore++
            console.log('lost')
        }
    }

    result = userscore > compscore ? "User Won!" : "Computer Won!"
    console.log(result)
}

playRound(getUserChoice(), getComputerChoice())