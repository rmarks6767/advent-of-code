import { getInput } from '../helpers/index.js';

const solution = async () => {
  let { input, parsed } = await getInput('8', input => {
    const lines = input.split('\n');

    return {
      input,
      parsed: lines.map(line => {
        const [i, out] = line.split('|');
        return {
          input: i.trim().split(' '),
          output: out.trim().split(' '),
        }
      }),
    };
  });

  let one = 0, four = 0, seven = 0, eight = 0;

  parsed.forEach(line => {
    const { input: i, output: o } = line;

    o.forEach(num => {
      if(num.length === 2) one++;
      else if(num.length === 4) four++;
      else if(num.length === 3) seven++;
      else if(num.length === 7) eight++;
    })
  });

  return one + four + seven + eight;
};

export default solution;
