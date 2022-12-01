import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('9', input => input.split('\n').map(i => i.split('').map(t => parseInt(t))));

  let riskLevel = 0;
  input.forEach((row, i) => {
    row.forEach((space, j) => {
      let checkUp = false, checkDown = false, checkLeft = false, checkRight = false, threshold = 0;
      if(i > 0) {
        checkUp = true;
        threshold++;
      }
      if(i < input.length - 1) {
        checkDown = true;
        threshold++;
      }
      if(j > 0) {
        checkLeft = true;
        threshold++;
      }
      if(j < row.length - 1) {
        checkRight = true;
        threshold++;
      }
      
      let total = 0;
      if(checkUp) {
        if(space < input[i - 1][j]) total++;
      }
      if(checkDown) {
        if(space < input[i + 1][j]) total++;
      }
      if(checkLeft) {
        if(space < input[i][j - 1]) total++;
      }
      if(checkRight) {
        if(space < input[i][j + 1]) total++;
      }

      if(total >= threshold) riskLevel += space + 1;
    })
  });

  return riskLevel;
};

export default solution;
