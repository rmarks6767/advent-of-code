import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('7', input => input.split(',').map(i => parseInt(i)));

  input = input.sort((c1, c2) => c1 - c2);

  const nums = { };
  input.forEach(crab => {
    if(nums[crab]) nums[crab]++;
    else nums[crab] = 1;
  });

  let minFuel = 100000000;
  for(let i = 0; i < 2000; i++) {
    let currentFuel = 0;
    input.forEach(crab => {
      currentFuel += Math.abs(i - crab);
    });

    if(currentFuel < minFuel) minFuel = currentFuel;
  }

  return minFuel;
};

export default solution;
