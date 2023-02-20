import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('16', input => input.split(',').map(i => parseInt(i)));

};

export default solution;
