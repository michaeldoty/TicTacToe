window.onload = function() {
  document.getElementById('scoreX').innerHTML = `X: ${xWins}`;
  document.getElementById('scoreO').innerHTML = `O: ${oWins}`;

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

let isWinner = false;
let playerTurn = 'X';
let oWins = 0;
let xWins = 0;

let cell0 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell1 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell2 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell3 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell4 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell5 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell6 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell7 = {
  value: 'empty',
  hasBeenClicked: false
}
let cell8 = {
  value: 'empty',
  hasBeenClicked: false
}

function toggleValue(cellValue) {
  console.log(cellValue);

  if(cellValue === 'cell0') {
    if(cell0.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell0').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell0.value = 'X'
      document.getElementById('cell0').innerHTML = cell0.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell0').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell0.value = 'O'
      document.getElementById('cell0').innerHTML = cell0.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell0.hasBeenClicked = true;

    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell1') {
    if(cell1.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell1').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell1.value = 'X'
      document.getElementById('cell1').innerHTML = cell1.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell1').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell1.value = 'O'
      document.getElementById('cell1').innerHTML = cell1.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell1.hasBeenClicked = true;
    console.log(cell1.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell2') {
    if(cell2.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell2').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell2.value = 'X'
      document.getElementById('cell2').innerHTML = cell2.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell2').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell2.value = 'O'
      document.getElementById('cell2').innerHTML = cell2.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell2.hasBeenClicked = true;
    console.log(cell2.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell3') {
    if(cell3.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell3').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell3.value = 'X'
      document.getElementById('cell3').innerHTML = cell3.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell3').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell3.value = 'O'
      document.getElementById('cell3').innerHTML = cell3.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell3.hasBeenClicked = true;
    console.log(cell3.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell4') {
    if(cell4.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell4').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell4.value = 'X'
      document.getElementById('cell4').innerHTML = cell4.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell4').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell4.value = 'O'
      document.getElementById('cell4').innerHTML = cell4.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell4.hasBeenClicked = true;
    console.log(cell4.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell5') {
    if(cell5.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell5').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell5.value = 'X'
      document.getElementById('cell5').innerHTML = cell5.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell5').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell5.value = 'O'
      document.getElementById('cell5').innerHTML = cell5.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell5.hasBeenClicked = true;
    console.log(cell5.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell6') {
    if(cell6.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell6').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell6.value = 'X'
      document.getElementById('cell6').innerHTML = cell6.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell6').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell6.value = 'O'
      document.getElementById('cell6').innerHTML = cell6.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell6.hasBeenClicked = true;
    console.log(cell6.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell7') {
    if(cell7.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell7').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell7.value = 'X'
      document.getElementById('cell7').innerHTML = cell7.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell7').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell7.value = 'O'
      document.getElementById('cell7').innerHTML = cell7.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell7.hasBeenClicked = true;
    console.log(cell7.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell8') {
    if(cell8.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell8').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'O'
      cell8.value = 'X'
      document.getElementById('cell8').innerHTML = cell8.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
    } else if (playerTurn === 'O' && document.getElementById('cell8').innerHTML === "" && isWinner === false) {
      console.log('click');
      playerTurn = 'X'
      cell8.value = 'O'
      document.getElementById('cell8').innerHTML = cell8.value;
      document.getElementById('turn').innerHTML = `${playerTurn}'s Turn`;
      }

    cell8.hasBeenClicked = true;
    console.log(cell8.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  checkWinner();
}

let checkWinner = () => {
  if(isWinner === true) {
    winner = '';
      if(playerTurn === 'X') {
        winner = 'O';
      } else {
        winner = 'X';
      }
      alert(`${winner} has already won!  Reset the game!`)
    }

  if(cell0.value === cell1.value && cell0.value === cell2.value && cell0.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell3.value === cell4.value && cell3.value === cell5.value && cell3.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell6.value === cell7.value && cell6.value === cell8.value && cell6.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell0.value === cell3.value && cell0.value === cell6.value && cell0.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell1.value === cell4.value && cell1.value === cell7.value && cell1.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell2.value === cell5.value && cell2.value === cell8.value && cell2.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell0.value === cell4.value && cell0.value === cell8.value && cell0.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if(cell2.value === cell4.value && cell2.value === cell6.value && cell2.value !== 'empty') {
    isWinner = true;
  } else {
    console.log('no winner yet');
  }

  if (isWinner === true) {
    winner = '';
    if(playerTurn === 'X') {
      winner = 'O';
    } else {
      winner = 'X';
    }
    if(winner === 'X') {
      console.log('winner', winner)
      xWins = xWins + 1;
      document.getElementById('scoreX').innerHTML = `X: ${xWins}`;
    } else {
      oWins = oWins + 1;
      document.getElementById('scoreO').innerHTML = `O: ${oWins}`;
    }
    setTimeout(function() {alert(`${winner} WINS! \n Reset and Play Again`);}, 100);
  }

  if(cell0.value !== 'empty' && cell1.value !== 'empty' && cell2.value !== 'empty' && cell3.value !== 'empty' && cell4.value !== 'empty' && cell5.value !== 'empty' && cell6.value !== 'empty' && cell7.value !== 'empty' && cell8.value !== 'empty') {
    setTimeout(function() {alert('CATS GAME!! \n Why do they call it that?');}, 100);
  }


}


let reset = () => {
  document.getElementById('cell0').innerHTML = '';
  cell0.value = 'empty';
  cell0.hasBeenClicked = false;
  document.getElementById('cell1').innerHTML = '';
  cell1.value = 'empty';
  cell1.hasBeenClicked = false;
  document.getElementById('cell2').innerHTML = '';
  cell2.value = 'empty';
  cell2.hasBeenClicked = false;
  document.getElementById('cell3').innerHTML = '';
  cell3.value = 'empty';
  cell3.hasBeenClicked = false;
  document.getElementById('cell4').innerHTML = '';
  cell4.value = 'empty';
  cell4.hasBeenClicked = false;
  document.getElementById('cell5').innerHTML = '';
  cell5.value = 'empty';
  cell5.hasBeenClicked = false;
  document.getElementById('cell6').innerHTML = '';
  cell6.value = 'empty';
  cell6.hasBeenClicked = false;
  document.getElementById('cell7').innerHTML = '';
  cell7.value = 'empty';
  cell7.hasBeenClicked = false;
  document.getElementById('cell8').innerHTML = '';
  cell8.value = 'empty';
  cell8.hasBeenClicked = false;
  isWinner = false;
}


