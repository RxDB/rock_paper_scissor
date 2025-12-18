let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.floor(Math.random()*3)
    return a;
}

function getHumanChoice(){
    let b = prompt('Enter Rock Paper Scissors');
    return b;
}

function playRound(hChoice,computerChoice){
    let humanChoice = hChoice.toLowerCase();

    if(computerChoice==0){
        computerChoice = 'rock';
    }else if(computerChoice==1){
        computerChoice = 'paper';
    }else if(computerChoice==2){
        computerChoice = 'scissor';
    }

    if(humanChoice=='rock' && computerChoice=='paper'){
        computerScore++;
        console.log('Computer Wins');
    }else if(humanChoice=='rock' && computerChoice=='scissor'){
        humanScore++;
        console.log('Human Wins');
    }else if(humanChoice=='paper' && computerChoice=='rock'){
        humanScore++;
        console.log('Human Wins');

    }else if(humanChoice=='paper' && computerChoice=='scissor'){
        computerScore++;
        console.log('Computer Wins');

    }else if(humanChoice=='scissor' && computerChoice=='rock'){
        computerScore++;
        console.log('Computer Wins');
    }else if(humanChoice=='scissor' && computerChoice=='paper'){
        humanScore++;
        console.log('Human Wins');

    }
    

} 

function playGame(){
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}

function showScore(){
    console.log('Human Score',humanScore);
    console.log('ComputerScore',computerScore);
}

playGame();
showScore();

