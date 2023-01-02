
let choice = ['Rock','Paper','Scissors'];
let playerScore = 0;
let compScore = 0;

function getPlayerInput(){
    a = prompt('Rock, Paper, or Scissors?', '');
        if (a === '') {
            alert(`You didn't type anything.`)
            return 'invalid'
        } else if (a === null) {
            alert(`Game ended :(`)
            return 'cancelGame';
        }
    b = a.substring(0,1).toUpperCase() + a.slice(1).toLowerCase()
        if (choice.indexOf(b) === -1) {
            alert(`${b} isn't a play. Try again!`)
            return 'invalid'
        } else {
            return b
        }
};

function getRandomChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}; 

function playRound(getComputerChoice, getPlayerChoice){

    function results(){

    if (getPlayerChoice === 'invalid') {
        return 'invalid'
    } else if (getComputerChoice === getPlayerChoice) {
        compScore++
        playerScore++
        return 'Tie'
    } else if (
        (getComputerChoice === 'Rock' && getPlayerChoice === 'Scissors') || 
        (getComputerChoice === 'Scissors' && getPlayerChoice === 'Paper') ||
        (getComputerChoice === 'Paper' && getPlayerChoice === 'Rock')) {
        compScore++
        return 'computer'
    } else {
        playerScore++
         return 'player'
    }
    }
    const winner = results();
    
    if (winner === 'invalid') { 
        console.log('You fumbled the play.') 
    } else {
        console.log(`You played ${getPlayerChoice}.`);
        console.log(`Computer played ${getComputerChoice}.`);
    }
    
    (winner === 'player') ? console.log( '%cYou won this round!', 'color:#99ff66') :
    (winner === 'computer') ? console.log( '%cYou lost this round.', 'color:#ff6600' ) :
    (winner === 'invalid') ? console.log( 'Do over.' ) :
    console.log( `%cThis round is a tie.`, 'color:#66ffcc');
    console.log( `Score is ${playerScore} | ${compScore}`);
    console.log('\n');
};

function finalScore(playerScore,compScore) {
    if (playerScore > compScore) {
        console.log(`Final score is ${playerScore} | ${compScore}\n` + '%cYou won!', 'color:#99ff66')
    } else if (playerScore < compScore) {
        console.log(`Final score is ${playerScore} | ${compScore}\n` + '%cComputer wins.', 'color:#ff6600')
    } else if (playerScore === compScore) {
        console.log(`Final score is ${playerScore} | ${compScore}\n` + `%cIt's a draw.`, 'color:#66ffcc') 
    }
};

function game(){

    let player;
    let comp;
    
    for (let turn = 0; turn < 5; turn++) {

        player = getPlayerInput();
        comp = getRandomChoice();

        if (player === 'cancelGame') { 
            break; 
        } else if (player === 'invalid'){
            turn--
        }

        playRound(comp, player);
    }

    (player === 'cancelGame') ?
        console.log('Game ended early.') : finalScore(playerScore,compScore)
    
}

console.log('\n\n*********************\n\n Rock Paper Scissors \n\n*********************\n\n')
game();