import { getInput } from '../helpers/index.js';

const bits = [
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
  {
    '0': 0,
    '1': 0,
  },
];

const solution = async () => {
  const input = await getInput('3', input => input.split('\n'));

  input.forEach(bin => {
    const digits = bin.split('');
    digits.forEach((b, i) => {
      bits[i][b]++
    });
  });
  
  const mostCommonBit = bits.map(b => b['0'] > b['1'] ? '0' : '1').join('');
  const leastCommonBit = bits.map(b => b['0'] > b['1'] ? '1' : '0').join('');

  return parseInt(mostCommonBit, 2) * parseInt(leastCommonBit, 2);
};

export default solution;
