import { getInput } from '../helpers/index.js';

const inputProcessor = input => {
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
  };
}

const solution = async () => {
  const isWinningBoard = card => {
    let win;
  
    let row = 0
    for(; row < 5; row++) {
      win = card[row].reduce((rowWin, { marked }) => rowWin && marked, true);
      if (win) {
        card[row] = card[row].map((c) =>({...c, winner: true}))
        return true;
      }
    }
  
    let column = 0
    for(; column < 5 && !win; column ++) {
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
  
  let { bingoNumbers, boards }  = await getInput('4', inputProcessor);
  
  let winningBoards;
  let winningNum = 0;
  for(let i = 0; i < bingoNumbers.length; i++) {
    const num = bingoNumbers[i];  
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
  
  const boardVal = winningBoards[0].reduce((card_sum, row) => card_sum + row.reduce((row_sum, {num, marked}) => row_sum + (!marked && num) ,0),0);
  return boardVal * winningNum;
};

export default solution;