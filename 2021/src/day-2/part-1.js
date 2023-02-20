import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('2', input => input.split('\n'));

  let depth = 0, horPos = 0;
  input.forEach(command => {
    const [c, amt] = command.split(' ');
  
    switch(c) {
      case 'up':
        depth -= parseInt(amt);
        break;
      case 'down':
        depth += parseInt(amt);
        break;
      case 'forward':
        horPos += parseInt(amt);
        break;
    }
  });

  return depth * horPos;
};

export default solution;
