import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('9', input => input.split('\n').map(i => i.split('').map(t => parseInt(t))));

  const pointExists = (point, b) => {
    try {
      for(let i = 0; i < b.length; i++) {
        for(let j = 0; j < b[i].length; j++) {
          if(point[0] === b[i][j][0] && point[1] === b[i][j][1]) return i;
        }
      }
  
      return -1;
    }
    catch(err) {
      console.log(err)
      return -1;
    }
  }

  let currentBasin = 0; 
  const basins = [[]]; 
  input.forEach((row, i) => {
    row.forEach((space, j) => {
      if(space !== 9) {
        const pUp = pointExists([i - 1, j], basins);
        const pLeft = pointExists([i, j - 1], basins);

        if(pUp !== -1) {
          basins[pUp].push([i, j]);

        if(pLeft !== currentBasin && pLeft !== -1 && pLeft !== pUp) {
            basins[pLeft].forEach(c => basins[pUp].push(c));
            basins[pLeft] = [];
          }

          basins[currentBasin].forEach(c => basins[pUp].push(c));
          basins[currentBasin] = [];
        }
        else if(pLeft !== currentBasin && pLeft !== -1) {
          basins[pLeft].push([i, j]);
          basins[currentBasin].forEach(c => basins[pLeft].push(c));
          basins[currentBasin] = [];
        }
        else {
          basins[currentBasin].push([i, j]);
        }
      }
      else {
        if(basins[currentBasin].length !== 0) {
          basins.push([]);
          currentBasin++;
        }
      }
    });
    if(basins[currentBasin].length !== 0) {
      basins.push([]);
      currentBasin++;
    }
  });

  const tL = [basins[0].length, basins[1].length, basins[2].length];
  
  for(let i = 3; i < basins.length; i++) {
    let foundLargest = false;
    const len = basins[i].length;
    tL.forEach((largest, i) => {
      if(!foundLargest && len > largest) {
        foundLargest = true;
        tL[i] = len;
      }
    })
  }

  return tL[0] * tL[1] * tL[2];
};

export default solution;
