{
  const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
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

    const displayResult = function(argComputerMove, argPlayerMove) {
      printMessage('Komputer: ' + argComputerMove + ', Gracz: ' + argPlayerMove)
      if (argComputerMove === argPlayerMove) {
        return 'Remis';
      } else if ((argPlayerMove === 'kamień' && argComputerMove === 'papier') || (argPlayerMove === 'papier' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'kamień')) {
        return 'Komputer wygrał.';
      }

      return 'Gracz wygrał.';
    }


    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Komputer wylosował: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log('Komputer gra ' + computerMove);

    const playerMove = getMoveName(playerInput);
    console.log('Gracz gra ' + playerMove);

    if ((playerMove !== 'nieznany ruch')) {
      const result = displayResult(computerMove, playerMove);
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

}
