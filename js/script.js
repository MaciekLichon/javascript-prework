let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

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

printMessage('Komputer: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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

printMessage('Gracz: ' + playerMove);


let result = '';

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
    result = 'Gracz wygrał'
  }
}

printMessage(result)
