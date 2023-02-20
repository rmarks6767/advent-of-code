import { getInput } from '../helpers/index.js';

const solution = async () => {
  let parsed = await getInput('8', input => {
    const lines = input.split('\n');

    return lines.map(line => {
      const [i, out] = line.split('|');
      return {
        input: i.trim().split(' '),
        output: out.trim().split(' '),
      }
    });
  });

  function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
  }

  let total = 0;
  parsed.forEach(line => {
    const { input: i, output: o } = line;

    const lettersToNumber = {};
    i.forEach(num => {
      const letters = [...num].sort(case_insensitive_comp).join('');

      switch(num.length) {
        case 2:
          lettersToNumber['1'] = letters;
          break;
        case 3:
          lettersToNumber['7'] = letters;
          break;
        case 4:
          lettersToNumber['4'] = letters;
          break;
        case 7:
          lettersToNumber['8'] = letters;
          break;
      }
    });

    i.forEach(num => {
      const letters = [...num].sort(case_insensitive_comp).join('');
      switch(num.length) {
        case 5: {
          let numSameLettersOne = 0, numSameLettersFour = 0;
          [...lettersToNumber['1']].forEach(letter => {
            if(letters.includes(letter)) numSameLettersOne++;
          });

          [...lettersToNumber['4']].forEach(letter => {
            if(letters.includes(letter)) numSameLettersFour++;
          });

          if(numSameLettersOne === 2) lettersToNumber['3'] = letters;
          else if(numSameLettersFour === 3) lettersToNumber['5'] = letters;
          else lettersToNumber['2'] = letters;
          break;
        }
        case 6: {
          let numSameLettersFour = 0, numSameLettersSeven = 0;
          [...lettersToNumber['4']].forEach(letter => {
            if(letters.includes(letter)) numSameLettersFour++;
          });  

          [...lettersToNumber['7']].forEach(letter => {
            if(letters.includes(letter)) numSameLettersSeven++;
          });  

          if(numSameLettersSeven !== 3) lettersToNumber['6'] = letters;
          else if(numSameLettersFour === 4) lettersToNumber['9'] = letters;
          else lettersToNumber['0'] = letters;
          break;
        }
      }
    });

    let number = '';
    o.forEach(num => {
      const l = [...num].sort(case_insensitive_comp).join('');
      const n = Object.keys(lettersToNumber).find(k => lettersToNumber[k] === l);

      number = `${number}${n}`;
    });

    total += parseInt(number);
  });

  return total;
};

export default solution;
