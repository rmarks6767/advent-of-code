import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('1', input => input.split('\n').map(c => parseInt(c)));

  let increasing = 0;
  for(let i = 2; i < input.length; i++) {
    const p1 = input[i - 2] + input[i - 1] + input[i];
    const p2 = input[i - 1] + input[i] + input[i + 1];
  
    if(p1 < p2) increasing++;
  }

  return increasing;
}

export default solution;
