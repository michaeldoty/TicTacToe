
let playerTurn = 'X';

let cell0 = {
  value: 'X',
  hasBeenClicked: false
}

let cell1 = {
  value: 'X',
  hasBeenClicked: false
}
let cell2 = {
  value: 'X',
  hasBeenClicked: false
}
let cell3 = {
  value: 'X',
  hasBeenClicked: false
}
let cell4 = {
  value: 'X',
  hasBeenClicked: false
}
let cell5 = {
  value: 'X',
  hasBeenClicked: false
}


function toggleValue(cellValue) {
  //if player turn is null (player X turn);
  console.log(cellValue);

  if(cellValue === 'cell0') {
    if(cell0.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell0').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell0.value = 'X'
      document.getElementById('cell0').innerHTML = cell0.value;
    } else if (playerTurn === 'O' && document.getElementById('cell0').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell0.value = 'O'
      document.getElementById('cell0').innerHTML = cell0.value;
      }

    cell0.hasBeenClicked = true;
    console.log(cell0.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell1') {
    if(cell1.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell1').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell1.value = 'X'
      document.getElementById('cell1').innerHTML = cell1.value;
    } else if (playerTurn === 'O' && document.getElementById('cell1').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell1.value = 'O'
      document.getElementById('cell1').innerHTML = cell1.value;
      }

    cell1.hasBeenClicked = true;
    console.log(cell1.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell2') {
    if(cell2.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell2').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell2.value = 'X'
      document.getElementById('cell2').innerHTML = cell2.value;
    } else if (playerTurn === 'O' && document.getElementById('cell2').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell2.value = 'O'
      document.getElementById('cell2').innerHTML = cell2.value;
      }

    cell2.hasBeenClicked = true;
    console.log(cell2.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell3') {
    if(cell3.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell3').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell3.value = 'X'
      document.getElementById('cell3').innerHTML = cell3.value;
    } else if (playerTurn === 'O' && document.getElementById('cell3').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell3.value = 'O'
      document.getElementById('cell3').innerHTML = cell3.value;
      }

    cell3.hasBeenClicked = true;
    console.log(cell3.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell4') {
    if(cell4.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell4').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell4.value = 'X'
      document.getElementById('cell4').innerHTML = cell4.value;
    } else if (playerTurn === 'O' && document.getElementById('cell4').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell4.value = 'O'
      document.getElementById('cell4').innerHTML = cell4.value;
      }

    cell4.hasBeenClicked = true;
    console.log(cell4.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell5') {
    if(cell5.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell5').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell5.value = 'X'
      document.getElementById('cell5').innerHTML = cell5.value;
    } else if (playerTurn === 'O' && document.getElementById('cell5').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell5.value = 'O'
      document.getElementById('cell5').innerHTML = cell5.value;
      }

    cell5.hasBeenClicked = true;
    console.log(cell5.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell6') {
    if(cell6.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell6').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell6.value = 'X'
      document.getElementById('cell6').innerHTML = cell6.value;
    } else if (playerTurn === 'O' && document.getElementById('cell6').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell6.value = 'O'
      document.getElementById('cell6').innerHTML = cell6.value;
      }

    cell6.hasBeenClicked = true;
    console.log(cell6.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell7') {
    if(cell7.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell7').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell7.value = 'X'
      document.getElementById('cell7').innerHTML = cell7.value;
    } else if (playerTurn === 'O' && document.getElementById('cell7').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell7.value = 'O'
      document.getElementById('cell7').innerHTML = cell7.value;
      }

    cell7.hasBeenClicked = true;
    console.log(cell7.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

  if(cellValue === 'cell8') {
    if(cell8.hasBeenClicked === true) {
      alert('obviously you cant play there...');
    }
    if(playerTurn === 'X' && document.getElementById('cell8').innerHTML === "") {
      console.log('click');
      playerTurn = 'O'
      cell8.value = 'X'
      document.getElementById('cell8').innerHTML = cell8.value;
    } else if (playerTurn === 'O' && document.getElementById('cell8').innerHTML === "") {
      console.log('click');
      playerTurn = 'X'
      cell8.value = 'O'
      document.getElementById('cell8').innerHTML = cell8.value;
      }

    cell8.hasBeenClicked = true;
    console.log(cell8.hasBeenClicked);
    console.log('player turn', playerTurn);
  }

}






