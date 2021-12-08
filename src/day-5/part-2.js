import { getInput } from '../helpers/index.js';

const inputProcessor = input => {
  const coords = input.split('\n');

  return coords.map(coord => {
    const [c1, c2] = coord.split(' -> ');

    return {
      p1: c1.split(',').map(p => parseInt(p)),
      p2: c2.split(',').map(p => parseInt(p)),
    };
  });
}

const solution = async () => {
  const input = await getInput('5', inputProcessor);

  const map = [];
  for(let i = 0; i < 1000; i++){
    map.push([]);
    for(let j = 0; j < 1000; j++){
      map[i].push(0);
    }
  }
  
  input.forEach(({ p1, p2 }) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
  
    const isDiag = x1 !== x2 && y1 !== y2;
    const biggerX = x1 > x2 ? x1 : x2;
    const biggerY = y1 > y2 ? y1 : y2;
    const smallerX = x1 < x2 ? x1 : x2;
    const smallerY = y1 < y2 ? y1 : y2;
  
    if(isDiag) {
      const xSign = x2 > x1 ? 1 : -1;
      const ySign = y2 > y1 ? 1 : -1;
      const x = xSign === -1 ? biggerX : smallerX;
      const y = ySign === -1 ? biggerY : smallerY;
  
      for(let i = 0; i < biggerX - smallerX + 1; i++) {
        map[y + (i * ySign)][x + (i * xSign)]++;
      }
    } else {
      for(let i = smallerY; i < biggerY + 1; i++) {
        for(let j = smallerX; j < biggerX + 1; j++) {
          map[i][j]++;
        }
      }
    }
  });
  
  let total = 0;
  for(let i = 0; i < 1000; i++) {
    for(let j = 0; j < 1000; j++) {
      if(map[i][j] > 1) total++;
    }
  }
  
  return total;
};

export default solution;
