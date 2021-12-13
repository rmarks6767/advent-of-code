import { getInput } from '../helpers/index.js';

const solution = async () => {
  const { dots, instructions } = await getInput('13', input => {
    const [d, i] = input.split('\n\n');

    return {
      dots: d.trim().split('\n').map(line => line.trim().split(',').map(i => parseInt(i))),
      instructions: i.trim().split('\n').map(line => {
        return {
          axis: line.includes('x') ? 'x' : 'y',
          amt: parseInt(line.trim().split('=')[1]),
        }
      }),
    }
  });

  const foldPaper = (axis, amount, paper) => {
    const newPaper = [];

    // We are doing a horizontal fold
    if(axis === 'y') {
      for(let i = 0; i < amount; i++) {
        newPaper.push([]);

        const bottomLine = paper[paper.length - 1 - i];
        for(let j = 0; j < paper[i].length; j++) {
          if(bottomLine[j] === '#' || paper[i][j] === '#') newPaper[i].push('#');
          else newPaper[i].push('.');
        }
      }
    }
    // We are doing a vertical fold
    else {
      for(let i = 0; i < paper.length; i++) {
        newPaper.push([]);
  
        for(let j = 0; j < amount; j++) {
          if(paper[i][amount + 1 + j] === '#' || paper[i][amount - 1 - j] === '#') newPaper[i].push('#');
          else newPaper[i].push('.');
        }
      }
    }

    return newPaper;
  }

  let maxX = -1, maxY = -1;
  dots.forEach(dot => {
    if(dot[0] > maxX) maxX = dot[0];
    if(dot[1] > maxY) maxY = dot[1];
  });

  let paper = [];
  for(let i = 0; i < maxY + 1; i++) {
    paper.push([]);
    for(let j = 0; j < maxX + 1; j++) {
      paper[i].push('.');
    }
  }

  dots.forEach(element => paper[element[1]][element[0]] = '#');

  // Just the first instruction
  paper = foldPaper(instructions[0].axis, instructions[0].amt, paper);

  let numDots = 0;
  for(let i = 0; i < paper.length; i++) {
    for(let j = 0; j < paper[i].length; j++) {
      if(paper[i][j] === '#') numDots++; 
    }
  }

  return numDots;
};

export default solution;
