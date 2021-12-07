const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync('./input', 'utf-8');
  
  return input.split(',').map(c => parseInt(c));
};

let input = getInput();

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
    const dist = Math.abs(i - crab);
    for(let j = 1; j < dist + 1; j++) {
      currentFuel += j;
    }
  });

  if(currentFuel < minFuel) minFuel = currentFuel;
}

console.log(minFuel);
