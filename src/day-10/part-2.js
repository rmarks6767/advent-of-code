import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('10', input => 
      input.split('\n').map(i => {
        return {
          line: i.trim().split(''),
          corrupted: false,
        }
      }),
    );

  const isClosing = sym => [']', '}', ')', '>'].includes(sym);
  const isComplement = (s1, s2) => {
    switch(s1) {
      case '[':
        return s2 === ']';
      case '{':
        return s2 === '}';
      case '<':
        return s2 === '>';
      case '(':
        return s2 === ')';
    }
  }

  for(let i = 0; i < input.length; i++) {
    const stack = [];
    for(let j = 0; j < input[i].line.length; j++) {
      const sym = input[i].line[j];

      if(!isClosing(sym)) stack.push(sym);
      else {
        const popped = stack.pop();
        if(!isComplement(popped, sym)){
          input[i].corrupted = true;
          break;
        }
      }
    }

    if(stack.length === 1) input[i].corrupted = true;
  }

  const getComplement = sym => {
    switch(sym) {
      case '[':
        return 2;
      case '{':
        return 3;
      case '<':
        return 4;
      case '(':
        return 1;
    }
  }

  const newInput = input.filter(c => !c.corrupted);

  let scores = [];
  for(let i = 0; i < newInput.length; i++) {
    const stack = [];
    for(let j = 0; j < newInput[i].line.length; j++) {
      const sym = newInput[i].line[j];

      if(!isClosing(sym)) stack.push(sym);
      else stack.pop();
    }

    console.log(stack.join(''));

    let score = 0;
    for(let j = stack.length - 1; j >= 0; j--) {
      score *= 5;
      score += getComplement(stack[j]);
    }
    console.log(score);

    scores.push(score);
  }

  return scores.sort((c, s) => c - s)[Math.floor(scores.length / 2)];
};

export default solution;
