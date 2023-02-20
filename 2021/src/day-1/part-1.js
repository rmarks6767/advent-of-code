import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('1', input => input.split('\n').map(c => parseInt(c)));

  let increasing = 0;
  for(let i = 1; i < input.length; i++)
    if(input[i - 1] < input[i]) increasing++;

  return increasing;
}

export default solution;
