/* START

INPUT user choice of move: sten, sax or påse.
RANDOM move from computer: sten, sax or påse.

set VALUE of sten, sax or påse.

IF sten meets sax, THEN sten wins. 
IF sten meets påse, THEN påse wins.
IF sax meets påse THEN sax wins.

ELSE is a tie.

CALCULATE which is the winner - user or computer.
PRINT 'winner is ...'


END
/*

let userMove = sten;
let computerMove = påse;

const stenWins = sten > sax;
const påseWins = påse > sten;
const saxWins = sax > påse;

if (userMove > computerMove) {
    console.log('User wins!');
} else if (userMove < computerMove) {
    console.log('Computer wins!');
} else {
    console.log('Its a tie! Try again')
}
const userChoice =  [buttonRock, buttonPaper, buttonScissors];
*/

const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');


buttonRock.addEventListener('click', () => {
    console.log('you chose rock');
    

const computerChoice = Math.floor(Math.random() * 10);  // Returns a random integer from 0 to 9.
    console.log('computer chose ' + computerChoice);


    if (computerChoice <= 3) {
        console.log('Rock');
    } else if (computerChoice > 6) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }


    if (buttonRock && computerChoice >6){
        console.log('Computer won');
       }  else if (buttonRock && computerChoice == 4 || 5 ||6){
        console.log('You won!');
        }else if (buttonScissors && computerChoice >6){
        console.log('You won!');
        } else if (buttonScissors && computerChoice <=3){
        console.log('Computer won');
        } else if (buttonPaper && computerChoice == 4 || 5 ||6 ){
            console.log('Computer won');
        }  else if (buttonPaper && computerChoice <=3){
            console.log('You won!');
        } else {
        console.log('It is a tie!');
       }
});

buttonPaper.addEventListener('click', () => {
    console.log('you chose paper');

    const computerChoice = Math.floor(Math.random() * 10);  // Returns a random integer from 0 to 9.
    console.log('computer chose ' + computerChoice);


    if (computerChoice <= 3) {
        console.log('Rock');
    } else if (computerChoice > 6) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }


    if (buttonRock && computerChoice >6){
        console.log('Computer won');
       }  else if (buttonRock && computerChoice === 4 || 5 ||6){
        console.log('You won!');
        }else if (buttonScissors && computerChoice >6){
        console.log('You won!');
        } else if (buttonScissors && computerChoice <=3){
        console.log('Computer won');
        } else if (buttonPaper && computerChoice === 4 || 5 ||6 ){
            console.log('Computer won');
        }  else if (buttonPaper && computerChoice <=3){
            console.log('You won!');
        } else {
        console.log('It is a tie!');
       }
});

buttonScissors.addEventListener('click', () => {
    console.log('you chose scissors');

    const computerChoice = Math.floor(Math.random() * 10);  // Returns a random integer from 0 to 9.
    console.log('computer chose ' + computerChoice);


    if (computerChoice <= 3) {
        console.log('Rock');
    } else if (computerChoice > 6) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }


    if (buttonRock && computerChoice >6){
        console.log('Computer won');
       }  else if (buttonRock && computerChoice === 4 || 5 ||6){
        console.log('You won!');
        }else if (buttonScissors && computerChoice >6){
        console.log('You won!');
        } else if (buttonScissors && computerChoice <=3){
        console.log('Computer won');
        } else if (buttonPaper && computerChoice === 4 || 5 ||6 ){
            console.log('Computer won');
        }  else if (buttonPaper && computerChoice <=3){
            console.log('You won!');
        } else {
        console.log('It is a tie!');
       }
});
