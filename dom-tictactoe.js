//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];
let gameover = false;
let move = false;

// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    move = false;
    setTimeout(()=> {
        computerTurn();
    }, 600)
  }
}

const computerTurn = () => {
  if (gameover === false) {
      computerLogic();
      while (move === false) {
          let row = Math.floor(Math.random()*3)
          let col = Math.floor(Math.random()*3)
          if (board[row][col] === '') {
              addMarker(row + '-' + col);
              move = true;
          }
      }
  }
}

const computerLogic = () => {
  //column win
  if (move === false) {
    let colOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[0][i] === 'O' && board[1][i] ==='O') || (board[1][i] === 'O' && board[2][i] ==='O') || (board[0][i] === 'O' && board[2][i] ==='O')) {
        colOfX = i;
        for(let x = 0; x < 3; x++) {
        let col = colOfX;
        if (board[x][col] === '') {
          addMarker(x + '-' + col);
          move = true;
          }
        }
      }
    }
  }  
  //row win
  if (move === false) {
    let rowOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[i][0] === 'O' && board[i][1] ==='O') || (board[i][1] === 'O' && board[i][2] ==='O') || (board[i][0] === 'O' && board[i][2] === 'O')) {
        rowOfX = i;
        for(let x = 0; x < 3; x++) {
        let row = rowOfX;
        if (board[row][x] === '') {
          addMarker(row + '-' + x);
          move = true;
          }
        }
      }
    }
  }  
  //diagonal win
    if (move === false) {
    if ((board[0][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[2][2] ==='O') || (board[0][0] === 'O' && board[2][2] ==='O')) {
      for (let i = 0; i < 3; i++) {
        if (board[i][i] === '') {
          addMarker(i + '-' + i);
          move = true;
          }
        }
     }
    } 
    if (move === false) {
      if ((board[2][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[0][2] ==='O') || (board[2][0] === 'O' && board[0][2] ==='O')) {
           let y = 2;
           for (let i = 0; i < 3; i++) {
             if (board[y][i] === '') {
             addMarker(y + '-' + i);
             move = true;
           }
           y = y - 1;
         }
      }
    }
       
  //column block
  if (move === false) {
    let colOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[0][i] === 'X' && board[1][i] ==='X') || (board[1][i] === 'X' && board[2][i] ==='X') || (board[0][i] === 'X' && board[2][i] ==='X')) {
        colOfX = i;
        for(let x = 0; x < 3; x++) {
        let col = colOfX;
        if (board[x][col] === '') {
          addMarker(x + '-' + col);
          move = true;
          }
        }
      }
    }
  }  
  //row block
  if (move === false) {
    let rowOfX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[i][0] === 'X' && board[i][1] ==='X') || (board[i][1] === 'X' && board[i][2] ==='X') || (board[i][0] === 'X' && board[i][2] === 'X')) {
        rowOfX = i;
        for(let x = 0; x < 3; x++) {
        let row = rowOfX;
        if (board[row][x] === '') {
          addMarker(row + '-' + x);
          move = true;
          }
        }
      }``
    }
  }  
  //diagonal block
  if (move === false) {
    if ((board[0][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[2][2] ==='X') || (board[0][0] === 'X' && board[2][2] ==='X')) {
      for (let i = 0; i < 3; i++) {
        if (board[i][i] === '') {
          addMarker(i + '-' + i);
          move = true;
         }
      }
    }
  }
  if (move === false) {
    if ((board[2][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[0][2] ==='X') || (board[2][0] === 'X' && board[0][2] ==='X')) {
          let y = 2;
          for (let i = 0; i < 3; i++) {
            if (board[y][i] === '') {
            addMarker(y + '-' + i);
            move = true;
          }
          y = y - 1;
        }
    }
  } 
}

const addMarker = (id) => {
    console.log(`We'll place a mark on square: ${id}`)
    document.getElementById(id).innerHTML = currentMarker;
    const row = parseInt(id.charAt(0))
    const column = parseInt(id.charAt(2)) 
    board[row][column] = currentMarker
    console.log(board)
    checkForWin()
}

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part the newly create number as row & column
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)

  // @TODO, Your code here: use the above information to change the board variable(array of arrays)
  // HINT: in your browser open up the dev tools -> console
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    gameover = true;
    setTimeout(()=> {
        window.alert(`Player ${currentMarker} won!`)
    }, 400)
    } else if (nobodyWins()) {
      gameover = true;
      setTimeout(()=> {
        window.alert('It\'s a tie!')
      }, 400)
    } else {
      // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}


const horizontalWin = () => {
  // @TODO, Your code here: to check for horizontal wins
  if((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || 
    (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
    (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || 
    (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
    (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') || 
    (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')){ 
      return true;
    }
}

const verticalWin = () => {
  // @TODO, Your code here: to check for vertical wins
  if((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || 
    (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') ||
    (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || 
    (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||
    (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || 
    (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')){
    return true;
    } 
}

const diagonalWin = () => {
  // @TODO, Your code here: to check for diagonal wins
  if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || 
    (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
    (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') || 
    (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
    (board[0][2] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
    (board[0][2] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')){
    return true;
    } 
}

const nobodyWins = () => {
  if((board[0][0] === 'X' || board[0][0] === 'O') && 
    (board[0][1] === 'X' || board[0][1] === 'O') &&
    (board[0][2] === 'X' || board[0][2] === 'O') &&
    (board[1][0] === 'X' || board[1][0] === 'O') &&
    (board[1][1] === 'X' || board[1][1] === 'O') &&
    (board[1][2] === 'X' || board[1][2] === 'O') &&
    (board[2][0] === 'X' || board[2][0] === 'O') &&
    (board[2][1] === 'X' || board[2][1] === 'O') &&
    (board[2][2] === 'X' || board[2][2] === 'O')){
    return true;
    } 
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === "X" ? "O" : "X"
}

const resetBoard = () => {
  // sanity check: this tells us the function is being called
  console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collections and clears out the Xs and Os
  for (i=0; i<squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
  }
  
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
  location.reload();
}

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"