function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Komputer: ' + argComputerMove + ', Gracz: ' + argPlayerMove)
    if (argComputerMove === argPlayerMove) {
      return 'Remis';
    } else if ((argPlayerMove === 'kamień' && argComputerMove === 'papier') || (argPlayerMove === 'papier' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'kamień')) {
      return 'Komputer wygrał.';
    }

    return 'Gracz wygrał.';
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Komputer wylosował: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  console.log('Komputer gra ' + computerMove);

//  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);
  console.log('Gracz gra ' + playerMove);

  if ((playerMove !== 'nieznany ruch')) {
    let result = displayResult(computerMove, playerMove);
    printMessage(result);
  }

}


document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});
