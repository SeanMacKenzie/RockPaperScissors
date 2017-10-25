function play(playerChoice){
    
    var computerChoice = Math.random()
    if (computerChoice < 0.33){
        computerChoice = 'rock';
    }else if (computerChoice <= 0.66){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log(computerChoice)
        
    
    if (playerChoice === computerChoice) {
        alert('Computer made the same choice. Tie!');
    } else if (playerChoice == 'rock') {
        if (computerChoice == 'scissors') {
            alert('Computer chose Scissors. You Win!');
        } else {
            alert('Computer chose Paper. You Lose!');
        };
    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'paper') {
            alert('Computer chose paper. You Win!');
        } else {
            alert('Computer chose rock. You Lose!');
        };
    } else if (playerChoice == 'paper') {
        
        if (computerChoice == 'rock') {
            alert('Computer chose rock. You Win!')
        } else {
            alert('Computer chose scissors. You Lose!')
        };
    }
    
}



