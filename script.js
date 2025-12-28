
let active = false;

function getComputerChoice(){
    let a = Math.floor(Math.random()*3)
    if(a==0){
        a = 'rock';
    }else if(a==1){
        a = 'paper';
    }else if(a==2){
        a = 'scissor';
    }
    return a;
}

function getHumanChoice(){
    let b = prompt('Enter Rock Paper Scissors');
    return b;
}

function playRound(hChoice,computerChoice){
    let humanChoice = hChoice.toLowerCase();

    
    if(humanChoice=='rock' && computerChoice=='paper'){
        changeScore(1);
    }else if(humanChoice=='rock' && computerChoice=='scissor'){
        changeScore(0);
    }else if(humanChoice=='paper' && computerChoice=='rock'){
        changeScore(0);
    }else if(humanChoice=='paper' && computerChoice=='scissor'){
        changeScore(1);
    }else if(humanChoice=='scissor' && computerChoice=='rock'){
        changeScore(1);
    }else if(humanChoice=='scissor' && computerChoice=='paper'){
        changeScore(0);
        
    }
    
    
} 

const gameButtons = document.querySelectorAll(".buttonz button");
const humansvg = document.querySelector(".human-svg img");
const computersvg = document.querySelector(".computer-svg img");
const humanScore = document.querySelector("#hscore");
const computerScore = document.querySelector("#cscore");
const play2 = document.querySelector("#play");

gameButtons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        if(active){

            take = btn.id;
            choice = getComputerChoice();
            playRound(take,choice);
            changePng(take,choice);
            checkWinner();
        }else{
            alert("Start Round first");
        }
    });
});
play2.addEventListener("click",()=>{
    humanScore.innerText = 0;
    computerScore.innerText = 0;

    active = true;
    alert("Game has started")
});

function checkWinner(){
    let score = parseInt(humanScore.innerText);
    let score2 = parseInt(computerScore.innerText);
    if(score>=5) {
        alert("Human Wins");
        humanScore.innerText = 0;
        computerScore.innerText = 0;
    }

    else if(score2>=5){ 
        alert("Computer Wins");
        humanScore.innerText = 0;
        computerScore.innerText = 0;
    }
}
function changeScore(score){
    if(score===0){
        let text = humanScore.innerText;
        let count = parseInt(text) + 1;
        humanScore.innerText = count;

    }
    else if(score===1){
        let text2 = computerScore.innerText;
        let count2 = parseInt(text2) + 1;
        computerScore.innerText = count2;
    }

};

function changePng(id1,id2){
    if(id1==="rock") humansvg.src="rock.png";
    else if(id1==="paper") humansvg.src="hand-paper.png";
    else if(id1==="scissor") humansvg.src="scissors.png";


    if(id2==="rock") computersvg.src="rock.png";
    else if(id2==="paper") computersvg.src="hand-paper.png";
    else if(id2==="scissor") computersvg.src="scissors.png";
}
