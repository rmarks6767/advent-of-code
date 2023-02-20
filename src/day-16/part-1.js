import { getInput } from '../helpers/index.js';

const conversions = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  'A': '1010',
  'B': '1011',
  'C': '1100',
  'D': '1101',
  'E': '1110',
  'F': '1111',
}

const solution = async () => {
  const input = await getInput('16', input => input.trim().split(''));

  const binary = input.map(i => conversions[i]).join('');

  let totalVersion = 0, current = 0, length = -1;
  let newBin = true;
  const binArr = [...binary];
  while(current < binArr.length) {
    if(newBin && binArr[current] === '0') {
      current++;
      continue;
    }

    if(newBin) {
      const version = `${binArr[current]}${binArr[current + 1]}${binArr[current + 2]}`
      const typeId = parseInt(`${binArr[current + 3]}${binArr[current + 4]}${binArr[current + 5]}`, 2);
      totalVersion += parseInt(version, 2);
      
      if(typeId === 4) {
        current += 6;
        newBin = false;
      }
      else {
        if(binArr[current + 6] === '1') length = 11;
        else if(binArr[current + 6] === '0') length = 15;
      }
      
      

    }
    else {
      if(binArr[current] === '0') newBin = true;
      current += 5
    }
  }

  return totalVersion;
};

export default solution;


// Type ID 4 means literal
// Type ID 