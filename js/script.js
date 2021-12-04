function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Komputer: ' + argComputerMove + ', Gracz: ' + argPlayerMove)
  if (argComputerMove === argPlayerMove) {
    return 'Remis';
  }
  else if ( (argPlayerMove === 'kamień' && argComputerMove === 'papier') || (argPlayerMove === 'papier' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'kamień') ) {
    return 'Komputer wygrał.';
  }
  else {
    return 'Gracz wygrał.';
  }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Komputer wylosował: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Komputer gra ' + computerMove);

/*
let computerMove = 'nieznany ruch';

if (randomNumber === 1) {
  computerMove = 'kamień';
}
else if (randomNumber === 2) {
  computerMove = 'papier';
}
else if (randomNumber === 3) {
  computerMove = 'nożyce';
}
*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log('Gracz gra ' + playerMove);

/*
let playerMove = 'nieznany ruch';

if(playerInput === '1') {
  playerMove = 'kamień';
}
else if (playerInput === '2') {
  playerMove = 'papier';
}
else if (playerInput === '3') {
  playerMove = 'nożyce';
}
*/

if ( (playerMove != 'nieznany ruch') ) { 
  let result = displayResult(computerMove, playerMove);
  printMessage(result);
}

/*
if (playerMove === 'nieznany ruch') {
  printMessage('Zły input, wpisz 1, 2 lub 3');
}
else {
  if (playerMove === computerMove) {
    result = 'Remis';
  }
  else if ( (playerMove === 'kamień' && computerMove === 'papier') || (playerMove === 'papier' && computerMove === 'nożyce') || (playerMove === 'nożyce' && computerMove === 'kamień') ) {
    result = 'Komputer wygrał';
  }
  else {
    result = 'Gracz wygrał';
  }
}
*/
