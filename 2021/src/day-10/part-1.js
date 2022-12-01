import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('10', input => input.split('\n').map(i => i.trim().split('')));

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

  let total = 0;
  for(let i = 0; i < input.length; i++) {
    const stack = [];
    for(let j = 0; j < input[i].length; j++) {
      const sym = input[i][j];

      if(!isClosing(sym)) stack.push(sym);
      else {
        const popped = stack.pop();
        if(!isComplement(popped, sym)){
          switch(sym) {
            case ']':
              total += 57;
              break;
            case '}':
              total += 1197;
              break;
            case '>':
              total += 25137;
              break;
            case ')':
              total += 3;
              break;
          }
          break;
        }
      }
    }

    if(stack.length === 1) {
      const p = stack.pop();
      switch(p) {
        case ']':
          total += 57;
          break;
        case '}':
          total += 1197;
          break;
        case '>':
          total += 25137;
          break;
        case ')':
          total += 3;
          break;
      }
    }
  }

  return total;
};

export default solution;
