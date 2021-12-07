const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync('./input', 'utf-8');
  const stg = input.trim().split('\n\n');

  const bingoNumbers = stg[0].split(',').map(num => parseInt(num))
  const boards = stg
    .slice(1)
    .map(card => card.split('\n')
    .map(row => row.split(' ')    
    .filter(num=> num !== '')
    .map(num => ({ num: parseInt(num), marked: false, winner: false }))));

  return {
    bingoNumbers,
    boards,
  }
};

const isWinningBoard = (card) => {
  let win;

  // Check each row for a win first
  let row = 0
  for(; row < 5; row++) {
    win = card[row].reduce((rowWin, { marked }) => rowWin && marked, true);
    if (win) {
      card[row] = card[row].map((c) =>({...c, winner: true}))
      return true;
    }
  }

  // Check each column for a win
  let column = 0
  for(; column < 5 && !win; column ++) {
    // Loop through each row and check the current column being checked. If all values are true, the output should be true and we found a winner.
    win = card.reduce((colWin, row) => colWin && row[column].marked, true)
    if (win) {
      card = card.map(row => {
        let operating = row[column]
        operating.winner = true
        row[column] = operating
      });
      return true
    }
  }

  return false;
}

let { bingoNumbers, boards } = getInput();

let winningBoards;
let winningNum = 0;
for(let i = 0; i < bingoNumbers.length; i++) {
  const num = bingoNumbers[i];
  // Apply current bingo number

  boards = boards.map(board => {
    return board.map(row => {
      return row.map(space => {
        if(space.num === num)
          return {
            ...space, 
            marked: true,
          };
        return space;
      })
    })
  });

  let roundWinners = boards.filter(board => isWinningBoard(board));
  if (roundWinners.length !== 0) {
    boards = boards.filter(board => !isWinningBoard(board));
    if(boards.length === 0){
      winningBoards = roundWinners;
      winningNum = num;
      break;
    }
  }
}

console.log(winningBoards[0].reduce((card_sum, row) => card_sum + row.reduce((row_sum, {num, marked}) => row_sum + (!marked && num) ,0),0));

console.log(winningNum);
