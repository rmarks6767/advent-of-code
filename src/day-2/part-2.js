import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('2', input => input.split('\n'));
 
  let depth = 0, horPos = 0, aim = 0;
  input.forEach(command => {
    const [c, amt] = command.split(' ');
  
    switch(c) {
      case 'up':
        aim -= parseInt(amt);
        break;
      case 'down':
        aim += parseInt(amt);
        break;
      case 'forward':
        horPos += parseInt(amt);
        depth += aim * parseInt(amt);
        break;
    }
  });

  return depth * horPos;
};

export default solution;
