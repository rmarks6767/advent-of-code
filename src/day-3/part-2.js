import { getInput } from '../helpers/index.js';

const solution = async () => {
  const [ogr, csr] = ['mc', 'lc'].map(async b => {
    let input = await getInput('3', input => input.split('\n'));
    let j = 0;
    while(true) {
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
  
      input.forEach(bin => {
        const digits = bin.split('');
        digits.forEach((b, i) => {
          bits[i][b]++
        });
      });
  
      if(input.length == 1) return input

      let bit;
      if(b === 'mc') bit = bits[j]['1'] >= bits[j]['0'] ? '1' : '0';
      else bit = bits[j]['1'] >= bits[j]['0'] ? '0' : '1';

      input = input.filter(diag => diag.charAt(j) === bit);
  
      j++;
    }
  });

  return parseInt(await ogr, 2) * parseInt(await csr, 2);
};

export default solution;
