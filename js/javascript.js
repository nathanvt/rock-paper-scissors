/*const inputBox = document.querySelector('div.choice-box');
const rounds = document.querySelector('.round');
const score = document.querySelector('.score');
const gameDialog = document.querySelector('.gameDialog')
const rockTest = document.querySelector('div.rock');*/

/*rockTest.addEventListener('click', () => {
    alert('Success');
});*/

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rounds = document.getElementById('round');
const score = document.getElementById('score');
const moves = document.getElementById('movesDialog');
const gameDialog = document.getElementById('gameDialog');
const endBox = document.getElementById('endBox');
const restartBtn = document.getElementById('restart');


rock.addEventListener('click', () => clickAction ('Rock'));
paper.addEventListener('click', () => clickAction ('Paper'));
scissors.addEventListener('click', () => clickAction ('Scissors'));
restartBtn.addEventListener('click', () => newGame());


let choice = ['Rock','Paper','Scissors'];
let playerScore = 0;
let compScore = 0;
let round = 0;
let winner = '';


function countRound(){
    round++
    rounds.innerText = `Round: ${round}`;
    return round;
}

function getRandomChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}; 

function playRound(getComputerChoice, getPlayerChoice){

    if (getComputerChoice === getPlayerChoice) { 
        winner = 'tie'
    } else if (
        (getComputerChoice === 'Rock' && getPlayerChoice === 'Scissors') || 
        (getComputerChoice === 'Scissors' && getPlayerChoice === 'Paper') ||
        (getComputerChoice === 'Paper' && getPlayerChoice === 'Rock')) {
        compScore++
        winner = 'computer'
    } else {
        playerScore++
        winner = 'player'
    }
    updateScore(winner, getComputerChoice, getPlayerChoice);

}

function clickAction(getPlayerChoice) {
    if (isGameOver()) {
        end(playerScore, compScore);
        return
    }

    const getComputerChoice = getRandomChoice();
    playRound(getComputerChoice, getPlayerChoice);
    recordSelections(getComputerChoice, getPlayerChoice);
    updateScore();
    countRound();

    if (debug()) {
    console.log('');
    console.log('Player: ' + getPlayerChoice);
    console.log('Computer: ' + getComputerChoice);
    console.log('Winner: ' + winner);
    }

    if (isGameOver()) {
        end(playerScore, compScore);
        showRestart();
    }
}
 function recordSelections(getComputerChoice, getPlayerChoice) {
    moves.innerText =`You played ${getPlayerChoice}... Computer played ${getComputerChoice}`;
 }


function updateScore(winner) {    
    if (winner === 'player') {
        gameDialog.innerText = 'You won this round!'
    } else if (winner === 'computer') { 
        gameDialog.innerText = 'You lost this round...'
    } else if (winner === 'tie') {
        gameDialog.innerText = `It's a tie`
    };
    score.innerText = `Player: ${playerScore} | Computer: ${compScore}`;
}

function isGameOver() {
    return playerScore === 5 || compScore === 5
}

function end(playerScore,compScore) {
    (playerScore >= compScore) ? (gameDialog.innerText = 'You win! 😊') : (gameDialog.innerText = 'You lost 🙁');
    //console.log(playerScore + ' -- ' + compScore);
}

function showRestart() {
    endBox.classList.remove('hidden');
}


function newGame() {
    endBox.classList.add('hidden');
    score.innerText = 'Player: 0 | Computer: 0';
    rounds.innerText = 'Round: 0';
    playerScore = 0;
    compScore = 0;
    round = 0;
    winner = '';
    moves.innerText = 'Select a move to begin';
    gameDialog.innerText = '';
}

console.log('\n\n*********************\n\n Rock Paper Scissors \n\n*********************\n\n')

// Debugging
function debug(){
    return false // Make 'true' to turn on console logs
}
